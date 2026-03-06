import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data.json';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Impact', href: '#impact' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            AP<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-4">
              <a href={resumeData.basics.links[0].url} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${resumeData.basics.email}`} className="text-white/40 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        className="fixed inset-0 z-[60] bg-[#050505] md:hidden p-12 flex flex-col justify-center gap-8"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-2 text-white/60"
        >
          <X className="w-8 h-8" />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-bold text-white hover:text-blue-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="mt-12 flex gap-6">
          <a href={resumeData.basics.links[0].url} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href={`mailto:${resumeData.basics.email}`} className="text-white/40 hover:text-white">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
