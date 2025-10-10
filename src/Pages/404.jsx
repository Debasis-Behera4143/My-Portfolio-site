import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-float">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-400 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-6 border border-white/10">
            <div className="text-6xl">🔍</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-xl text-gray-200 rounded-xl hover:bg-black/60 transition-colors duration-200 border border-white/10 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
          
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-indigo-500/25"
          >
            <Home className="w-5 h-5" />
            Home Page
          </button>
        </div>
      </div>
    </div>
  );
}