import React from 'react';
import ProcessTimeline from '../components/process/ProcessTimeline';
import { HelpCircle } from 'lucide-react';

const HowItWorks = () => {
    return (
        <>
            <div className="bg-light-bg pt-32 pb-12 text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-block p-4 rounded-full bg-white mb-4 shadow-sm animate-spin-slow">
                        <HelpCircle size={32} className="text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">How It Works</h1>
                    <p className="text-text-light max-w-2xl mx-auto">
                        From your device to your doorstep in 4 simple steps.
                    </p>
                </div>
            </div>
            <ProcessTimeline />
        </>
    );
};

export default HowItWorks;
