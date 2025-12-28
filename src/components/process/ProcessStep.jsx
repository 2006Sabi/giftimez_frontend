import React from 'react';

const ProcessStep = ({ step, index, isLast }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">

            {/* Icon/Number */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">
                {index + 1}
            </div>

            {/* Content */}
            <div className={`flex-grow bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full md:w-auto ${index % 2 !== 0 ? 'md:order-first' : ''}`}>
                <h3 className="text-xl font-bold text-text-dark mb-3">{step.title}</h3>
                <p className="text-text-light">{step.description}</p>
            </div>

            {/* Line Connector for Desktop */}
            {!isLast && (
                <div className="hidden md:block absolute left-1/2 top-16 bottom-0 w-1 bg-gray-200 -z-10 transform -translate-x-1/2 h-full"></div>
            )}
        </div>
    );
};

export default ProcessStep;
