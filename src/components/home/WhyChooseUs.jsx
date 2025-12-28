import React from 'react';
import { ShieldCheck, Truck, Clock, Palette } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const features = [
    {
        icon: <Palette size={32} />,
        title: "Limitless Customization",
        desc: "Design exactly what you envision with our easy tools."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Quality Guaranteed",
        desc: "Premium materials that stand the test of time."
    },
    {
        icon: <Truck size={32} />,
        title: "Fast Delivery",
        desc: "Quick turnaround times and reliable shipping."
    },
    {
        icon: <Clock size={32} />,
        title: "24/7 Support",
        desc: "Our team is here to help you anytime, anywhere."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="pt-0 pb-8 bg-light-bg relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2">
                        <SectionTitle
                            title={<>Why Choose <span className="text-primary">GiftTimeZ</span>?</>}
                            subtitle="The Difference"
                            center={false}
                            className="mb-8"
                        />
                        <p className="text-text-light mb-8 text-lg">
                            We don't just print photos; we craft emotions. Our dedication to quality and detail makes us the preferred choice for thousands of happy customers.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-primary shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark mb-1">{feature.title}</h4>
                                        <p className="text-sm text-text-light">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative flex justify-center">
                        <img
                            src="https://res.cloudinary.com/da1pmfwy2/image/upload/v1766907757/WhatsApp_Image_2025-12-28_at_1.12.16_PM_dw1a5s.jpg"
                            alt="Features Collage"
                            className="rounded-3xl shadow-2xl w-1/2 object-cover transform md:rotate-3 hover:rotate-0 transition-transform duration-900"
                        />
                    </div>

                </div>
            </div>
        </section >
    );
};

export default WhyChooseUs;
