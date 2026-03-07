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
        <section id="about" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white uppercase italic"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/60 max-w-2xl text-lg leading-relaxed"
                    >
                        I am a results-driven developer with a strong foundation in core computer science principles and modern software development practices. I specialize in building efficient, user-focused applications while continuously expanding my expertise in high-performance programming and database management.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500"
                        >
                            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-widest">{category.name}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.1, color: "#38bdf8" }}
                                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-white/40 transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
