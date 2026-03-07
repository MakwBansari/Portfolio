"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        name: "Backend",
        skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Superbase"],
    },
    {
        name: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "Figma", "Vercel"],
    },
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
                    <p className="text-muted-foreground max-w-xl">
                        My technical toolkit is focused on building modern, scalable, and highly performant web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="p-8 rounded-3xl glass-card border-primary/5 hover:border-primary/20 transition-all duration-500"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">{category.name}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-4 py-2 rounded-xl glass border text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors cursor-default"
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
