import React from 'react';
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
     <h1 className="text-[12rem] font-extrabold text-violet-600 mb-4">404</h1>

      <p className="text-3xl font-semibold  mb-0">Page Not Found</p>
      <p className="text-gray-400 mb-6 mt-2 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      {/* <p className="text-gray-500 mb-8 text-center max-w-md">contact Devloper </p> */}
      <Link
        to="/"
        className="px-6 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}
