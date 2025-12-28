import React from 'react';

const ProductPreview = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-[#F0F9FF] to-white">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-8"
                />
                <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-[#00C8FA] text-white rounded-full text-sm font-semibold shadow-lg">
                        {product.category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>
                <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-sm text-gray-500">Base Price</span>
                        <p className="text-3xl font-bold text-[#00C8FA]">{product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPreview;
