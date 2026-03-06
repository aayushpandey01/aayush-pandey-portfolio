import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import resumeData from '../data.json';

const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest text-blue-400 uppercase border border-blue-400/20 rounded-full bg-blue-400/5">
            Available for Opportunities
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
            {resumeData.basics.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light mb-8 max-w-2xl leading-relaxed">
            {resumeData.basics.label}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToExperience}
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Experience <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
