import React from 'react';

const MapSection = () => {
    return (
        <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden mt-12 relative shadow-inner">
            <iframe
                title="Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(GiftTimeZ)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
        </div>
    );
};

export default MapSection;
