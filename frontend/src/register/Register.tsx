import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Perform registration logic here
    };

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg md:flex-row md:w-2/3 lg:w-2/4">
                <div className="w-full md:w-1/2">
                    <img
                        src="https://example.com/ballot-image.png"
                        alt="Vote"
                        className="rounded"
                    />
                </div>

                <div className="w-full md:w-1/2 p-6 bg-gray-100 rounded-lg">
                    <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">SIGN UP</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border-2 border-blue-400 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-600"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-2 border-blue-400 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-600"
                                placeholder="johndoe@gmail.com"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border-2 border-blue-400 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-600"
                                placeholder="*******"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Repeat Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="border-2 border-blue-400 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-600"
                                placeholder="*******"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;