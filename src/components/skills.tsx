"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Brain, Database, Globe, Code2 } from "lucide-react";

export function SkillsSection() {
    return (
        <section id="about" className="py-32 bg-black relative overflow-hidden">
            {/* Background decorative orbs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400"
                    >
                        Biography
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black mb-10 tracking-[-0.05em] text-white uppercase italic leading-[0.85]"
                    >
                        About<br /><span className="text-transparent border-b-4 border-sky-500 pb-2 bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Me</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/50 max-w-3xl text-xl md:text-2xl font-medium leading-relaxed"
                    >
                        Hello! I'm <span className="text-white">Bansari Makwana</span>, a passionate developer with a deep love for solving complex puzzles and building elegant digital solutions. My journey is fueled by an insatiable curiosity for how technology shapes our world. Beyond the code, I'm a persistent problem-solver who views every challenge as a masterclass in learning. I thrive on turning creative ideas into functional, user-centric realities.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
                    {/* Card 1: Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-12 flex flex-col justify-between group overflow-hidden relative"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Terminal className="w-6 h-6 text-sky-400" />
                            </div>
                            <h3 className="text-4xl font-black text-white uppercase italic mb-6 tracking-tighter">Languages</h3>
                            <div className="space-y-4">
                                {["Python", "Java", "C Programming"].map((skill) => (
                                    <div key={skill} className="flex items-center gap-4 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 transition-all group-hover/item:h-6" />
                                        <span className="text-2xl font-bold text-white/40 group-hover/item:text-white transition-colors">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: DSA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-10 flex items-center justify-between group overflow-hidden relative"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <Brain className="w-8 h-8 text-purple-400" />
                                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">DSA</h3>
                            </div>
                            <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Complexity Optimized</p>
                        </div>
                        <div className="relative flex h-full items-center">
                            <div className="flex gap-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-purple-500/20 flex items-center justify-center animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }}>
                                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: DBMS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="rounded-[2.5rem] bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-10 flex flex-col justify-between group relative overflow-hidden cursor-default"
                    >
                        <Database className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform duration-500" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-white uppercase italic mb-1">DBMS</h3>
                            <p className="text-white/30 text-[10px] font-mono leading-none">Database Systems</p>
                        </div>
                    </motion.div>

                    {/* Card 4: Web */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-10 flex flex-col justify-between group relative overflow-hidden cursor-default"
                    >
                        <Globe className="w-10 h-10 text-orange-400 group-hover:animate-spin-slow transition-transform" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-white uppercase italic mb-1">Web</h3>
                            <div className="flex gap-2">
                                {["H", "C", "J"].map(l => (
                                    <span key={l} className="text-white/20 font-black">{l}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
