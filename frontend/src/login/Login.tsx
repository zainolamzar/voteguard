import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Perform login logic here
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
                    <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">LOG IN</h2>
                    <form onSubmit={handleLogin}>
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
                        <div className="mb-6">
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
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-gray-700 text-sm">
                                If you haven’t registered yet, go to{' '}
                                <Link to="/register" className="text-blue-600 hover:underline">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;