/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Briefcase, 
  GraduationCap
} from "lucide-react";
import React, { useState } from "react";

// Types
interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

// Data
const EXPERIENCE: ExperienceItem[] = [
  {
    company: "長庚大學人工智慧研究中心",
    role: "國科會M4計畫秘書",
    period: "2026.03 - Present",
    description: "負責國科會跨部會計畫整合與行政對接，校內外經費申請與人事聘任。"
  }
];

const EDUCATION: EducationItem[] = [
  {
    school: "National Taipei University",
    degree: "M.S. in Chinese",
    period: "2021 - 2025"
  },
  {
    school: "Chung Yuan Christian University ",
    degree: "B.S. in Teaching Chinese as a Second Language",
    period: "2018 - 2021"
  }
];

const PROJECTS: ProjectItem[] = [
  {
    title: "大稻埕飲食文學之華語教學課程設計研究",
    description: "本研究以大稻埕飲食文學為核心，旨在設計一套符合臺灣華語文能力基準（TBCL）第五級學習者之課程暨教學方案，探討其在語言學習與文化理解上的可行性與成效。",
    tags: ["大稻埕", "飲食文學", "華語文能力基準第五級", "課程暨教學設計", "ADDIE模式", "任務導向教學法", "體演文化教學法"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    link: "https://hdl.handle.net/11296/6nvd5f"
  }
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl font-display font-bold mb-12 flex items-center gap-3"
  >
    <div className="h-1.5 w-12 bg-linear-to-r from-indigo-600 to-violet-600 rounded-full" />
    {children}
  </motion.h2>
);

export default function App() {
  return (
    <div className="min-h-screen bg-violet-50/50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        <main className="space-y-24">
          
          {/* Header & Introduction */}
          <section id="about" className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                <div className="w-44 h-44 md:w-56 md:h-56 rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-slate-50 shrink-0">
                  {/* 👇 標註：請在此處更換您的大頭照 URL (Replace your profile picture URL here) */}
                  <img 
                    src="/assets/蘇家晴.webp" 
                    alt="Betty Su" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-slate-900">蘇家晴</h1>
                  <div className="text-xl md:text-2xl text-indigo-600 font-bold font-serif italic">
                    國科會M4計畫秘書 · 長庚大學人工智慧研究中心
                  </div>
                  <div className="flex flex-wrap gap-6 text-xs font-black tracking-widest text-slate-400">
                    <a href="mailto:bettysu@cgu.edu.tw" className="flex items-center gap-2 hover:text-indigo-600 transition-colors lowercase">
                      <Mail size={14} /> bettysu@cgu.edu.tw
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 w-full" />
              
              <div className="space-y-6 text-lg text-slate-500 leading-relaxed max-w-3xl font-medium">
                <p>
                  目前服務於長庚大學人工智慧研究中心，主要負責項目為國科會 M4 計畫。本計畫以「超越 Scaling Law，以資料效率與可信賴性為核心」為研究主軸，致力於建立一套適用於醫療影像的模組化視覺基礎模型（M4, Modular Medical Foundation Models），回應真實醫療場域中資料稀缺、標註成本高與隱私限制等關鍵挑戰。
                </p>
                <p>
                  Currently working at the Artificial Intelligence Research Center of Chang Gung University, primarily responsible for the National Science Council's M4 Project. This project, with the research focus of "Beyond Scaling Law, with Data Efficiency and Reliability as the Core," aims to establish a set of modular medical foundation models (M4) applicable to medical imaging, addressing key challenges in real-world medical settings such as data scarcity, high annotation costs, and privacy restrictions. 
                </p>
                <div className="flex items-center gap-3 text-slate-400 text-sm italic">
                  <Briefcase size={16} /> 桃園市龜山區文化一路259號
                </div>
              </div>
            </motion.div>
          </section>

          {/* Experience */}
          <section id="experience" className="space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-display font-black uppercase tracking-[0.3em] text-indigo-600/50">Experience</h2>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
            <div className="space-y-12">
              {EXPERIENCE.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group flex flex-col md:flex-row gap-2 md:gap-12"
                >
                  <div className="text-xs font-black text-slate-300 w-32 shrink-0 pt-1.5 uppercase tracking-widest">
                    {item.period}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.role}</h3>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                      <Briefcase size={12} /> {item.company}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xl font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education" className="space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-display font-black uppercase tracking-[0.3em] text-indigo-600/50">Education</h2>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
            <div className="flex flex-col gap-6">
              {EDUCATION.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm space-y-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">{item.period}</div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight">{item.school}</h3>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{item.degree}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-display font-black uppercase tracking-[0.3em] text-indigo-600/50">Selected Projects</h2>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
            <div className="grid gap-16">
              {PROJECTS.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group space-y-8"
                >
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight leading-[1.2]">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50/50 border border-indigo-100/50 px-3 py-1.5 rounded-xl">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-4xl">
                        {project.description}
                      </p>
                      <div>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-3 text-xs font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-2 hover:border-indigo-600"
                        >
                          論文連結 / Publication Link <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-24 pb-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
            <div>&copy; {new Date().getFullYear()} Betty Jia-Ching Su.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
