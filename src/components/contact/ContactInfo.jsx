import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-text-dark mb-6">Get In Touch</h3>
                <p className="text-text-light mb-8">
                    Have a question about your order or want to discuss a custom project? We'd love to hear from you.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="p-3 bg-light-bg text-primary rounded-lg mr-4">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-text-dark">Visit Us</h4>
                        <p className="text-text-light">123 Gift Avenue<br />Creative City, NY 10001</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="p-3 bg-light-bg text-primary rounded-lg mr-4">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-text-dark">Call Us</h4>
                        <p className="text-text-light">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="p-3 bg-light-bg text-primary rounded-lg mr-4">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-text-dark">Email Us</h4>
                        <p className="text-text-light">hello@gifttimez.com<br />support@gifttimez.com</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="p-3 bg-light-bg text-primary rounded-lg mr-4">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-text-dark">Business Hours</h4>
                        <p className="text-text-light">Weekdays: 9 AM - 6 PM<br />Weekends: 10 AM - 4 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
