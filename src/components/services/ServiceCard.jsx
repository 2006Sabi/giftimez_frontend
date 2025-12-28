import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import { ShoppingCart, Heart } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

const ServiceCard = ({ service }) => {
    const Icon = service.icon;
    const { addToCart, toggleWishlist, isInWishlist, user } = useShop();
    const isLiked = isInWishlist(service);
    const navigate = useNavigate();

    const handleAction = (action) => {
        if (!user) {
            navigate('/login');
        } else {
            action();
        }
    };

    return (
        <Card className="flex flex-col h-full bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-primary overflow-hidden">
            {service.image && (
                <div className="h-48 overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-6 flex items-center justify-between">
                    <div className="p-3 bg-light-bg rounded-lg text-primary">
                        <Icon size={32} />
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                        {service.category}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-text-dark mb-3">{service.title}</h3>
                <p className="text-text-light mb-6 flex-grow text-sm leading-relaxed">{service.description}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            className={`p-2 rounded-full hover:bg-red-50 hover:text-red-500 ${isLiked ? 'text-red-500' : 'text-gray-400'}`}
                            onClick={() => handleAction(() => toggleWishlist(service))}
                        >
                            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                        </Button>
                        <Button
                            variant="primary"
                            className="p-2 rounded-full"
                            onClick={() => handleAction(() => addToCart(service))}
                        >
                            <ShoppingCart size={20} />
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ServiceCard;
