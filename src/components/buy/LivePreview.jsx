import React from 'react';

const LivePreview = ({ customization, product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Live Preview</h3>
            <div
                className="relative aspect-square rounded-xl overflow-hidden border-4 border-gray-100"
                style={{ backgroundColor: customization.color || '#FFFFFF' }}
            >
                {/* Background Image */}
                {customization.uploadedImage && (
                    <img
                        src={customization.uploadedImage}
                        alt="Custom"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                )}

                {/* Product Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-3/4 h-3/4 object-contain opacity-20"
                    />
                </div>

                {/* Custom Text */}
                {customization.text && (
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <p
                            className="text-center text-2xl font-bold text-white drop-shadow-lg"
                            style={{
                                fontFamily: customization.font || 'Arial',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}
                        >
                            {customization.text}
                        </p>
                    </div>
                )}

                {/* Preview Watermark */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                    Preview
                </div>
            </div>

            {/* Customization Summary */}
            <div className="mt-4 space-y-2 text-sm">
                {customization.text && (
                    <div className="flex justify-between">
                        <span className="text-gray-600">Message:</span>
                        <span className="font-medium text-gray-900 truncate ml-2">{customization.text}</span>
                    </div>
                )}
                {customization.color && (
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Color:</span>
                        <div className="flex items-center gap-2">
                            <div
                                className="w-6 h-6 rounded-full border-2 border-gray-300"
                                style={{ backgroundColor: customization.color }}
                            />
                            <span className="font-medium text-gray-900">{customization.color}</span>
                        </div>
                    </div>
                )}
                {customization.font && (
                    <div className="flex justify-between">
                        <span className="text-gray-600">Font:</span>
                        <span className="font-medium text-gray-900">{customization.font}</span>
                    </div>
                )}
                {customization.size && (
                    <div className="flex justify-between">
                        <span className="text-gray-600">Size:</span>
                        <span className="font-medium text-gray-900">{customization.size}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LivePreview;
