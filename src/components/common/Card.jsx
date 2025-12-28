import React from 'react';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div className={`bg-white rounded-2xl shadow-sm p-6 border border-gray-100 ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
