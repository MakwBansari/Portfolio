"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "Stride Banking",
        description: "Next-gen banking featuring smart financial management, 24/7 AI support, document checklists, and integrated appointment scheduling.",
        tags: ["FinTech", "Scheduling", "Banking"],
        image: "/stride_new.png",
        link: "https://gostride.online/",
        github: "#",
    },
    {
        title: "Sexual Harassment Committee",
        description: "A secure, 100% anonymous platform for reporting and tracking institutional concerns with end-to-end encryption and zero-log policy.",
        tags: ["Anonymity", "Security", "Portal"],
        image: "/shc_new.png",
        link: "https://sexualharrasmentcomplaint.vercel.app/",
        github: "#",
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-[#050505]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-white uppercase italic"
                    >
                        MY PROJECTS
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/40 max-w-xl"
                    >
                        Designing and building digital products with a focus on impact and user security.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                            whileHover={{
                                scale: 1.05,
                                translateY: -5,
                                transition: { duration: 0.3, ease: "easeInOut" }
                            }}
                            className="group bg-[#0A0A0A] rounded-2xl border border-white/5 overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-shadow duration-300"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-white/40 border border-white/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2 group/link"
                                    >
                                        Live Site
                                        <span className="block w-4 h-[1px] bg-white transition-all group-hover/link:w-6" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 w-full bg-sky-400 py-4 overflow-hidden border-y border-white/10 group">
                    <motion.div
                        className="flex whitespace-nowrap gap-12"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
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
            </div>
        </section>
    );
}
