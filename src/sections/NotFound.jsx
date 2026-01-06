import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // If using React Router

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F0F0F0] flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Animated Robot Image */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full max-w-sm"
        >
          <img 
            src="/robot.png" 
            alt="404 Robot" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col items-center md:items-start text-[#2D3436]">
          <h1 className="text-8xl font-black mb-2 opacity-20">404</h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md text-center md:text-left">
            Oops! The robot couldn't find the page you were looking for. It might have been moved or deleted.
          </p>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="px-8 py-4 bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;