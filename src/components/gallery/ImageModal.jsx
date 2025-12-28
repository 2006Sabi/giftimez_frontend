import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ image, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!image) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white hover:text-primary transition-colors focus:outline-none"
            >
                <X size={32} />
            </button>

            <div
                className="max-w-4xl max-h-[90vh] w-full overflow-hidden rounded-lg bg-white shadow-2xl relative flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="bg-white w-full p-4 text-center">
                    <h3 className="text-xl font-bold text-text-dark">{image.title}</h3>
                    <p className="text-text-light">{image.category}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
