import React from 'react';
import { Link } from 'react-router-dom';

export default function SignOutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-md shadow-md text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
        <p className="mb-6">You have successfully signed out.</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
