import React from 'react';
import SectionTitle from '../common/SectionTitle';

const OurStory = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="relative">
                            {/* Decorative frame */}
                            <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-2xl"></div>
                            <img
                                src="https://res.cloudinary.com/da1pmfwy2/image/upload/v1766911197/WhatsApp_Image_2025-12-28_at_2.02.48_PM_s6dobx.jpg"
                                alt="Our Team"
                                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <SectionTitle
                            title="From Passion to GiftTimeZ"
                            subtitle="The Journey"
                            center={false}
                        />
                        <div className="space-y-6 text-text-light leading-relaxed">
                            <p>
                                It all started with a simple idea: gifts should be as unique as the people receiving them. In 2020, a group of designers and dreamers came together to bridge the gap between digital memories and physical keepsakes.
                            </p>
                            <p>
                                We believe that every photo tells a story, and our mission is to help you tell yours in the most beautiful way possible. Whether it's a birthday, anniversary, or just because, GiftTimeZ adds that personal touch that shows you care.
                            </p>
                            <p>
                                Today, we've delivered over 100,000 smiles across the globe, but our core values remain the same: Quality, Creativity, and Love.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
