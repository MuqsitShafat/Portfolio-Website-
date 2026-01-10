import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGrid, FiTrendingUp, FiBriefcase, FiAward } from "react-icons/fi";
import { SiReact, SiAndroidstudio } from "react-icons/si";

const About = ({ onSectionChange }) => {
  const containerRef = useRef(null);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    if (!aboutSectionRef.current || !onSectionChange) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange("About");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "10% 0px -20% 0px",
      }
    );

    observer.observe(aboutSectionRef.current);
    return () => observer.disconnect();
  }, [onSectionChange]);

  const text1 =
    "I specialize in engineering high-performance mobile architectures. For me, development isn't just about writing code—it's about building scalable digital products that bridge the gap between complex logic and effortless user experiences.";
  const text2 =
    "My core focus is on the React Native ecosystem, where I craft seamless cross-platform applications for Android and iOS. I prioritize fluid animations, optimized state management, and clean, maintainable codebases that can grow with your business.";
  const text3 =
    "From architecting real-time communication systems like Chattrix to integrating complex third-party APIs using Android Studio and Node.js, I am dedicated to pushing technical boundaries to deliver premium, production-ready solutions.";

  const expertise = [
    {
      title: "React Native",
      desc: "Building high-quality cross-platform mobile apps with native performance and smooth animations.",
      icon: <SiReact className="text-brand-green text-2xl" />,
    },
    {
      title: "Android Studio",
      desc: "Expertise in native Android development, Gradle configurations, and Java/Kotlin bridge integrations.",
      icon: <SiAndroidstudio className="text-brand-green text-2xl" />,
    },
    {
      title: "Full-Stack Dev",
      desc: "Creating secure APIs and real-time database structures using Node.js and Firebase for app scaling.",
      icon: <FiGrid className="text-brand-green text-2xl" />,
    },
    {
      title: "Web Engineering",
      desc: "Translating complex designs into pixel-perfect responsive web layouts using React and Modern CSS.",
      icon: <FiTrendingUp className="text-brand-green text-2xl" />,
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-screen bg-dark-bg py-32 px-6 md:px-20 relative"
    >
      <div
        ref={aboutSectionRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          >
            What I <span className="text-brand-green">Do</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 border border-brand-green/30 px-3 py-1 rounded-full bg-brand-green/5 w-fit mb-8"
          >
            <div className="w-2 h-2 bg-brand-green rounded-full" />
            <span className="text-brand-green text-[10px] font-bold tracking-widest uppercase">
              Driven by Purpose
            </span>
          </motion.div>

          <div className="flex flex-col gap-6">
            <Paragraph value={text1} />
            <Paragraph value={text2} />
            <Paragraph value={text3} />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md"
          >
            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/Muqsit_2.png"
                alt="About Me"
                className="w-full h-auto object-cover aspect-4/5"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-32">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Core Expertise
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] border border-white/5 px-6 py-8 rounded-[20px] hover:border-brand-green/50 transition-colors group flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <ExperienceSection onSectionChange={onSectionChange} />
    </section>
  );
};

