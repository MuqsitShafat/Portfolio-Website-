import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const titles = [
    "Muqsit Shafat Hussain.",
    "an App Developer.",
    "a React Native Developer.",
    "a Cross Platform Developer.",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = titles[index];

      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        setSpeed(30);
      } else {
        setDisplayText((prev) => currentFullText.substring(0, prev.length + 1));
        setSpeed(80);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed]);

  const isLongText = displayText.length > 20;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-start justify-between px-10 pt-3 relative overflow-hidden bg-dark-bg"
    >
      {/* 1. LOCATION BADGE */}
      <div className="absolute top-10 left-10 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md"
        >
          <MapPin size={18} className="text-brand-green" />
          <span className="text-sm font-medium text-gray-300">
            Lahore, Pakistan
          </span>
        </motion.div>
      </div>

      {/* 2. TEXT CONTENT */}
      <div className="max-w-2xl z-10 mt-32">
        <motion.h1
          className={`font-bold leading-tight text-white transition-all duration-300 ${
            isLongText
              ? "text-[clamp(1.5rem,5vw,2.8rem)]"
              : "text-[clamp(2rem,6vw,3.5rem)]"
          }`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <br />
          <span className="text-white inline-block min-h-[1.2em]">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-8 md:h-12 bg-brand-green ml-1 align-middle"
            />
          </span>
        </motion.h1>

        <p className="text-brand-green text-[clamp(1.1rem,2.5vw,1.8rem)] font-medium mt-4">
          Crafting seamless mobile experiences for Android and iOS.
        </p>

        <p className="text-gray-400 mt-6 text-lg max-w-md">
          Specialist in React Native, focusing on high-performance apps, clean
          architecture, and smooth user interfaces.
        </p>

        <div className="flex gap-4 mt-10">
          {/* Change 'button' to 'a' and add the href and download attributes */}
          <a
            href="/Muqsit_Resume.pdf"
            download="Muqsit_Resume.pdf"
            className="bg-brand-green text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer no-underline"
          >
            Download Resume <span>↓</span>
          </a>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="border border-brand-green text-brand-green px-8 py-3 rounded-full font-bold hover:bg-brand-green/10 transition-colors cursor-pointer"
          >
            Let's Chat
          </button>
        </div>
      </div>

      {/* 3. RIGHT SIDE IMAGE & CARDS */}
      <div className="relative mt-12 mb-32 md:mt-32 flex justify-center items-center z-10 md:mr-20">
        {/* Diamond Border - Updated for Responsiveness */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-brand-green/40 animate-slow-rotate rounded-[60px] z-0" />

        <div className="relative w-64 h-80 md:w-90 md:h-120 border border-white/10 rounded-[30px] overflow-hidden p-2 bg-white/5 shadow-2xl z-10">
          <img
            src="/Muqsit_1.jpeg"
            alt="Muqsit"
            className="w-full h-full object-cover object-top rounded-[25px]"
          />
        </div>

        <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-brand-green rounded-full shadow-[0_0_25px_rgba(0,255,136,0.8)] z-30" />

        <motion.div className="absolute -top-4 -right-8 z-20 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-2 shadow-xl">
          <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center text-brand-green font-bold text-sm">
            M
          </div>
          <div>
            <p className="text-white text-[12px] font-bold leading-none">App</p>
            <p className="text-gray-400 text-[9px] mt-1">Designer/Developer</p>
          </div>
        </motion.div>

        <motion.div className="absolute top-16 -left-12 z-20 bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/10 flex items-center gap-2 shadow-xl">
          <span className="text-lg">👋</span>
          <p className="text-white text-[10px] font-bold">Salaam • مرحبا</p>
        </motion.div>

        <motion.div className="absolute -bottom-4 -left-8 z-20 bg-[#1a1a1a]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex flex-col shadow-xl">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            <p className="text-white text-[10px] font-semibold">
              Open to Opportunities
            </p>
          </div>
        </motion.div>
      </div>

      {/* 4. FLOATING CHAT ICON */}
      <div className="fixed bottom-10 right-10 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.4)] cursor-pointer"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;