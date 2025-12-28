import React from 'react';
import { Star, Quote } from 'lucide-react';
import Card from '../common/Card';

const TestimonialCard = ({ testimonial }) => {
    return (
        <Card className="flex flex-col h-full bg-white p-8 relative">
            <Quote size={40} className="text-primary/20 absolute top-6 right-6" />

            <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={18}
                        className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} mr-1`}
                    />
                ))}
            </div>

            <p className="text-text-dark mb-6 italic leading-relaxed flex-grow">"{testimonial.text}"</p>

            <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-light-bg flex items-center justify-center text-primary font-bold mr-3 text-lg">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-text-dark text-sm">{testimonial.name}</h4>
                    <p className="text-text-light text-xs">{testimonial.role}</p>
                </div>
            </div>
        </Card>
    );
};

export default TestimonialCard;
