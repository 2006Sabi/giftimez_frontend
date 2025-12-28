import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Heart, ShoppingCart, User } from 'lucide-react';
import Button from '../common/Button';

import { useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, cart, wishlist, logout } = useShop(); // Added context access
    const navigate = useNavigate();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
    ];

    const activeClassName = "text-primary font-semibold";
    const inactiveClassName = "text-text-dark hover:text-primary transition-colors";

    const handleProtectedNavigation = (path) => {
        if (!user) {
            navigate('/login');
        } else {
            navigate(path);
        }
    };

    const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    const wishlistCount = wishlist.length;

    return (
        <nav className="flex-1 flex items-center">
            {/* Desktop Menu */}
            {/* Desktop Menu - Links Centered */}
            <ul className="hidden md:flex space-x-8 items-center mx-auto">
                {links.map((link) => (
                    <li key={link.name}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                isActive ? activeClassName : inactiveClassName
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Desktop Menu - Actions Right */}
            <div className="hidden md:flex items-center space-x-4">
                <button
                    onClick={() => handleProtectedNavigation('/wishlist')}
                    className="text-text-dark hover:text-red-500 transition-colors relative"
                >
                    <Heart size={24} />
                    {wishlistCount > 0 && user && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {wishlistCount}
                        </span>
                    )}
                </button>
                <button
                    onClick={() => handleProtectedNavigation('/cart')}
                    className="text-text-dark hover:text-primary transition-colors relative"
                >
                    <ShoppingCart size={24} />
                    {cartCount > 0 && user && (
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    )}
                </button>

                {user ? (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => navigate('/profile')}
                            className="text-text-dark hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
                            title={`Profile - ${user.name}`}
                        >
                            <User size={24} />
                        </button>
                        <Button variant="outline" onClick={() => logout()} className="text-sm py-2 px-4">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Link to="/login">
                        <Button variant="primary">Get Started</Button>
                    </Link>
                )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-text-dark focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4 md:hidden z-50">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `block py-2 text-lg ${isActive ? activeClassName : inactiveClassName}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="pt-4 border-t border-gray-100">
                        <Button variant="primary" className="w-full">Get Started</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
