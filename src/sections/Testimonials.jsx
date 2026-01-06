import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = ({ onSectionChange }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Changed to match the exact Dock ID case-sensitively
        if (entry.isIntersecting) onSectionChange("Testimonials");
      },
      { threshold: 0.2, rootMargin: "-10% 0px -40% 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [onSectionChange]);

  const reviews = [
    {
      name: "James Anderson",
      location: "San Francisco, USA",
      text: "Muqsit is an absolute delight to work with, completely dependable (you can assign a project and forget about it) and a staunch advocate of performance-driven mobile architectures.",
    },
    {
      name: "Lukas Schmidt",
      location: "Berlin, Germany",
      text: "I have seen him lead app development engagements with clients from different domains and geographies with absolute technical skill and perfection.",
    },
    {
      name: "Sarah Jenkins",
      location: "Dubai, UAE",
      text: "Muqsit is an AMAZING developer. Any team is lucky to have him for building high-quality cross-platform solutions.",
    },
    {
      name: "Maximilian Weber",
      location: "France",
      text: "Muqsit is excellent in understanding technical aspects of React Native and visualizing them into tangible, production-ready products.",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="min-h-screen bg-[#0a0a0a] py-24 px-6 md:px-20 text-white"
    >
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Words of <span className="text-[#00df82]">Appreciation</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          Reflections from peers and clients I've had the pleasure to work with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((rev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col p-8 rounded-2xl bg-[#141414] border border-white/5 transition-all duration-300 ease-in-out hover:border-[#00df82]/50 hover:ring-1 hover:ring-[#00df82]/20 group cursor-default"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  size={18}
                  fill="#00df82"
                  className="text-[#00df82]"
                />
              ))}
            </div>

            {/* Fixed flex-grow to grow for Tailwind v4 */}
            <p className="text-gray-300 text-base leading-relaxed mb-10 grow">
              "{rev.text}"
            </p>

            <div className="mt-auto">
              <h4 className="font-bold text-white text-lg">{rev.name}</h4>
              <p className="text-gray-500 text-sm mt-1">{rev.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;