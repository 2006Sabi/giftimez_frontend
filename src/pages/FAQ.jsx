import React from 'react';
import FAQList from '../components/faq/FAQList';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
    return (
        <>
            <div className="bg-light-bg pt-32 pb-12 text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-block p-4 rounded-full bg-white mb-4 shadow-sm animate-pulse">
                        <HelpCircle size={32} className="text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Questions?</h1>
                    <p className="text-text-light max-w-2xl mx-auto">
                        We have answers. Here are the most common questions we get.
                    </p>
                </div>
            </div>
            <FAQList />
        </>
    );
};

export default FAQ;
