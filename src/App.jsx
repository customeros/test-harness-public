// src/App.jsx
import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-6">React Docker App By Silviu</h1>

                <div className="flex flex-col items-center">
                    <p className="text-xl mb-4">Count: {count}</p>

                    <div className="flex space-x-4 mb-6">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                            onClick={() => setCount(count + 1)}
                        >
                            Increment
                        </button>

                        <button
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                            onClick={() => setCount(0)}
                        >
                            Reset
                        </button>
                    </div>

                    <div className="w-full">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter a message"
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                        />

                        {message && (
                            <div className="p-3 bg-green-100 border border-green-200 rounded">
                                <p className="text-green-800">Your message: {message}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;