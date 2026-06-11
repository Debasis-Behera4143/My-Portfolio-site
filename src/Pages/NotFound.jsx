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
    <div className="min-h-screen bg-white flex items-center justify-center px-4 relative overflow-hidden text-slate-900">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-system opacity-[0.025]" />

      <div className="relative z-10 text-center space-y-8 max-w-md">
        
        {/* 404 Visual */}
        <div className="space-y-3">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tight text-[#0A3D91]">
            404
          </h1>
          <div className="w-16 h-1 bg-[#0A3D91] mx-auto rounded-full"></div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Oops! Page Not Found
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            The page you are looking for might have been moved, deleted, or never existed in this precision system.
          </p>
        </div>

        {/* Illustration */}
        <div>
          <div className="w-24 h-24 mx-auto bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-4xl">🔍</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto elite-btn-secondary px-6 py-3 text-sm flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
          
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto elite-btn-primary px-6 py-3 text-sm flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Home Page</span>
          </button>
        </div>

      </div>
    </div>
  );
}