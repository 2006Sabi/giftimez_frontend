import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { useShop } from '../context/ShopContext';
import { Trash2, ShoppingBag, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useShop();
    const navigate = useNavigate();

    // Helper to calculate total (assuming price string like "$15.00")
    const total = cart.reduce((acc, item) => {
        const price = parseFloat(item.price?.replace('$', '') || 0);
        return acc + price * (item.quantity || 1);
    }, 0);

    const handleBuyNow = (item) => {
        // Navigate to Buy page with the product data for customization
        const product = {
            id: item.productId,
            title: item.name,
            name: item.name,
            image: item.image,
            price: item.price,
            category: item.category,
            description: `Customize your ${item.name}`
        };
        navigate('/buy', { state: { product } });
    };

    return (
        <section className="pt-32 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <SectionTitle title="Shopping Cart" subtitle="Your Selection" />

                {cart.length === 0 ? (
                    <div className="text-center py-12">
                        <ShoppingBag size={64} className="mx-auto text-gray-200 mb-4" />
                        <h3 className="text-xl font-bold text-text-dark mb-2">Your cart is empty</h3>
                        <Link to="/services">
                            <Button variant="primary" className="mt-4">Continue Shopping</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="lg:w-2/3 space-y-6">
                            {cart.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50">
                                        <img
                                            src={item.image || item.src}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-text-dark">{item.name}</h3>
                                        <p className="text-text-light text-sm mb-1">{item.category}</p>
                                        <div className="flex items-center gap-4">
                                            <span className="font-bold text-primary">{item.price}</span>
                                            <span className="text-sm text-gray-500">Qty: {item.quantity || 1}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleBuyNow(item)}
                                            className="p-2 text-gray-400 hover:text-[#00C8FA] transition-colors"
                                            title="Buy Now"
                                        >
                                            <ShoppingCart size={20} />
                                        </button>
                                        <button
                                            onClick={() => removeFromCart(item.productId)}
                                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                            title="Remove"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-light-bg p-6 rounded-2xl sticky top-24">
                                <h3 className="text-xl font-bold text-text-dark mb-6">Order Summary</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-text-light">
                                        <span>Subtotal</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-text-light">
                                        <span>Shipping</span>
                                        <span>Calculated at checkout</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg text-text-dark">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <Button variant="primary" className="w-full py-3">Proceed to Checkout</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;
