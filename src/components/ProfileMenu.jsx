import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    setIsOpen(false);
    navigate('/signout');
  };

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 transition"
        aria-label="Profile menu"
      >
        <i className="fas fa-user"></i>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10 p-2">
          <button
            onClick={handleSignOut}
            className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-600 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
