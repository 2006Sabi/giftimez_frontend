import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { useShop } from '../context/ShopContext';
import { ShoppingCart, Heart, Trash2 } from 'lucide-react';

const Wishlist = () => {
    const { wishlist, toggleWishlist, addToCart } = useShop();

    return (
        <section className="pt-32 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <SectionTitle title="My Wishlist" subtitle="Your Favorites" />

                {wishlist.length === 0 ? (
                    <div className="text-center py-12">
                        <Heart size={64} className="mx-auto text-gray-200 mb-4" />
                        <h3 className="text-xl font-bold text-text-dark mb-2">Your wishlist is empty</h3>
                        <p className="text-text-light">Start adding items you love!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {wishlist.map((item, index) => (
                            <Card key={index} className="flex flex-col h-full bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-primary overflow-hidden">
                                {item.image || item.src ? (
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={item.image || item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <button
                                            onClick={() => toggleWishlist(item)}
                                            className="absolute top-2 right-2 p-2 bg-white rounded-full text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                                        <span className="text-gray-400">No Image</span>
                                        <button
                                            onClick={() => toggleWishlist(item)}
                                            className="absolute top-2 right-2 p-2 bg-white rounded-full text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-text-dark mb-2">{item.title}</h3>
                                    <p className="text-text-light text-sm mb-4 line-clamp-2">{item.description}</p>
                                    <div className="mt-auto flex justify-between items-center">
                                        <span className="font-bold text-primary">{item.price}</span>
                                        <Button variant="primary" className="p-2 rounded-full" onClick={() => addToCart(item)}>
                                            <ShoppingCart size={20} />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Wishlist;
