import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';
import { Camera, Layers, PenTool, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Camera size={40} className="text-primary" />,
        title: "Photo Gifts",
        description: "Turn your digital snaps into tangible treasures. Mugs, pillows, and more."
    },
    {
        icon: <Layout size={40} className="text-purple-500" />,
        title: "Custom Albums",
        description: "Premium handcrafted albums to preserve your wedding or travel memories."
    },
    {
        icon: <PenTool size={40} className="text-pink-500" />,
        title: "Personalized Art",
        description: "Digital illustrations and caricatures drawn by expert artists."
    },
    {
        icon: <Layers size={40} className="text-orange-500" />,
        title: "Bulk Orders",
        description: "Perfect for corporate gifting or large family reunions."
    }
];

const FeaturedServices = () => {
    return (
        <section className="pt-8 pb-0 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Our Premium Services"
                    subtitle="What We Offer"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="text-center group h-full flex flex-col items-center p-8">
                            <div className="mb-6 p-4 bg-light-bg rounded-full group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-text-dark mb-3">{service.title}</h3>
                            <p className="text-text-light mb-6 flex-grow">{service.description}</p>
                            <Link to="/services" className="text-primary font-medium hover:underline text-sm uppercase tracking-wide">
                                Learn More
                            </Link>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/services">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                            View All Services
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
