import React from 'react';
import { ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';

const BuyActions = ({ product, customization, onAddToCart }) => {
    const navigate = useNavigate();
    const { user, toggleWishlist, isInWishlist } = useShop();
    const isLiked = isInWishlist(product);

    const handleAddToCart = () => {
        if (!user) {
            navigate('/login');
        } else {
            onAddToCart();
        }
    };

    const handleWishlist = () => {
        if (!user) {
            navigate('/login');
        } else {
            toggleWishlist(product);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            {/* Add to Cart Button */}
            <button
                onClick={handleAddToCart}
                className="w-full bg-[#FA0000] hover:bg-[#d60000] text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
            </button>

            {/* Wishlist Button */}
            <button
                onClick={handleWishlist}
                className={`w-full border-2 font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 ${isLiked
                        ? 'bg-red-50 border-red-500 text-red-500 hover:bg-red-100'
                        : 'border-gray-300 text-gray-700 hover:border-[#00C8FA] hover:text-[#00C8FA] hover:bg-[#F0F9FF]'
                    }`}
            >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>

            {/* Back Button */}
            <button
                onClick={() => navigate('/services')}
                className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all hover:border-gray-400 hover:bg-gray-50 flex items-center justify-center gap-2"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
            </button>

            {/* Info Text */}
            {!user && (
                <p className="text-sm text-gray-500 text-center mt-4">
                    Please login to add items to cart or wishlist
                </p>
            )}
        </div>
    );
};

export default BuyActions;
