"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Brain, Database, Globe, Code2 } from "lucide-react";

export function SkillsSection() {
    const skillGroups = [
        {
            title: "Languages",
            icon: <Terminal className="w-6 h-6 text-sky-400" />,
            skills: ["Java", "Python", "C Programming"],
            variant: "list",
        },
        {
            title: "Web Development",
            icon: <Globe className="w-6 h-6 text-orange-400" />,
            skills: ["HTML", "CSS", "JavaScript"],
            variant: "cloud",
        },
        {
            title: "Data & Systems",
            icon: <Brain className="w-6 h-6 text-purple-400" />,
            skills: ["DSA", "Analytics"],
            variant: "concepts",
        },
        {
            title: "Tools",
            icon: <Database className="w-6 h-6 text-emerald-400" />,
            skills: ["Tech Tools"],
            variant: "cloud",
        },
    ];

    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
            {/* Background decorative orbs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-8 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400"
                    >
                        About Me
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="text-4xl md:text-6xl font-black mb-10 tracking-[-0.05em] text-foreground dark:text-white uppercase italic leading-[0.85]"
                    >
                        Developer<br /><span className="text-transparent border-b-4 border-sky-500 pb-2 bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Soul</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                        className="relative p-12 rounded-[3rem] bg-card dark:bg-white/[0.02] border border-border dark:border-white/10 backdrop-blur-3xl overflow-hidden group"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <div className="w-24 h-24 rounded-3xl bg-sky-400/10 dark:bg-sky-500/10 border border-sky-400/20 dark:border-sky-500/20 flex items-center justify-center shrink-0">
                                <span className="text-4xl">👩‍💻</span>
                            </div>
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground dark:text-white/90 italic">
                                    "I am a passionate developer with a deep love for solving complex puzzles and building elegant digital solutions. For me, coding is more than just instructions; it is about creating meaningful experiences."
                                </p>
                                <div className="flex gap-4">
                                    <div className="h-0.5 w-12 bg-sky-400 rounded-full" />
                                    <p className="text-sm font-black uppercase tracking-widest text-sky-400">Bansari Makwana</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="p-10 rounded-[3rem] bg-card dark:bg-white/[0.02] border border-border dark:border-white/10 backdrop-blur-xl hover:border-sky-400/50 transition-all duration-500 group/card flex flex-col"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-sky-400/10 dark:bg-sky-500/10 border border-sky-400/20 dark:border-sky-500/20 flex items-center justify-center text-sky-400 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-500">
                                    {group.title === "Web Development" ? (
                                        <Globe className="w-8 h-8 text-orange-400 group-hover/card:animate-spin-slow" />
                                    ) : group.icon}
                                </div>
                                <h3 className="text-3xl font-black text-foreground dark:text-white uppercase italic tracking-tighter">{group.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-5 py-2.5 rounded-2xl bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-xs font-bold text-muted-foreground uppercase tracking-widest group-hover/card:text-sky-400 group-hover/card:border-sky-400/30 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
