import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img src="https://res.cloudinary.com/da1pmfwy2/image/upload/v1766904156/WhatsApp_Image_2025-12-27_at_8.38.31_PM_phzavg.jpg" alt="GiftTimeZ Logo" className="h-10 w-auto" />
                    <span className="text-2xl font-bold text-primary">GiftTimeZ</span>
                </Link>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
