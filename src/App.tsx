import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import resumeData from './data.json';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatedBackground />
            <Navbar />
            
            <main>
              <Hero />
              
              <section id="about" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M10 10L90 90M90 10L10 90" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-8">Summary</h2>
                    <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80 italic">
                      "{resumeData.basics.summary}"
                    </p>
                  </motion.div>
                </div>
              </section>

              <div id="impact">
                <Achievements />
              </div>

              <div id="experience">
                <Experience />
              </div>

              <div id="skills">
                <Skills />
              </div>

              <div id="projects">
                <Projects />
              </div>

              <div id="education">
                <Education />
              </div>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
