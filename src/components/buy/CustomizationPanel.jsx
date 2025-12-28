import React from 'react';
import { Type, Palette, Upload, Shirt } from 'lucide-react';

const CustomizationPanel = ({ customization, setCustomization, category }) => {
    const isPhotoAlbum = category?.toLowerCase().includes('album') || category?.toLowerCase().includes('photo');

    const handleImageUpload = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            if (isPhotoAlbum) {
                // Multiple images for photo albums
                const imageUrls = [];
                const fileArray = [];

                Array.from(files).forEach(file => {
                    imageUrls.push(URL.createObjectURL(file));
                    fileArray.push(file);
                });

                setCustomization(prev => ({
                    ...prev,
                    uploadedImages: [...(prev.uploadedImages || []), ...imageUrls],
                    uploadedFiles: [...(prev.uploadedFiles || []), ...fileArray]
                }));
            } else {
                // Single image for other products
                const file = files[0];
                const imageUrl = URL.createObjectURL(file);
                setCustomization(prev => ({ ...prev, uploadedImage: imageUrl, uploadedFile: file }));
            }
        }
    };

    const removeImage = (index) => {
        setCustomization(prev => ({
            ...prev,
            uploadedImages: prev.uploadedImages.filter((_, i) => i !== index),
            uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index)
        }));
    };

    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    const sizes = ['Small', 'Medium', 'Large', 'X-Large'];
    const fonts = ['Arial', 'Georgia', 'Courier New', 'Comic Sans MS', 'Impact'];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customize Your Gift</h2>

            {/* Text Input */}
            <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-gray-700">
                    <Type className="w-4 h-4 mr-2 text-[#00C8FA]" />
                    Add Your Message
                </label>
                <textarea
                    value={customization.text}
                    onChange={(e) => setCustomization(prev => ({ ...prev, text: e.target.value }))}
                    placeholder="Enter your personalized message..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00C8FA] focus:outline-none transition-colors resize-none"
                    rows="3"
                    maxLength="100"
                />
                <p className="text-xs text-gray-500 text-right">{customization.text.length}/100</p>
            </div>

            {/* Color Selection */}
            <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-gray-700">
                    <Palette className="w-4 h-4 mr-2 text-[#00C8FA]" />
                    Choose Color
                </label>
                <div className="flex flex-wrap gap-3">
                    {colors.map((color) => (
                        <button
                            key={color}
                            onClick={() => setCustomization(prev => ({ ...prev, color }))}
                            className={`w-12 h-12 rounded-full border-4 transition-all transform hover:scale-110 ${customization.color === color ? 'border-[#00C8FA] shadow-lg' : 'border-gray-200'
                                }`}
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-gray-700">
                    <Upload className="w-4 h-4 mr-2 text-[#00C8FA]" />
                    {isPhotoAlbum ? 'Upload Photos (Multiple)' : 'Upload Your Photo'}
                </label>
                <div className="relative">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                        multiple={isPhotoAlbum}
                    />
                    <label
                        htmlFor="image-upload"
                        className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#00C8FA] transition-colors bg-[#F0F9FF]"
                    >
                        {isPhotoAlbum ? (
                            customization.uploadedImages && customization.uploadedImages.length > 0 ? (
                                <div className="w-full">
                                    <div className="grid grid-cols-3 gap-2 mb-2">
                                        {customization.uploadedImages.map((img, idx) => (
                                            <div key={idx} className="relative group">
                                                <img src={img} alt={`Upload ${idx + 1}`} className="w-full h-20 object-cover rounded-lg" />
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        removeImage(idx);
                                                    }}
                                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-center text-gray-500">Click to add more photos</p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                                    <p className="text-sm text-gray-600">Click to upload multiple images</p>
                                    <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB each</p>
                                </div>
                            )
                        ) : (
                            customization.uploadedImage ? (
                                <img src={customization.uploadedImage} alt="Preview" className="max-h-32 rounded-lg" />
                            ) : (
                                <div className="text-center">
                                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                                    <p className="text-sm text-gray-600">Click to upload image</p>
                                    <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                                </div>
                            )
                        )}
                    </label>
                </div>
            </div>

            {/* Font Selection */}
            <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-gray-700">
                    <Type className="w-4 h-4 mr-2 text-[#00C8FA]" />
                    Font Style
                </label>
                <div className="grid grid-cols-2 gap-2">
                    {fonts.map((font) => (
                        <button
                            key={font}
                            onClick={() => setCustomization(prev => ({ ...prev, font }))}
                            className={`px-4 py-3 rounded-lg border-2 transition-all ${customization.font === font
                                ? 'border-[#00C8FA] bg-[#F0F9FF] text-[#00C8FA]'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                            style={{ fontFamily: font }}
                        >
                            {font}
                        </button>
                    ))}
                </div>
            </div>

            {/* Size Selection (for applicable products) */}
            {(category === 'Clothing' || category === 'Apparel') && (
                <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                        <Shirt className="w-4 h-4 mr-2 text-[#00C8FA]" />
                        Select Size
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setCustomization(prev => ({ ...prev, size }))}
                                className={`px-4 py-3 rounded-lg border-2 font-semibold transition-all ${customization.size === size
                                    ? 'border-[#00C8FA] bg-[#F0F9FF] text-[#00C8FA]'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                {size.charAt(0)}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomizationPanel;
