import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Target, TrendingUp, Award } from 'lucide-react';
import resumeData from '../data.json';

const Achievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Efficiency': return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'Accuracy': return <Target className="w-6 h-6 text-blue-400" />;
      default: return <Award className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Impact & Achievements</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all"
            >
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                {getIcon(item.type)}
              </div>
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                {item.metric}
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                {item.context}
              </p>
              <div className="mt-4 inline-block px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-blue-400 border border-blue-400/20 rounded bg-blue-400/5">
                {item.type}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl border border-blue-500/20 bg-blue-500/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Top Impact Highlights</h3>
              <p className="text-white/50">Key metrics from professional journey</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {resumeData.achievements.slice(0, 3).map((item, i) => (
              <div key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-white/80">
                {item.metric} {item.type}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
