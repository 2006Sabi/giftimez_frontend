import React from 'react';

const AboutHero = () => {
    return (
        <section className="bg-primary pt-32 pb-20 text-white text-center rounded-br-[5rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/da1pmfwy2/image/upload/v1766910792/WhatsApp_Image_2025-12-28_at_2.02.48_PM_s6dobx.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-5xl font-bold mb-6">Our Story</h1>
                <p className="text-xl max-w-2xl mx-auto text-blue-50">
                    Crafting memories, one gift at a time. Discover the passion behind GiftTimeZ.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;
