import React, { useEffect, useRef, useState } from "react"; // Added hooks
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const Work = ({ onSectionChange }) => {
  // Accept prop
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Observer to trigger Dock change
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && onSectionChange) {
            onSectionChange("Work");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of work is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [onSectionChange]);
  const projects = [
    {
      id: "01",
      title: "Chattrix",
      description:
        "A full-stack real-time communication suite featuring instant messaging, voice calls, and multi-language support.",
      tags: ["React Native", "Socket.io", "Node.js"],
      year: "2025",
      image: "/chattrix.png", // Correct path for public folder
      link: null, // Private repository
    },
    {
      id: "02",
      title: "ISMIYA",
      description:
        "A specialized name discovery platform for Muslim families, featuring advanced filtering for boys and girls names.",
      tags: ["Mobile", "UX/UI", "Data Filtering"],
      year: "2024",
      image: "Ismiya.png", // Ismiya-preview.jpg", // Correct path for public folder
      link: "https://github.com/MuqsitShafat/Ismiya--Muslim-Name-suggester-App-using-react-native-only-for-Android-",
    },
    {
      id: "03",
      title: "Nature Explorer",
      description:
        "An expansive 40+ screen application dedicated to tracking extinct and endangered species globally, integrated with Google Maps API.",
      tags: ["Nature", "Maps API", "40+ Screens"],
      year: "2024",
      image: "/nature_explorer.png", // Correct path for public folder
      link: "https://github.com/MuqsitShafat/Nature-Explorer-App-Detecting-the-Extinct-Species-of-nature-React-Native-cli-only-for-Android",
    },
    {
      id: "04",
      title: "Animora",
      description:
        "A stylish and responsive e-commerce landing page for an anime-themed clothing brand, built with modern web technologies.",
      tags: ["HTML", "CSS", "JavaScript"],
      year: "2023",
      image: "/Animora.png", // Correct path for public folder
      link: "https://github.com/MuqsitShafat/Animora-Wears-an-anime-Clothing-brand-website",
    },
    {
      id: "05",
      title: "Joke Stream",
      description:
        "A lighthearted application that fetches and delivers fresh, categorized jokes in real-time using external APIs.",
      tags: ["API Integration", "React Native", "Axios"],
      year: "2023",
      image: "/jokes.png", // Correct path for public folder
      link: "https://github.com/MuqsitShafat/Jokes-App-React-Native-Android-App",
    }
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-screen bg-dark-bg pt-24 pb-32 px-6 md:px-20 relative overflow-hidden"
    >
      <div className="flex justify-start mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 border border-brand-green/30 px-3 py-1 rounded-full bg-brand-green/5"
        >
          <div className="w-2 h-2 bg-brand-green rounded-full" />
          <span className="text-brand-green text-[10px] font-bold tracking-widest uppercase">
            Selected Work
          </span>
        </motion.div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-bold text-brand-green mb-20 leading-tight"
      >
        <span className="text-5xl md:text-6xl">Solutions</span>
        <br className="md:hidden" />{" "}
        {/* Optional: breaks line on mobile only */}
        <span className="text-white text-3xl md:text-4xl ml-2">Delivered.</span>
      </motion.h2>
      <div className="flex flex-col w-full border-b border-white/10 relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative flex flex-col md:flex-row items-start md:items-center py-14 border-t border-white/10 hover:bg-white/2 transition-all duration-500 cursor-pointer"
          >
            <div
              className="fixed inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(1200px circle at 75% 50%, rgba(34, 197, 94, 0.15), transparent 80%)",
              }}
            />

            <span className="text-4xl md:text-5xl font-bold text-white/40 group-hover:text-brand-green transition-colors mr-12 min-w-17.5 z-20">
              {project.id}
            </span>

            <div className="grow flex flex-col gap-2 z-20">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-gray-500 text-lg max-w-md">
                {project.description}
              </p>
            </div>

            <div className="flex items-center gap-6 mt-8 md:mt-0 md:ml-12 z-10">
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-gray-400 uppercase font-medium bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 min-w-25 justify-end">
                <span className="text-gray-600 font-medium text-sm">
                  {project.year}
                </span>
                <ArrowUpRight
                  className="text-gray-500 group-hover:text-brand-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  size={24}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-125"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-110 p-2 bg-black/50 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Left Side: Project Preview */}
              <div className="w-full md:w-1/2 bg-[#1a1a1a] flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#111]">
                <h3 className="text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <span className="text-[10px] tracking-widest uppercase text-brand-green font-bold block mb-4">Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded text-xs text-gray-300 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.link ? (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-brand-green transition-colors duration-300 rounded text-center"
                  >
                    Source Code
                  </a>
                ) : (
                  <button 
                    disabled
                    className="w-full py-4 bg-white/10 text-white/30 font-bold uppercase tracking-widest text-sm rounded cursor-not-allowed"
                  >
                    Available Soon
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;