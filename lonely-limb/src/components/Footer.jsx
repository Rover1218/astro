import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">InviteCreator</h3>
                        <p className="text-gray-300">Create beautiful invitations in minutes</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/templates" className="hover:text-white">Templates</a></li>
                            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                            <li><a href="/editor" className="hover:text-white">Editor</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-gray-300">support@invitecreator.com</p>
                        <div className="mt-4">
                            <a href="/contact" className="hover:text-white">Contact Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
