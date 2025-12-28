import React from 'react';
import TestimonialSlider from '../components/testimonials/TestimonialSlider';
import { MessageCircle } from 'lucide-react';

const Testimonials = () => {
    return (
        <>
            <div className="bg-white pt-32 pb-12 text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-block p-4 rounded-full bg-yellow-50 mb-4 animate-bounce">
                        <MessageCircle size={32} className="text-yellow-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Customer Reviews</h1>
                    <p className="text-text-light max-w-2xl mx-auto">
                        See why thousands of people trust GiftTimeZ with their most precious memories.
                    </p>
                </div>
            </div>
            <TestimonialSlider />
        </>
    );
};

export default Testimonials;
