import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductPreview from '../components/buy/ProductPreview';
import CustomizationPanel from '../components/buy/CustomizationPanel';
import PriceSummary from '../components/buy/PriceSummary';
import BuyActions from '../components/buy/BuyActions';

const Buy = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useShop();
    const product = location.state?.product;

    const [customization, setCustomization] = useState({
        text: '',
        color: '',
        uploadedImage: null,
        uploadedFile: null,
        uploadedImages: [],
        uploadedFiles: [],
        font: 'Arial',
        size: 'Medium'
    });

    useEffect(() => {
        if (!product) {
            navigate('/services');
        }
    }, [product, navigate]);

    const handleAddToCart = () => {
        const customizedProduct = {
            ...product,
            customization: {
                text: customization.text,
                color: customization.color,
                font: customization.font,
                size: customization.size,
                hasImage: !!customization.uploadedImage
            }
        };

        console.log('Adding to cart:', customizedProduct);
        addToCart(customizedProduct);

        // Show success message
        alert('Product added to cart successfully! 🎉');
    };

    if (!product) {
        return null;
    }

    return (
        <div className="min-h-screen bg-[#F0F9FF] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Customize Your Gift
                    </h1>
                    <p className="text-gray-600">
                        Make it special with your personal touch ✨
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Product Preview */}
                    <div className="lg:col-span-1">
                        <ProductPreview product={product} />
                    </div>

                    {/* Middle Column - Customization */}
                    <div className="lg:col-span-1 space-y-6">
                        <CustomizationPanel
                            customization={customization}
                            setCustomization={setCustomization}
                            category={product.category}
                        />
                    </div>

                    {/* Right Column - Summary & Actions */}
                    <div className="lg:col-span-1 space-y-6">
                        <PriceSummary
                            basePrice={product.price}
                            customization={customization}
                        />
                        <BuyActions
                            product={product}
                            customization={customization}
                            onAddToCart={handleAddToCart}
                        />
                    </div>
                </div>

                {/* Mobile Sticky Actions */}
                <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-lg z-50">
                    <BuyActions
                        product={product}
                        customization={customization}
                        onAddToCart={handleAddToCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Buy;
