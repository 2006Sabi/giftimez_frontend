import React, { createContext, useState, useContext, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('token'));
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const API_URL = 'http://localhost:5000/api';

    // Helper for auth headers
    const authHeader = () => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    // Load data on mount/token change
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
            fetchUser();
            fetchCart();
            fetchWishlist();
        } else {
            localStorage.removeItem('token');
            setUser(null);
            setCart([]);
            setWishlist([]);
        }
    }, [token]);

    const fetchUser = async () => {
        if (!token) return;
        try {
            const res = await fetch(`${API_URL}/auth/me`, { headers: authHeader() });
            if (res.ok) {
                const userData = await res.json();
                setUser(userData);
            } else {
                // If token is invalid, logout
                logout();
            }
        } catch (err) { console.error(err); }
    };

    const register = async (userData) => {
        try {
            const res = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setToken(data.token);
            setUser({ name: data.name, email: data.email, _id: data._id });
            return data;
        } catch (error) {
            throw error;
        }
    };

    const login = async (userData) => {
        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setToken(data.token);
            setUser({ name: data.name, email: data.email, _id: data._id });
            // Cart and Wishlist will be fetched by useEffect
        } catch (error) {
            console.error(error);
            alert(error.message); // Simple error feedback
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setCart([]);
        setWishlist([]);
        localStorage.removeItem('token');
    };

    const fetchCart = async () => {
        if (!token) return;
        try {
            const res = await fetch(`${API_URL}/cart`, { headers: authHeader() });
            if (res.ok) setCart(await res.json());
        } catch (err) { console.error(err); }
    };

    const fetchWishlist = async () => {
        if (!token) return;
        try {
            const res = await fetch(`${API_URL}/wishlist`, { headers: authHeader() });
            if (res.ok) setWishlist(await res.json());
        } catch (err) { console.error(err); }
    };

    const addToCart = async (product) => {
        if (!user) {
            alert("Please login to add to cart");
            return;
        }

        try {
            const res = await fetch(`${API_URL}/cart/add`, {
                method: 'POST',
                headers: authHeader(),
                body: JSON.stringify({
                    productId: product.id || product._id,
                    name: product.title || product.name,
                    image: product.image || product.src,
                    price: product.price,
                    category: product.category,
                    customization: product.customization || null
                }),
            });
            if (res.ok) {
                const updatedCart = await res.json();
                setCart(updatedCart);
            }
        } catch (error) {
            console.error("Add to cart error", error);
        }
    };

    const placeOrder = async (orderData) => {
        try {
            const res = await fetch(`${API_URL}/orders`, {
                method: 'POST',
                headers: authHeader(),
                body: JSON.stringify(orderData),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            // Clear cart backend side happens potentially, or we do it here?
            // Usually backend returns created order. We should clear cart frontend too.
            setCart([]);
            await fetchCart(); // Sync empty cart
            return data;
        } catch (error) {
            throw error;
        }
    };

    const updateProfile = async (profileData) => {
        try {
            const res = await fetch(`${API_URL}/auth/profile`, {
                method: 'PUT',
                headers: authHeader(),
                body: JSON.stringify(profileData),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setUser(data);
            return data;
        } catch (error) {
            throw error;
        }
    };

    const fetchMyOrders = async () => {
        if (!token) return [];
        try {
            const res = await fetch(`${API_URL}/orders/myorders`, { headers: authHeader() });
            if (res.ok) return await res.json();
            return [];
        } catch (err) {
            console.error(err);
            return [];
        }
    };

    const removeFromCart = async (productId) => {
        try {
            const res = await fetch(`${API_URL}/cart/remove/${productId}`, {
                method: 'DELETE',
                headers: authHeader()
            });
            if (res.ok) setCart(await res.json());
        } catch (err) { console.error(err); }
    };

    const toggleWishlist = async (product) => {
        if (!user) {
            alert("Please login to use wishlist");
            return;
        }

        const isLiked = isInWishlist(product);
        try {
            if (isLiked) {
                const res = await fetch(`${API_URL}/wishlist/remove/${product.id || product._id}`, {
                    method: 'DELETE',
                    headers: authHeader()
                });
                if (res.ok) setWishlist(await res.json());
            } else {
                const res = await fetch(`${API_URL}/wishlist/add`, {
                    method: 'POST',
                    headers: authHeader(),
                    body: JSON.stringify({
                        id: product.id || product._id,
                        title: product.title || product.name,
                        price: product.price,
                        image: product.image, // Service image
                        src: product.src, // Gallery image
                        alt: product.alt,
                        category: product.category
                    }),
                });
                if (res.ok) setWishlist(await res.json());
            }
        } catch (err) { console.error(err); }
    };

    const isInWishlist = (product) => {
        return wishlist.some(item => (item.id === product.id || item.id === product._id) && item.category === product.category);
    };

    return (
        <ShopContext.Provider value={{ cart, wishlist, user, login, register, logout, addToCart, removeFromCart, toggleWishlist, isInWishlist, placeOrder, updateProfile, fetchMyOrders }}>
            {children}
        </ShopContext.Provider>
    );
};
