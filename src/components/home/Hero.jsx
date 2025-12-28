import React from 'react';
import Button from '../common/Button';
import { ArrowRight, Gift, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 overflow-hidden bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Content */}
                <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left z-10 md:pl-20">

                    <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6 leading-tight">
                        Unwrap the <span className="text-primary">Magic</span> of <br />
                        Personalized Gifting
                    </h1>
                    <p className="text-lg text-text-light mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Create unforgettable memories with GiftTimeZ. From custom photo frames to unique keepsakes, we help you express love in every loop.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link to="/services">
                            <Button variant="primary" className="flex items-center group bg-stone-500 hover:bg-stone-600 border-none text-white">
                                Explore Collection
                                <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline" className="border-stone-300 text-stone-600 hover:border-stone-500 hover:text-stone-700">
                                Our Story
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center md:justify-start space-x-4">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <img
                                    key={i}
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt="Customer"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                            ))}
                        </div>
                        <div className="text-sm">
                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <p className="text-text-light font-medium">Over 2,000 happy customers</p>
                        </div>
                    </div>
                </div>

                {/* Video / Visual */}
                <div className="md:w-1/2 relative w-full flex justify-center">
                    <div className="relative z-10 rounded-xl overflow-hidden shadow-xl w-full max-w-[640px]">
                        <iframe
                            src="https://player.cloudinary.com/embed/?cloud_name=da1pmfwy2&public_id=770c219e33c2313e942bbc2c3869ae4e_720w_bgfdov&profile=cld-default&autoplay=true&muted=true&loop=true&controls=false"
                            width="640"
                            height="360"
                            style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>

                    {/* Decorative Elements matching the 'soft' aesthetic */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-100 rounded-full blur-2xl -z-10"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl -z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
