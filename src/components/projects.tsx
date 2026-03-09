"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Stride",
        description: "Next-gen banking featuring smart financial management, 24/7 AI support, document checklists, and integrated appointment scheduling.",
        tags: ["FinTech", "Scheduling", "Banking"],
        image: "/stride_new.png",
        link: "https://gostride.online/",
        github: "https://github.com/simitmodi/Stride",
    },
    {
        title: "Sexual Harassment Committee",
        description: "A secure, 100% anonymous platform for reporting and tracking institutional concerns with end-to-end encryption and zero-log policy.",
        tags: ["Anonymity", "Security", "Portal"],
        image: "/shc_new.png",
        link: "https://sexualharrasmentcomplaint.vercel.app/",
        github: "https://github.com/Sexual-Harresment-Committee",
    },
];

const marqueeVariant = {
    animate: {
        x: ["0%", "-100%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop" as const,
                duration: 20,
                ease: "linear" as const,
            },
        },
    },
};

export function ProjectsSection() {
    return (
        <section id="projects" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
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
                        Portfolio
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="text-4xl md:text-6xl font-black mb-10 tracking-[-0.05em] text-foreground dark:text-white uppercase italic leading-[0.85]"
                    >
                        Recent<br /><span className="text-transparent border-b-4 border-sky-500 pb-2 bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Projects</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="group relative h-auto min-h-[350px] rounded-[2.5rem] overflow-hidden bg-card dark:bg-white/[0.02] border border-border dark:border-white/10 backdrop-blur-3xl transition-colors p-8"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-sky-400/10 dark:bg-sky-500/10 border border-sky-400/20 dark:border-sky-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <ExternalLink className="w-10 h-10 text-sky-400" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-black uppercase tracking-tight text-muted-foreground bg-foreground/5 dark:bg-white/5 py-1 px-3 rounded-full border border-foreground/10 dark:border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-foreground dark:text-white uppercase italic tracking-tighter leading-none">{project.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[160px]">
                                            <Button className="w-full h-14 rounded-2xl bg-sky-400 hover:bg-sky-500 text-black font-black uppercase tracking-widest text-xs transition-all duration-300">
                                                Live Site <ExternalLink className="ml-2 w-4 h-4" />
                                            </Button>
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[160px]">
                                            <Button variant="ghost" className="w-full h-14 rounded-2xl border border-border dark:border-white/10 hover:bg-foreground/5 dark:hover:bg-white/5 font-black uppercase text-xs tracking-widest transition-all">
                                                Source Code <Github className="ml-2 w-4 h-4" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Marquee */}
            <div className="w-full bg-sky-400 py-2 overflow-hidden border-y border-foreground/10 dark:border-white/10 group mt-8">
                <motion.div
                    className="flex whitespace-nowrap gap-12"
                    variants={marqueeVariant}
                    animate="animate"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="text-xl md:text-3xl font-black uppercase text-black italic">
                                More projects incoming
                            </span>
                            <span className="text-black text-2xl">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
