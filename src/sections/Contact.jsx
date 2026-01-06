import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Github, MessageSquare } from "lucide-react";

const Contact = ({ onSectionChange }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onSectionChange("contact");
      },
      { threshold: 0.3, rootMargin: "-10% 0px -40% 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [onSectionChange]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-10 px-6 md:px-20 text-white flex flex-col justify-between"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left Column: Heading and CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            Let's have <br />
            <span className="text-[#00df82]">a Chat</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
            Have a project in mind or just want to discuss the latest in mobile tech? 
            Reach out via my socials and let's build something amazing together.
          </p>
          <a
            href="https://www.linkedin.com/in/muqsit-shafat-5ab4b7281/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00df82] text-black font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform"
          >
            Send a Message
          </a>
        </motion.div>

        {/* Right Column: Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Professional Presence */}
          <div>
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4 block">
              Direct Connection
            </span>
            <div className="space-y-4">
              <a 
                href="https://www.linkedin.com/in/muqsit-shafat-5ab4b7281/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl font-medium block hover:text-[#00df82] transition-colors"
              >
                LinkedIn Direct
              </a>
              <div className="flex items-center gap-3 text-xl md:text-2xl text-white/80">
                <MessageSquare size={20} className="text-[#00df82]" />
                <span>Open for Collaboration</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 block">
              Social Profiles
            </span>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, link: "https://github.com/MuqsitShafat" },
                { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/muqsit-shafat-5ab4b7281/" },
                { icon: <Instagram size={20} />, link: "https://www.instagram.com/muqsitonbuffer_/" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00df82]/10 hover:border-[#00df82]/50 transition-all text-gray-400 hover:text-[#00df82]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Text */}
      <footer className="mt-24 pt-8 border-t border-white/5">
        <p className="text-gray-600 text-sm">
          Made with passion by Muqsit Shafat. Based in Pakistan. © All rights reserved.
        </p>
      </footer>
      {/* Bottom spacing */}
      <div className="h-32"></div>
    </section>
  );
};

export default Contact;