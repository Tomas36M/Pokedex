import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onSearchChange }) {
    return (
        <nav className="bg-gradient-to-r from-[#641a19] to-[#5e5e5c] shadow-lg shadow-md">
            <div className="container mx-auto px-3 py-2 flex items-center justify-between">
                <div className="flex items-center">
                    <Link to='/'><span className="text-4xl font-logo text-white">Pokedex</span></Link>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search Pokemon"
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;