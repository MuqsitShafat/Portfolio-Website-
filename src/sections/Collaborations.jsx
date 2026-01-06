import { motion, animate, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Check if it's a special string like "24/7"
  const isSpecial = value.includes("/");
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    // Only animate if it's not a special string like 24/7
    if (isInView && !isSpecial) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, isSpecial]);

  return (
    <span ref={ref}>
      {isSpecial ? value : displayValue}
      {!isSpecial && value.includes("+") ? "+" : ""}
    </span>
  );
};

const Collaborations = () => {
  const controls = useAnimation();
  const isPaused = useRef(false);

 const logos = [
    { name: "React Native", src: "" },
    { name: "JavaScript", src: "" },
    { name: "Redux / Toolkit", src: "" },
    { name: "Firebase", src: "" },
    { name: "Node.js", src: "" },
    { name: "Tailwind CSS", src: "" },
    { name: "MongoDB", src: "" },
  ];
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
 const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "35+", label: "Happy Clients" },
    { number: "24/7", label: "Support & Maintenance" },
  ];

  // Initialize the infinite scroll
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    isPaused.current = true;
    controls.stop();
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
    // Resume animation without resetting to start
    controls.start({
      x: "-50%",
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  return (
    <section id="collaborations" className="min-h-screen bg-dark-bg pt-24 pb-32 flex flex-col items-center overflow-hidden">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 border border-brand-green/30 px-4 py-1.5 rounded-full bg-brand-green/5 mb-8">
        <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
        <span className="text-brand-green text-xs font-bold tracking-widest uppercase">Skills & Milestones</span>
      </motion.div>

      <div className="text-center max-w-full mb-16 px-10">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-[clamp(2rem,5.5vw,4rem)] font-bold text-white leading-tight whitespace-nowrap">
          Building the Future of <span className="text-brand-green">Mobile </span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
         Transforming complex ideas into smooth, native mobile applications.
        </motion.p>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="relative w-full mb-24 flex items-center group">
        <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-dark-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-dark-bg to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {duplicatedLogos.map((logo, i) => (
            <div key={i} className="w-72 h-40 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-8 transition-all hover:border-brand-green/40 hover:bg-white/10 shrink-0 cursor-pointer">
              <span className="text-gray-500 hover:text-white font-bold text-2xl grayscale hover:grayscale-0 transition-all">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-16 md:gap-32 text-center border-t border-white/5 pt-16 w-full max-w-5xl px-10">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <h3 className="text-brand-green text-5xl md:text-6xl font-bold mb-2"><Counter value={stat.number} /></h3>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Collaborations;