import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white transition-all duration-300 hover:border-primary/50">
            <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none bg-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-text-dark text-lg">{question}</span>
                {isOpen ? <Minus className="text-primary flex-shrink-0" /> : <Plus className="text-primary flex-shrink-0" />}
            </button>

            <div
                className={`px-6 bg-gray-50 text-text-light transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                    }`}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default FAQItem;
