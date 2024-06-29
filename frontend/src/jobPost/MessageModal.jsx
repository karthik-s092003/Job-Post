import React, { useState } from 'react';

function MessageModal({ isOpen, onClose, onSubmit }) {
    const [message, setMessage] = useState('');

    if (!isOpen) {
        return null;
    }

    const handleSubmit = () => {
        onSubmit(message);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Enter Message</h2>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MessageModal;
