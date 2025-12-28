import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';

const FloatingCartButton = () => {
    const { user, cart } = useShop();
    const navigate = useNavigate();

    const handleClick = () => {
        if (!user) {
            navigate('/login');
        } else {
            navigate('/cart');
        }
    };

    const itemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 bg-[#00C8FA] hover:bg-[#00b0dc] text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110 flex items-center justify-center group"
            aria-label="View Cart"
        >
            <div className="relative">
                <ShoppingBag size={24} />
                {itemCount > 0 && user && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#00C8FA]">
                        {itemCount}
                    </span>
                )}
            </div>
        </button>
    );
};

export default FloatingCartButton;
