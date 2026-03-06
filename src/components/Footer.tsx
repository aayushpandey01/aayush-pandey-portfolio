import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, ArrowUpRight, Github } from 'lucide-react';
import resumeData from '../data.json';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Let's build the future together.</h2>
            <p className="text-white/40 max-w-md leading-relaxed">
              Open for collaborations in Data Science, AI, and Machine Learning. 
              Let's connect and explore the limitless possibilities.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="group flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />
                <span className="text-white font-medium">{resumeData.basics.email}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
            </a>
            <a
              href={resumeData.basics.links[0].url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="text-blue-400" />
                <span className="text-white font-medium">LinkedIn Profile</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
            </a>
            <a
              href={resumeData.basics.links[1].url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <Github className="text-blue-400" />
                <span className="text-white font-medium">GitHub Profile</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5 text-white/20 text-xs font-mono uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" /> {resumeData.basics.location}
          </div>
          <div>© {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
