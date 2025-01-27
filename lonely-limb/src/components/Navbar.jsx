import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="/" className="text-xl font-bold text-purple-600">InviteCreator</a>
                    <div className="flex space-x-6">
                        <a href="/templates" className="text-gray-600 hover:text-purple-600 transition">Templates</a>
                        <a href="/pricing" className="text-gray-600 hover:text-purple-600 transition">Pricing</a>
                        <a href="/editor" className="text-gray-600 hover:text-purple-600 transition">Editor</a>
                        <div className="flex space-x-4">
                            <a href="/login" className="text-gray-600 hover:text-purple-600 transition">Login</a>
                            <a href="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
