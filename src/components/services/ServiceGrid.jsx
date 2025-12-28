import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../../data/services';
import SectionTitle from '../common/SectionTitle';

const ServiceGrid = () => {
    return (
        <section className="pt-10 pb-20 bg-light-bg">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Explore Our Catalouge"
                    subtitle="Everything You Need"
                    className="mb-16"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
