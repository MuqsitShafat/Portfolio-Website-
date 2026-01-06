import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Handshake, Briefcase, User, Heart, Mail } from "lucide-react";

const Dock = ({ activeSection }) => {
  const [activeTab, setActiveTab] = useState("Home");
  
  const items = [
    { id: "Home", icon: <Home className="size-5 md:size-5.5" />, label: "Home", href: "#hero" },
    { id: "Stack", icon: <Handshake className="size-5 md:size-5.5" />, label: "Stack", href: "#collaborations" },
    { id: "Work", icon: <Briefcase className="size-5 md:size-5.5" />, label: "Work", href: "#work" },
    { id: "About", icon: <User className="size-5 md:size-5.5" />, label: "About", href: "#about" },
    { id: "Testimonials", icon: <Heart className="size-5 md:size-5.5" />, label: "Testimonials", href: "#testimonials" },
    { id: "Contact", icon: <Mail className="size-5 md:size-5.5" />, label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (activeSection) {
      const matched = items.find(i => i.id.toLowerCase() === activeSection.toLowerCase());
      if (matched) setActiveTab(matched.id);
    }
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedItem = items.find(item => item.href === `#${entry.target.id}`);
          if (matchedItem) setActiveTab(matchedItem.id);
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: "-20% 0px -20% 0px" 
    });

    items.forEach(item => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (id, href) => {
    setActiveTab(id);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[95dvw] max-w-max">
      <div className="flex items-center justify-center gap-1.5 md:gap-5 bg-black/60 backdrop-blur-2xl border border-white/10 p-2 px-2.5 md:px-4.5 rounded-full shadow-2xl mx-auto">
        {items.map((item) => (
          <div 
            key={item.id}
            onClick={() => handleNav(item.id, item.href)}
            className={`relative flex items-center gap-2 px-2.5 md:px-5 py-2 md:py-2.5 rounded-full cursor-pointer transition-all duration-300 group
              ${activeTab === item.id ? "bg-[#00df82] text-black" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            {item.icon}
            
            {activeTab === item.id && (
              <motion.span 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                className="text-xs md:text-sm font-bold whitespace-nowrap hidden sm:inline-block"
              >
                {item.label}
              </motion.span>
            )}

            {activeTab !== item.id && (
              <span className="absolute -top-12 md:-top-14 left-1/2 -translate-x-1/2 bg-black border border-white/10 text-white text-[12px] md:text-[14px] px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-bold">
                <div className="relative z-10">{item.label}</div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00df82] rotate-45" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;