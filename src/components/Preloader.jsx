import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [dots, setDots] = useState("");

  // Animated dots for "Let's dive right in..."
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-brand-green/20 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-brand-green/10 blur-[100px] rounded-full" />

      <div className="relative flex flex-col items-center">
        {/* The Center MS Logo Container */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Rotating Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-brand-green/30 rounded-full"
          />
          
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <motion.circle
              cx="48"
              cy="48"
              r="46"
              fill="none"
              stroke="#22C55E"
              strokeWidth="2"
              strokeDasharray="290"
              initial={{ strokeDashoffset: 290 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Hexagon/Circle Background for MS */}
          <div className="w-16 h-16 bg-[#111] border border-white/10 rounded-xl flex items-center justify-center shadow-2xl z-10">
            <span className="text-brand-green font-bold text-2xl tracking-tighter">
              MS
            </span>
          </div>
        </div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <h2 className="text-white text-xl font-semibold tracking-wide">
            Welcome, Visitor!
          </h2>
          <p className="text-brand-green/80 text-sm mt-2 font-medium">
            Let's dive right in{dots}
          </p>
        </motion.div>

        {/* Bottom Loading Dots */}
        <div className="flex gap-2 mt-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="w-1.5 h-1.5 bg-brand-green rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;