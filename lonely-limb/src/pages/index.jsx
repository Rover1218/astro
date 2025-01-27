import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
    {
        title: "Easy to Use",
        description: "Create stunning invitations with our intuitive drag-and-drop interface"
    },
    {
        title: "100+ Templates",
        description: "Choose from our wide selection of professionally designed templates"
    },
    {
        title: "Instant Download",
        description: "Download your creation instantly in high-quality formats"
    }
];

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-4">Create Beautiful Invitation Cards</h1>
                        <p className="text-xl mb-8">Design and customize your perfect invitation in minutes</p>
                        <button
                            onClick={() => console.log('Get Started clicked')}
                            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                        >
                            Get Started Free
                        </button>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Generator?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-purple-600 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Create Your Invitation?</h2>
                        <p className="mb-8">Join thousands of happy customers creating beautiful invitations daily</p>
                        <button
                            onClick={() => console.log('Start Designing clicked')}
                            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                        >
                            Start Designing Now
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;