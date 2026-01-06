import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 border-2 border-brand-green rounded-full pointer-events-none z-9999 opacity-50"
      animate={{ 
        x: mousePos.x - 20, 
        y: mousePos.y - 20 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 250, 
        damping: 20,
        mass: 0.5 
      }}
    />
  );
};

export default CustomCursor;