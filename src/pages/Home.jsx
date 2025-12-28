import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedServices from '../components/home/FeaturedServices';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedServices />
            <WhyChooseUs />
            <HowItWorks />
        </>
    );
};

export default Home;
