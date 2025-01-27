import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const EditorPage = () => {
    const [text, setText] = useState('Your Invitation Text');
    const [fontSize, setFontSize] = useState(16);
    const [color, setColor] = useState('#000000');

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow grid grid-cols-12 gap-4">
                {/* Tools Panel */}
                <div className="col-span-3 bg-gray-100 p-4">
                    <h2 className="text-xl font-bold mb-4">Tools</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Text</label>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="w-full p-2 border rounded"
                                rows="4"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Font Size</label>
                            <input
                                type="range"
                                min="8"
                                max="72"
                                value={fontSize}
                                onChange={(e) => setFontSize(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Color</label>
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Canvas Area */}
                <div className="col-span-6 bg-white p-4 flex items-center justify-center border-2">
                    <div
                        style={{
                            fontSize: `${fontSize}px`,
                            color: color
                        }}
                    >
                        {text}
                    </div>
                </div>

                {/* Templates Panel */}
                <div className="col-span-3 bg-gray-100 p-4">
                    <h2 className="text-xl font-bold mb-4">Templates</h2>
                    <div className="grid gap-4">
                        {/* Add template thumbnails here */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EditorPage;
