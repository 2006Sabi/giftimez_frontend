import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryFilter from './GalleryFilter';
import ImageModal from './ImageModal';
import { ZoomIn, Heart } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

// Using placeholder colors/divs as images if actual URLs not available, but user requested nice aesthetics.
// I will use Unsplash structure for demo purposes if valid, otherwise colored placeholders.
// Unsplash random images are usually reliable for demos.
const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800", category: "Gifts", title: "Custom Gift Box", alt: "Gift Box", price: "$49.99" },
    { id: 2, src: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800", category: "Apparel", title: "Printed T-Shirt", alt: "T-Shirt", price: "$24.99" },
    { id: 3, src: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800", category: "Gifts", title: "Holiday Surprise", alt: "Holiday Gift", price: "$39.99" },
    { id: 4, src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800", category: "Accessories", title: "Custom Watch", alt: "Watch", price: "$129.99" },
    { id: 5, src: "https://images.unsplash.com/photo-1574634534894-89d750a6f8a2?auto=format&fit=crop&q=80&w=800", category: "Decor", title: "Abstract Canvas", alt: "Canvas", price: "$89.99" },
    { id: 6, src: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=800", category: "Gifts", title: "Festive Wrap", alt: "Festive", price: "$15.99" },
    { id: 7, src: "https://images.unsplash.com/photo-1581078426770-6d3335163a77?auto=format&fit=crop&q=80&w=800", category: "Apparel", title: "Team Jerseys", alt: "Jerseys", price: "$34.99" },
    { id: 8, src: "https://images.unsplash.com/photo-1582562124811-c8ed263c9f14?auto=format&fit=crop&q=80&w=800", category: "Decor", title: "Wall Art", alt: "Wall Art", price: "$59.99" },
];

const categories = [...new Set(galleryImages.map(img => img.category))];

const GalleryGrid = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);
    const { toggleWishlist, isInWishlist, user } = useShop();
    const navigate = useNavigate();

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const handleWishlistClick = (e, image) => {
        e.stopPropagation();
        if (!user) {
            navigate('/login');
        } else {
            toggleWishlist(image);
        }
    };

    return (
        <section className="pt-10 pb-20 bg-white">
            <div className="container mx-auto px-4">
                <GalleryFilter
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    categories={categories}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredImages.map((image) => {
                        const isLiked = isInWishlist(image);
                        return (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-square"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-transparent transition-colors duration-300">
                                    {/* Heart Icon - Top Right (Visible on Hover) */}
                                    <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100 z-20">
                                        <button
                                            className={`bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            onClick={(e) => handleWishlistClick(e, image)}
                                        >
                                            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                                        </button>
                                    </div>

                                    {/* Zoom Icon - Center (Visible on Hover) */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                                        <div className="bg-black/30 p-4 rounded-full backdrop-blur-sm text-white">
                                            <ZoomIn size={32} />
                                        </div>
                                    </div>

                                    {/* Info Bar - Bottom (Always Visible) */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12 flex flex-col justify-end">
                                        <p className="font-bold text-white text-lg">{image.title}</p>
                                        <p className="text-gray-200 text-sm font-medium">{image.category}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <ImageModal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            </div>
        </section>
    );
};

export default GalleryGrid;
