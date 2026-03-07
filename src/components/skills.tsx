"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        name: "Languages",
        skills: ["Python", "Java", "C Programming"],
    },
    {
        name: "Computer Science",
        skills: ["Data Structures & Algorithms (DSA)", "DBMS"],
    },
    {
        name: "Web Development",
        skills: ["HTML", "CSS", "JavaScript"],
    },
];

export function SkillsSection() {
    return (
        <section id="about" className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.2em] text-white/50"
                    >
                        Biography
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white uppercase italic leading-[0.9]"
                    >
                        About<br />Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/60 max-w-2xl text-lg md:text-xl font-medium leading-relaxed"
                    >
                        I am a results-driven developer with a strong foundation in core computer science principles and modern software development practices. I specialize in building efficient, user-focused applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {/* Languages Card - Span 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-10 flex flex-col justify-between group hover:border-sky-500/30 transition-colors duration-500"
                    >
                        <div>
                            <h3 className="text-2xl font-black text-white uppercase italic mb-2">Languages</h3>
                            <p className="text-white/40 text-sm">Proficient in core programming languages for diverse development needs.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {["Python", "Java", "C Programming"].map((skill) => (
                                <span key={skill} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* DSA Card - Span 1 column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-10 flex flex-col justify-between group hover:border-purple-500/30 transition-colors duration-500"
                    >
                        <h3 className="text-2xl font-black text-white uppercase italic mb-2">DSA</h3>
                        <div className="text-white/60 font-bold text-lg leading-tight uppercase">
                            Data Structures &<br />Algorithms
                        </div>
                        <div className="w-12 h-1 bg-purple-500 rounded-full" />
                    </motion.div>

                    {/* DBMS Card - Span 1 column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-10 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors duration-500"
                    >
                        <h3 className="text-2xl font-black text-white uppercase italic">DBMS</h3>
                        <p className="text-white/40 text-sm">Managing complex data with excellence.</p>
                        <div className="text-emerald-500 font-mono text-xs tracking-tighter overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity">
                            SELECT * FROM KNOWLEDGE WHERE TYPE = 'DATABASE';
                        </div>
                    </motion.div>

                    {/* Web Dev Card - Span 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-10 flex flex-col justify-between relative overflow-hidden group hover:border-sky-500/30 transition-colors duration-500"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-white uppercase italic mb-2">Web Development</h3>
                            <p className="text-white/40 text-sm max-w-md">Building lightning-fast, responsive web experiences with modern tools.</p>
                        </div>
                        <div className="flex gap-4 relative z-10">
                            {["HTML", "CSS", "JavaScript"].map((tech) => (
                                <div key={tech} className="flex flex-col">
                                    <span className="text-3xl font-black text-white/10 group-hover:text-white transition-colors duration-700">{tech}</span>
                                </div>
                            ))}
                        </div>
                        {/* Decorative background glow */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-500/10 blur-[80px] rounded-full group-hover:bg-sky-500/20 transition-all duration-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
