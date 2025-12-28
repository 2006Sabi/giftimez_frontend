import React from 'react';

const PriceSummary = ({ basePrice, customization }) => {
    const parsePrice = (priceStr) => {
        return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
    };

    const base = parsePrice(basePrice);
    const textCharge = customization.text ? 50 : 0;
    const imageCharge = customization.uploadedImage ? 100 : 0;
    const colorCharge = customization.color ? 30 : 0;

    const total = base + textCharge + imageCharge + colorCharge;

    return (
        <div className="bg-gradient-to-br from-[#F0F9FF] to-white rounded-2xl shadow-lg p-6 border-2 border-[#00C8FA]/20">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Price Summary</h3>

            <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                    <span>Base Price</span>
                    <span className="font-semibold">₹{base.toFixed(2)}</span>
                </div>

                {textCharge > 0 && (
                    <div className="flex justify-between text-gray-700">
                        <span className="text-sm">Custom Text</span>
                        <span className="font-semibold text-sm">₹{textCharge.toFixed(2)}</span>
                    </div>
                )}

                {imageCharge > 0 && (
                    <div className="flex justify-between text-gray-700">
                        <span className="text-sm">Photo Upload</span>
                        <span className="font-semibold text-sm">₹{imageCharge.toFixed(2)}</span>
                    </div>
                )}

                {colorCharge > 0 && (
                    <div className="flex justify-between text-gray-700">
                        <span className="text-sm">Color Customization</span>
                        <span className="font-semibold text-sm">₹{colorCharge.toFixed(2)}</span>
                    </div>
                )}

                <div className="border-t-2 border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-[#00C8FA]">₹{total.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 p-3 bg-[#00C8FA]/10 rounded-lg">
                <p className="text-xs text-gray-600 text-center">
                    🎁 Free shipping on orders above ₹999
                </p>
            </div>
        </div>
    );
};

export default PriceSummary;