const ExperienceSection = ({ onSectionChange }) => {
  const sectionRef = useRef(null);
  const scrollingContainerRef = useRef(null);
  const experienceHeaderRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const calculateRange = () => {
      if (scrollingContainerRef.current) {
        const containerWidth = scrollingContainerRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const offset = windowWidth * 0.15;
        setScrollRange(containerWidth - windowWidth + offset);
      }
    };

    calculateRange();
    window.addEventListener("resize", calculateRange);
    return () => window.removeEventListener("resize", calculateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (!experienceHeaderRef.current || !onSectionChange) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange("About");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(experienceHeaderRef.current);
    return () => observer.disconnect();
  }, [onSectionChange]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      year: "2025",
      title: "App Developer",
      company: "SMDevs.co",
      location: "Remote",
      period: "2025 - Present",
      type: "work",
    },
    {
      year: "2024",
      title: "Mobile App Intern",
      company: "Interncraft",
      location: "Software House",
      period: "2024 - 2025",
      type: "work",
    },
    {
      year: "2024",
      title: "Android Specialist",
      company: "Native Labs",
      location: "Android Studio / JavaScript",
      period: "2024",
      type: "work",
    },
    {
      year: "2025",
      title: "React Native Developer",
      company: "Senew Tech",
      location: "Pakistan",
      period: "2024 (Project-Based)",
      type: "work",
    },
    {
      year: "2024",
      title: "UI/UX Specialist",
      company: "Freelance",
      location: "Remote",
      period: "2024 - Present",
      type: "work",
    },
    {
      year: "2024",
      title: "Started BSCS",
      company: "Virtual University",
      location: "Pakistan",
      period: "2024 - 2027",
      type: "education",
    },
  ];

  return (
    <div
      id="experience"
      ref={sectionRef}
      className="h-[500vh] md:h-[600vh] relative mt-40"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div ref={experienceHeaderRef} className="px-4 mb-10">
          <h2 className="text-5xl md:text-6xl font-bold text-brand-green mb-2">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Engineering robust mobile solutions and scalable digital products
          </p>
        </div>

        <div className="relative w-full h-fit flex items-center py-20 mb-10">
          <div className="absolute top-27 left-0 w-full h-0.5 bg-white/10 z-0" />
          <motion.div
            style={{ width: progressWidth }}
            className="absolute top-27 left-0 h-0.5 bg-brand-green/40 origin-left z-0"
          />
          <motion.div
            ref={scrollingContainerRef}
            style={{ x }}
            className="flex gap-12 md:gap-20 px-10 md:px-[10vw] relative z-10"
          >
            {experiences.map((exp, i) => {
              const step = 1 / experiences.length;
              const point = i * step;
              return (
                <ExperienceCard
                  key={i}
                  exp={exp}
                  index={i}
                  progress={scrollYProgress}
                  point={point}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ exp, index, progress, point }) => {
  const dotColor = useTransform(
    progress,
    [point - 0.05, point],
    ["#374151", "#22C55E"]
  );
  const glowOpacity = useTransform(progress, [point - 0.05, point], [0, 1]);

  return (
    <div className="shrink-0 flex flex-col items-center">
      <div className="relative mb-14 h-12 flex items-center justify-center">
        <motion.div
          style={{ backgroundColor: dotColor }}
          className="w-5 h-5 rounded-full border-4 border-dark-bg z-20 relative"
        />
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute w-12 h-12 rounded-full bg-brand-green/30 blur-md z-10"
        />
      </div>
      <div
        className={`bg-[#121212] border ${
          index === 0
            ? "border-brand-green/30 shadow-[0_10px_40px_rgba(34,197,94,0.05)]"
            : "border-white/5"
        } p-8 rounded-4xl w-72 md:w-85 group hover:border-brand-green/50 transition-all duration-500`}
      >
        <div className="flex justify-between items-start mb-1">
          <span className="px-3 py-1 rounded-full border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            {exp.year}
          </span>
          <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
            {exp.type === "work" ? <FiBriefcase /> : <FiAward />}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
          {exp.title}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm mb-4">{exp.company}</p>
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col gap-1">
          <span className="text-brand-green text-[10px] md:text-xs font-medium uppercase tracking-wider">
            {exp.location}
          </span>
          <span className="text-gray-500 text-[10px] md:text-xs font-mono">
            {exp.period}
          </span>
        </div>
      </div>
    </div>
  );
};

const Paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.75", "start 0.60"],
  });

  const words = value.split(" ");
  return (
    <p
      ref={element}
      className="flex flex-wrap text-lg md:text-xl font-medium leading-relaxed text-gray-500"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#4b5563", "#ffffff"]);

  return (
    <span className="relative mr-2 mb-1">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
};

export default About;
