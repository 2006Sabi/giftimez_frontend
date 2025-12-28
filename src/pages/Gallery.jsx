import React from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { Camera } from 'lucide-react';

const Gallery = () => {
    return (
        <>
            <div className="bg-primary/5 pt-32 pb-10 text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-block p-4 rounded-full bg-white mb-4 shadow-sm animate-bounce">
                        <Camera size={32} className="text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Our Gallery</h1>
                    <p className="text-text-light max-w-2xl mx-auto">
                        A showcase of our finest work. Get inspired by what we've created for others.
                    </p>
                </div>
            </div>
            <GalleryGrid />
        </>
    );
};

export default Gallery;
