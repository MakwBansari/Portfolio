"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
                            Available for Projects
                        </span>
                    </motion.div>

                    <div className="mb-6 overflow-visible">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            className="text-[clamp(2.5rem,10vw,8rem)] font-black tracking-tighter leading-none whitespace-nowrap inline-block"
                        >
                            {"Bansari Makwana".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                        type: "spring",
                                        stiffness: 150
                                    }}
                                    className={char === " " ? "inline-block w-[0.2em]" : "inline-block text-gradient"}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="text-xl md:text-3xl font-medium text-muted-foreground mb-8"
                    >
                        Building Pixel-Perfect Web Experiences
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/30 pl-6 italic"
                    >
                        Passionate developer dedicated to crafting efficient, user-centric applications
                        with modern technologies and a keen eye for design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="rounded-full px-8 group">
                            View Work
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 glass border-primary/20">
                            Download CV
                            <Download className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 blur-[120px] opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full" />
            </div>
        </section>
    );
}
