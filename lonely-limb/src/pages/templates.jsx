import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const templates = [
    {
        id: 1,
        title: 'Wedding Classic',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
        category: 'Wedding',
        price: 'Free'
    },
    {
        id: 2,
        title: 'Birthday Fun',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
        category: 'Birthday',
        price: 'Premium'
    },
    // Add more templates here
];

const TemplatesPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow py-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-8">Browse Templates</h1>

                    {/* Filter Section */}
                    <div className="flex gap-4 mb-8">
                        <select className="border p-2 rounded">
                            <option>All Categories</option>
                            <option>Wedding</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        <select className="border p-2 rounded">
                            <option>All Prices</option>
                            <option>Free</option>
                            <option>Premium</option>
                        </select>
                    </div>

                    {/* Templates Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {templates.map((template) => (
                            <div key={template.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={template.image} alt={template.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{template.title}</h3>
                                    <p className="text-gray-600">{template.category}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className={`${template.price === 'Free' ? 'text-green-600' : 'text-purple-600'}`}>
                                            {template.price}
                                        </span>
                                        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                                            Use Template
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TemplatesPage;
