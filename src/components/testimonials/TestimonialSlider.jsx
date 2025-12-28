import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from '../../data/testimonials';
import SectionTitle from '../common/SectionTitle';

// Simplified as Grid for now, can be slider but grid is cleaner for static implementation
const TestimonialSlider = () => {
    return (
        <section className="py-20 bg-light-bg">
            <div className="container mx-auto px-4">
                <SectionTitle title="What Our Customers Say" subtitle="Love Letters" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                    {testimonialsData.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
