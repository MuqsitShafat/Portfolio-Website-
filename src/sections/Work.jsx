import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const Work = ({ onSectionChange }) => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && onSectionChange) {
            onSectionChange("Work");
          }
        });
      },
      { threshold: 0.2 }
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
      image: "/chattrix.png",
      link: null,
      color: "from-blue-600/20 to-indigo-900/40",
    },
    {
      id: "02",
      title: "ISMIYA",
      description:
        "A specialized name discovery platform for Muslim families, featuring advanced filtering for boys and girls names.",
      tags: ["Mobile", "UX/UI", "Data Filtering"],
      year: "2024",
      image: "Ismiya.png",
      link: "https://github.com/MuqsitShafat/Ismiya--Muslim-Name-suggester-App-using-react-native-only-for-Android-",
      color: "from-emerald-600/20 to-teal-900/40",
    },
    {
      id: "03",
      title: "Nature Explorer",
      description:
        "An expansive 40+ screen application dedicated to tracking extinct and endangered species globally, integrated with Google Maps API.",
      tags: ["Nature", "Maps API", "40+ Screens"],
      year: "2024",
      image: "/nature_explorer.png",
      link: "https://github.com/MuqsitShafat/Nature-Explorer-App-Detecting-the-Extinct-Species-of-nature-React-Native-cli-only-for-Android",
      color: "from-green-600/20 to-green-900/40",
    },
    {
      id: "04",
      title: "Animora",
      description:
        "A stylish and responsive e-commerce landing page for an anime-themed clothing brand, built with modern web technologies.",
      tags: ["HTML", "CSS", "JavaScript"],
      year: "2023",
      image: "/Animora.png",
      link: "https://github.com/MuqsitShafat/Animora-Wears-an-anime-Clothing-brand-website",
      color: "from-purple-600/20 to-pink-900/40",
    },
    {
      id: "05",
      title: "Joke Stream",
      description:
        "A lighthearted application that fetches and delivers fresh, categorized jokes in real-time using external APIs.",
      tags: ["API Integration", "React Native", "Axios"],
      year: "2023",
      image: "/jokes.png",
      link: "https://github.com/MuqsitShafat/Jokes-App-React-Native-Android-App",
      color: "from-orange-600/20 to-red-900/40",
    },
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

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-0 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full h-full md:h-auto md:max-h-[90vh] max-w-5xl bg-[#080808] border border-white/10 shadow-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-white/5 shrink-0 z-20">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500/50 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500/50 rounded-full"></div>
                  </div>
                  <span className="text-xs font-mono text-gray-500 max-w-37.5 truncate">
                    {selectedProject.title.toLowerCase().replace(/\s/g, "_")}
                    .exe
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
                <div
                  className={`w-full md:w-1/2 h-64 md:h-125 shrink-0 bg-linear-to-br ${
                    selectedProject.color ||
                    "from-brand-green/10 to-brand-green/5"
                  } relative p-4 md:p-8 flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-50"></div>
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt="Preview"
                      className="relative z-10 rounded shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-500 max-h-[90%] w-auto object-contain"
                    />
                  ) : (
                    <div className="relative z-11 text-4xl md:text-6xl opacity-20 font-bold mix-blend-overlay">
                      PREVIEW
                    </div>
                  )}
                  <div className="absolute inset-0 bg-size-[20px_20px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
                </div>

                <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto bg-[#080808]">
                  <div className="space-y-8 pb-10">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xs font-mono uppercase tracking-widest text-brand-green">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-white/10">
                      {selectedProject.link ? (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-3 border border-white text-center text-xs md:text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
                        >
                          Source Code
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex-1 py-3 border border-white/10 text-gray-600 text-center text-xs md:text-sm font-bold uppercase tracking-wider cursor-not-allowed"
                        >
                          Private Repo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;