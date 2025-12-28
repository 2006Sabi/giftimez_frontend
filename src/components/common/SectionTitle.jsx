import React from 'react';

const SectionTitle = ({ title, subtitle, center = true, className = '' }) => {
    return (
        <div className={`mb-12 ${center ? 'text-center' : 'text-left'} ${className}`}>
            {subtitle && (
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark relative inline-block">
                {title}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full transform translate-y-3"></span>
            </h2>
        </div>
    );
};

export default SectionTitle;
