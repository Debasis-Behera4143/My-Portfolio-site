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
          className="fixed inset-0 bg-[#0B0F19] flex items-center justify-center"
          exit="exit"
          variants={containerVariants}
        >
          {/* Simple particle background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-20"
                style={{
                  background: i % 2 === 0 
                    ? 'radial-gradient(circle, #2B6FFF 0%, transparent 70%)' 
                    : 'radial-gradient(circle, #DFFF00 0%, transparent 70%)',
                  width: `${Math.random() * 60 + 20}px`,
                  height: `${Math.random() * 60 + 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `pulse ${3 + Math.random() * 4}s infinite alternate`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 text-center px-4">
            {/* Logo/Name */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#2B6FFF] to-[#DFFF00] p-1 mb-6">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-[#0B0F19]">
                  <Code2 className="w-12 h-12 text-[#2B6FFF]" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#2B6FFF] to-[#DFFF00] bg-clip-text text-transparent">
                  DEBASIS BEHERA
                </span>
              </h1>
              
              <p className="text-xl text-[#B0B8C5] max-w-2xl mx-auto">
              Btech computer science and engineering student
              </p>
            </div>
            
            {/* Loading Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-[#B0B8C5] mb-2">
                <span>Initializing Portfolio</span>
                <span>100%</span>
              </div>
              <div className="h-2 bg-[#121826] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#2B6FFF] to-[#DFFF00]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-[#B0B8C5]">
                <Zap className="w-4 h-4 text-[#DFFF00]" />
                <span className="text-sm">NeoTech Fusion Interface</span>
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