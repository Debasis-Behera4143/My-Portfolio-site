import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Zap } from 'lucide-react';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 500);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-white flex items-center justify-center"
          exit="exit"
          variants={containerVariants}
        >
          {/* Simple grid-like layout */}
          <div className="absolute inset-0 blueprint-grid-system opacity-[0.025]" />
          
          <div className="relative z-10 text-center px-4">
            {/* Logo/Name */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#0A3D91] to-[#1D4ED8] p-0.5 mb-6 shadow-sm">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
                  <Code2 className="w-12 h-12 text-[#0A3D91]" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-[#0A3D91] to-[#1D4ED8] bg-clip-text text-transparent">
                  DEBASIS BEHERA
                </span>
              </h1>
              
              <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                AI/ML Engineer & Backend Developer
              </p>
            </div>
            
            {/* Loading Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <span>Initializing Portfolio</span>
                <span>100%</span>
              </div>
              <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#0A3D91] to-[#1D4ED8]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-slate-500">
                <Zap className="w-4 h-4 text-[#0A3D91]" />
                <span className="text-xs font-semibold uppercase tracking-wider">Precision Interface</span>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.1; }
              100% { transform: scale(1.2); opacity: 0.3; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;