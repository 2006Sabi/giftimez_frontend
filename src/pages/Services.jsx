import React from 'react';
import ServiceGrid from '../components/services/ServiceGrid';
import { Gift } from 'lucide-react';

const Services = () => {
    return (
        <>
            <div className="bg-white pt-32 pb-0 text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-block p-4 rounded-full bg-accent-hover mb-4 animate-bounce">
                        <Gift size={32} className="text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Our Services</h1>
                    <p className="text-text-light max-w-2xl mx-auto">
                        Discover a wide range of personalized gifts and creative services tailored just for you.
                    </p>
                </div>
            </div>
            <ServiceGrid />
        </>
    );
};

export default Services;
