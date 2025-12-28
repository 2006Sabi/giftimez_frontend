import React from 'react';
import SectionTitle from '../common/SectionTitle';

const steps = [
    {
        title: "Choose Your Gift",
        description: "Browse our extensive collection of customizable items. Filters help you find exactly what you need in seconds."
    },
    {
        title: "Upload & Customize",
        description: "Upload your photos, add text, and preview your design in real-time with our intuitive editor."
    },
    {
        title: "We Create It",
        description: "Our expert craftsmen bring your design to life using premium materials and state-of-the-art printing tech."
    },
    {
        title: "Fast Delivery",
        description: "We package it with care and ship it directly to your doorstep or your loved one's address."
    }
];

const ProcessTimeline = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle title="How It Works" subtitle="Step by Step" />

                <div className="max-w-4xl mx-auto space-y-12 relative">
                    {/* Mobile Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-100 md:hidden z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex md:block relative z-10">
                            {/* Mobile Layout specialized, or reuse ProcessStep for complex */}
                            <div className="flex flex-col md:flex-row items-center md:justify-between w-full group">

                                {/* Left Side (Empty or Content) */}
                                <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'order-last text-left pl-8'}`}>
                                    {index % 2 === 0 && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-text-dark mb-2">{step.title}</h3>
                                            <p className="text-text-light">{step.description}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Center Marker */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center text-2xl font-bold z-10 shadow-sm relative mr-4 md:mr-0">
                                    {index + 1}
                                    {index !== steps.length - 1 && (
                                        <div className="hidden md:block absolute top-16 left-1/2 w-1 h-24 bg-gray-200 -translate-x-1/2 -z-10"></div>
                                    )}
                                </div>

                                {/* Right Side (Content or Empty) */}
                                <div className={`w-full md:w-5/12 ${index % 2 !== 0 ? 'text-left pr-8' : 'pl-8 text-left'}`}>
                                    <div className="md:hidden">
                                        <h3 className="text-2xl font-bold text-text-dark mb-2">{step.title}</h3>
                                        <p className="text-text-light">{step.description}</p>
                                    </div>
                                    {index % 2 !== 0 && (
                                        <div className="hidden md:block">
                                            <h3 className="text-2xl font-bold text-text-dark mb-2">{step.title}</h3>
                                            <p className="text-text-light">{step.description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
