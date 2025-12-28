import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-100 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand & Description */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-primary mb-4 block">
                            GiftTimeZ
                        </Link>
                        <p className="text-text-light mb-6">
                            Turning your precious moments into personalized gifts that last a lifetime. Unique, creative, and made with love.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-text-light hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-text-light hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-text-light hover:text-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-text-dark font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-text-light hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-text-light hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/gallery" className="text-text-light hover:text-primary transition-colors">Gallery</Link></li>
                            <li><Link to="/contact" className="text-text-light hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-text-dark font-bold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link to="/services" className="text-text-light hover:text-primary transition-colors">Personalized Gifts</Link></li>
                            <li><Link to="/services" className="text-text-light hover:text-primary transition-colors">Photo Albums</Link></li>
                            <li><Link to="/services" className="text-text-light hover:text-primary transition-colors">Custom Printing</Link></li>
                            <li><Link to="/services" className="text-text-light hover:text-primary transition-colors">Corporate Gifts</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-text-dark font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                                <span className="text-text-light">123 Gift Avenue, Creative City, 10001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="text-primary mr-2 flex-shrink-0" />
                                <span className="text-text-light">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="text-primary mr-2 flex-shrink-0" />
                                <span className="text-text-light">hello@gifttimez.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 text-center text-text-light text-sm">
                    <p>&copy; {new Date().getFullYear()} GiftTimeZ. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
