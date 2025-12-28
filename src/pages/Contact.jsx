import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import MapSection from '../components/contact/MapSection';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <div className="bg-primary pt-32 pb-20 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="inline-block p-4 rounded-full bg-white/20 mb-4 animate-pulse">
                        <Mail size={32} className="text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        We're here to help you create the perfect gift.
                    </p>
                </div>
            </div>

            <section className="py-20 -mt-12 bg-white rounded-t-3xl relative z-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                        <div className="lg:w-1/2">
                            <ContactInfo />
                        </div>
                        <div className="lg:w-1/2">
                            <ContactForm />
                        </div>
                    </div>
                    <MapSection />
                </div>
            </section>
        </>
    );
};

export default Contact;
