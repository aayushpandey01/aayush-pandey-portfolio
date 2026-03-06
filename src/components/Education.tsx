import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Globe } from 'lucide-react';
import resumeData from '../data.json';

const Education: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-8">
              {resumeData.education.map((edu, i) => (
                <div key={i} className="relative pl-8 border-l border-white/10">
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-white/60 mb-2">{edu.degree}</p>
                  <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{edu.dates}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Languages */}
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Certifications</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {resumeData.certifications.map((cert, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
