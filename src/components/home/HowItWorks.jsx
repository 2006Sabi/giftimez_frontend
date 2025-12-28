import React from 'react';
import SectionTitle from '../common/SectionTitle';

const steps = [
    {
        number: "01",
        title: "Place Your Order",
        description: "Select your preferred design and upload your treasured photos"
    },
    {
        number: "02",
        title: "Artisan Design",
        description: "Our skilled artisans carefully craft your personalized design"
    },
    {
        number: "03",
        title: "Preview & Approve",
        description: "Review your design preview and request any desired changes"
    },
    {
        number: "04",
        title: "Handcrafted Creation",
        description: "Upon approval, we meticulously produce your final artwork"
    },
    {
        number: "05",
        title: "Delivery",
        description: "Receive your beautifully packaged custom creation"
    }
];

const HowItWorks = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Our Refined Creation Process"
                    subtitle="How It Works"
                    center={true}
                />
                <p className="text-center text-text-light max-w-2xl mx-auto -mt-6 mb-16">
                    From your treasured memories to exquisite finished artwork, each piece undergoes a meticulous process ensuring the highest quality and your complete satisfaction.
                </p>

                <div className="flex flex-col md:flex-row justify-between items-start relative gap-8">
                    {/* Connection Line (Hidden on mobile) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-primary/20 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center w-full md:w-1/5 group">
                            <div className="w-20 h-20 rounded-full bg-white border border-primary/20 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md group-hover:border-primary transition-all duration-300 z-10">
                                <span className="text-xl font-serif font-bold text-primary">{step.number}</span>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-text-dark mb-3">{step.title}</h3>
                            <p className="text-text-light text-sm leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
