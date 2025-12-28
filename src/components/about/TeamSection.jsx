import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
    { name: "Sarah Jenkins", role: "Co-Founder & CEO", color: "bg-pink-100" },
    { name: "Mike Ross", role: "Head of Design", color: "bg-blue-100" },
    { name: "Emily Chen", role: "Product Manager", color: "bg-green-100" },
    { name: "David Kim", role: "Customer Success", color: "bg-yellow-100" },
];

const TeamSection = () => {
    return (
        <section className="py-20 bg-light-bg">
            <div className="container mx-auto px-4">
                <SectionTitle title="Meet The Team" subtitle="The Creators" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <Card key={index} className="text-center p-6 bg-white hover:-translate-y-2">
                            <div className={`w-32 h-32 mx-auto rounded-full mb-4 ${member.color} flex items-center justify-center text-2xl font-bold text-gray-500`}>
                                {member.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold text-text-dark">{member.name}</h3>
                            <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                            <div className="flex justify-center space-x-3 text-gray-400">
                                <a href="#" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
                                <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
