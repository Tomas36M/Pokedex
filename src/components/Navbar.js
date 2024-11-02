import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onSearchChange }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-[#641a19] to-[#5e5e5c] shadow-lg">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link to='/' className="text-3xl font-logo text-white">Pokedex</Link>
                <div className="lg:hidden">
                    <button
                        className="text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className={`flex-col lg:flex-row lg:flex items-center ${isOpen ? 'flex' : 'hidden'} lg:space-y-0 space-y-2 lg:ml-4`}>
                    <input
                        type="text"
                        placeholder="Search Pokemon"
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full lg:w-64 lg:max-w-full"
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;