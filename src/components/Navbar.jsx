import { motion } from "framer-motion";
import { Home, User, Code, Mail } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { icon: <Home size={20} />, label: "Home", href: "#" },
    { icon: <Code size={20} />, label: "Work", href: "#projects" },
    { icon: <User size={20} />, label: "About", href: "#about" },
    { icon: <Mail size={20} />, label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
      >
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 text-gray-400 hover:text-white transition-colors relative group"
          >
            {item.icon}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;