import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import resumeData from '../data.json';

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative border border-white/10 rounded-3xl overflow-hidden transition-all ${
                expandedId === index ? 'bg-white/5 border-white/20' : 'hover:bg-white/[0.02]'
              }`}
            >
              <button
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                className="w-full text-left p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-white/40 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" /> {exp.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" /> {exp.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {expandedId === index ? <ChevronUp className="text-white/40" /> : <ChevronDown className="text-white/40" />}
                </div>
              </button>

              <AnimatePresence>
                {expandedId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pt-2 border-t border-white/5">
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                          {exp.bullets.map((bullet, i) => (
                            <div key={i} className="flex gap-3 text-white/70 leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                              {bullet}
                            </div>
                          ))}
                        </div>
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2">
                            <Zap className="w-3 h-3" /> Impact Highlights
                          </h4>
                          <div className="space-y-4">
                            {exp.bullets.filter(b => b.includes('%') || b.includes('accuracy') || b.includes('efficiency')).map((highlight, i) => (
                              <div key={i} className="text-sm text-white/50 italic border-l border-blue-500/30 pl-4 py-1">
                                {highlight.split('.')[0]}.
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
