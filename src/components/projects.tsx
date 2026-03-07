"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A premium shopping experience with real-time inventory and AI recommendations.",
        tags: ["Next.js", "Sanity", "Stripe"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop",
        link: "#",
        github: "#",
        size: "large",
    },
    {
        title: "SaaS Dashboard",
        description: "Complex data visualization with real-time updates.",
        tags: ["React", "D3.js", "Firebase"],
        image: "https://images.unsplash.com/photo-1551288049-bb848a4f6cf2?q=80&w=2000&auto=format&fit=crop",
        link: "#",
        github: "#",
        size: "small",
    },
    {
        title: "AI Chat Interface",
        description: "Natural language processing with a sleek, minimalist UI.",
        tags: ["TypeScript", "OpenAI", "Tailwind"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
        link: "#",
        github: "#",
        size: "small",
    },
    {
        title: "Design System",
        description: "Unified component library for large scale enterprise apps.",
        tags: ["Storybook", "React", "CSS-in-JS"],
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2000&auto=format&fit=crop",
        link: "#",
        github: "#",
        size: "medium",
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
                    <p className="text-muted-foreground max-w-xl">
                        A collection of projects that blend aesthetic design with robust engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl glass-card ${project.size === "large" ? "md:col-span-2 md:row-span-2" :
                                    project.size === "medium" ? "md:col-span-1 md:row-span-2" : ""
                                }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />

                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                                <div className="flex gap-2 mb-3">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="bg-white/10 text-white backdrop-blur-md border-white/20">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>

                                <div className="flex items-center gap-4">
                                    <a href={project.link} className="text-white hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium">
                                        View Project <ExternalLink className="h-4 w-4" />
                                    </a>
                                    <a href={project.github} className="text-white/70 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
                                        Source <Github className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
