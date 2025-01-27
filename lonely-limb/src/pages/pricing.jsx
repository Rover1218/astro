import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pricingPlans = [
    {
        name: 'Free',
        price: '$0',
        features: [
            '5 templates per month',
            'Basic customization',
            'Download in JPG format',
            'Email support'
        ]
    },
    {
        name: 'Pro',
        price: '$9.99',
        featured: true,
        features: [
            'Unlimited templates',
            'Advanced customization',
            'Download in all formats',
            'Priority support',
            'Remove watermark'
        ]
    },
    {
        name: 'Enterprise',
        price: '$29.99',
        features: [
            'Everything in Pro',
            'Custom templates',
            'Team collaboration',
            'API access',
            '24/7 support'
        ]
    }
];

const PricingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow py-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`bg-white rounded-lg shadow-lg p-8 ${plan.featured ? 'ring-2 ring-purple-600 transform scale-105' : ''
                                    }`}
                            >
                                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                                <p className="text-4xl font-bold mb-6">
                                    {plan.price}<span className="text-lg">/month</span>
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-3 rounded-lg ${plan.featured
                                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                        }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PricingPage;
