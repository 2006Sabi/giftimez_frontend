import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { User, ShoppingBag, Heart, Package, LogOut, Edit, Save, X } from 'lucide-react';

const Profile = () => {
    const { user, updateProfile, logout, cart, wishlist, fetchMyOrders } = useShop();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [isEditing, setIsEditing] = useState(false);
    const [orders, setOrders] = useState([]);

    // Edit form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                password: '',
                confirmPassword: ''
            });
            // Fetch orders
            fetchMyOrders().then(data => setOrders(data));
        }
    }, [user, navigate]); // Removed fetchMyOrders from dep array to avoid loops, or use useCallback in context

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        if (formData.password && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            await updateProfile({
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            setIsEditing(false);
            alert("Profile updated successfully");
        } catch (error) {
            alert(error.message);
        }
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#00C8FA] p-8 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="h-20 w-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <User className="h-10 w-10 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold">{user.name}</h1>
                                    <p className="text-white/80">{user.email}</p>
                                </div>
                            </div>
                            <button
                                onClick={logout}
                                className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
                            >
                                <LogOut className="h-5 w-5 mr-2" />
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="border-b border-gray-200">
                        <nav className="flex px-8 overflow-x-auto">
                            {[
                                { id: 'overview', icon: User, label: 'Overview' },
                                { id: 'orders', icon: Package, label: 'Bought Products' },
                                { id: 'wishlist', icon: Heart, label: 'Wishlist' },
                                { id: 'cart', icon: ShoppingBag, label: 'Cart' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
                                        ${activeTab === tab.id
                                            ? 'border-[#00C8FA] text-[#00C8FA]'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                                    `}
                                >
                                    <tab.icon className="h-5 w-5 mr-2" />
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {/* OVERVIEW TAB */}
                        {activeTab === 'overview' && (
                            <div className="max-w-2xl">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">Profile Details</h2>
                                    {!isEditing && (
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="flex items-center text-[#00C8FA] hover:text-[#00b0dc]"
                                        >
                                            <Edit className="h-4 w-4 mr-1" /> Edit
                                        </button>
                                    )}
                                </div>

                                {isEditing ? (
                                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#00C8FA] focus:border-[#00C8FA]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#00C8FA] focus:border-[#00C8FA]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">New Password (leave blank to keep current)</label>
                                            <input
                                                type="password"
                                                value={formData.password}
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#00C8FA] focus:border-[#00C8FA]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                                            <input
                                                type="password"
                                                value={formData.confirmPassword}
                                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#00C8FA] focus:border-[#00C8FA]"
                                            />
                                        </div>
                                        <div className="flex space-x-3 pt-4">
                                            <button
                                                type="submit"
                                                className="flex items-center px-4 py-2 bg-[#00C8FA] text-white rounded-md hover:bg-[#00b0dc]"
                                            >
                                                <Save className="h-4 w-4 mr-2" /> Save Changes
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setIsEditing(false)}
                                                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                                            >
                                                <X className="h-4 w-4 mr-2" /> Cancel
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                                        <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                                            <span className="text-gray-500">Full Name</span>
                                            <span className="col-span-2 font-medium text-gray-900">{user.name}</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                                            <span className="text-gray-500">Email</span>
                                            <span className="col-span-2 font-medium text-gray-900">{user.email}</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <span className="text-gray-500">Member Since</span>
                                            <span className="col-span-2 font-medium text-gray-900">{new Date().getFullYear()}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ORDERS TAB */}
                        {activeTab === 'orders' && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Order History</h2>
                                {orders.length === 0 ? (
                                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                                        <Package className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                        <p className="text-gray-600">No orders yet.</p>
                                        <button onClick={() => navigate('/services')} className="mt-4 text-[#00C8FA] font-medium hover:underline">Start Shopping</button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {orders.map((order) => (
                                            <div key={order._id} className="border border-gray-200 rounded-lg overflow-hidden">
                                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                                                    <div>
                                                        <span className="text-sm text-gray-500 block">Order Placed</span>
                                                        <span className="font-medium">{new Date(order.createdAt).toLocaleDateString()}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-sm text-gray-500 block">Total</span>
                                                        <span className="font-medium">₹{order.totalPrice}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-sm text-gray-500 block">Order #</span>
                                                        <span className="font-medium">{order._id.substring(order._id.length - 8).toUpperCase()}</span>
                                                    </div>
                                                </div>
                                                <div className="p-6">
                                                    {order.orderItems.map((item, index) => (
                                                        <div key={index} className="flex items-center space-x-4 mb-4 last:mb-0">
                                                            <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded-md" />
                                                            <div className="flex-1">
                                                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                                                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                                            </div>
                                                            <span className="font-medium text-gray-900">₹{item.price}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* WISHLIST TAB */}
                        {activeTab === 'wishlist' && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-6">My Wishlist</h2>
                                {wishlist.length === 0 ? (
                                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                                        <Heart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                        <p className="text-gray-600">Your wishlist is empty.</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                        {wishlist.map((item) => (
                                            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden group">
                                                <div className="relative aspect-w-1 aspect-h-1 h-48 overflow-hidden">
                                                    <img
                                                        src={item.src || item.image}
                                                        alt={item.title || item.alt}
                                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="font-medium text-gray-900 truncate">{item.title || item.alt || "Unknown Item"}</h3>
                                                    <p className="text-[#00C8FA] font-bold mt-1">{item.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* CART TAB */}
                        {activeTab === 'cart' && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Shopping Cart</h2>
                                {cart.length === 0 ? (
                                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                                        <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                        <p className="text-gray-600">Your cart is empty.</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {cart.map((item, idx) => (
                                            <div key={`cart-item-${idx}`} className="flex items-center justify-between border-b border-gray-200 pb-4">
                                                <div className="flex items-center space-x-4">
                                                    <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded-md" />
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                                                        <p className="text-sm text-gray-500">Qty: {item.quantity || 1}</p>
                                                    </div>
                                                </div>
                                                <span className="font-medium text-gray-900">{item.price}</span>
                                            </div>
                                        ))}
                                        <div className="pt-4 flex justify-end">
                                            <button
                                                onClick={() => navigate('/cart')}
                                                className="px-6 py-2 bg-[#00C8FA] text-white rounded-full hover:bg-[#00b0dc]"
                                            >
                                                Go to Checkout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
