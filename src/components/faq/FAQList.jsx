import React from 'react';
import FAQItem from './FAQItem';
import { faqData } from '../../data/faq';
import SectionTitle from '../common/SectionTitle';

const FAQList = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <SectionTitle title="Frequently Asked Questions" subtitle="Help Center" />

                <div className="mt-8">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQList;
