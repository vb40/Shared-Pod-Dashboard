import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className="bg-white shadow-md flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/')}
          className="text-xl font-bold text-blue-600 hover:text-blue-800"
        >
          sharedpod dashboard
        </button>
      </div>
      <div className="flex-1 max-w-lg mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
          +Ticket details
        </button>
        <ProfileMenu />
      </div>
    </nav>
  );
}
