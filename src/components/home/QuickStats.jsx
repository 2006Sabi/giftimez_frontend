import React from 'react';

const stats = [
    { value: "50k+", label: "Happy Customers" },
    { value: "100k+", label: "Gifts Delivered" },
    { value: "4.9", label: "Average Rating" },
    { value: "24h", label: "Fastest Delivery" }
];

const QuickStats = () => {
    return (
        <section className="py-8 bg-primary text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                            <div className="text-blue-100 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickStats;
