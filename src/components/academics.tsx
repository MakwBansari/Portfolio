"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function AcademicsSection() {
    return (
        <section id="academics" className="py-20 min-h-[90dvh] flex flex-col justify-center bg-background relative overflow-hidden transition-colors duration-500 scroll-mt-24">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 dark:bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400"
                    >
                        Education
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="text-4xl md:text-5xl font-black mb-6 tracking-[-0.05em] text-foreground dark:text-white uppercase italic leading-[0.85]"
                    >
                        Academic<br /><span className="text-transparent border-b-2 border-sky-500 pb-1 bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Journey</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
                        whileHover={{ y: -5 }}
                        className="group relative p-8 md:p-12 rounded-[2.5rem] bg-card dark:bg-white/[0.02] border border-border dark:border-white/10 backdrop-blur-3xl overflow-hidden shadow-xl"
                    >
                        {/* Decorative circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-[80px] rounded-full group-hover:bg-sky-500/10 transition-colors duration-700" />

                        <div className="relative z-10 space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="space-y-4 flex-1">
                                    <div className="w-14 h-14 rounded-2xl bg-sky-400/10 dark:bg-sky-500/10 border border-sky-400/20 dark:border-sky-500/20 flex items-center justify-center group-hover:rotate-6 transition-transform">
                                        <GraduationCap className="w-7 h-7 text-sky-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-black text-foreground dark:text-white uppercase italic tracking-tighter shadow-sky-500/5">Computer Engineering</h3>
                                        <p className="text-sky-400 text-sm font-bold tracking-widest uppercase flex items-center gap-2 mt-2">
                                            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                                            Sal Institute for Technology and Engineering Research
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 px-5 py-2 rounded-xl bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10">
                                    <span className="text-xl font-black text-foreground dark:text-white italic whitespace-nowrap">2023 — 2027</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-foreground/5 dark:border-white/5">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-3 h-3 text-sky-500" />
                                        <p className="text-[9px] font-black uppercase tracking-widest">Location</p>
                                    </div>
                                    <p className="text-lg font-bold text-foreground dark:text-white">Gujarat, India</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar className="w-3 h-3 text-sky-500" />
                                        <p className="text-[9px] font-black uppercase tracking-widest">Status</p>
                                    </div>
                                    <p className="text-lg font-bold text-foreground dark:text-white">Currently Pursuing</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <div className="w-2 h-2 rounded-full bg-sky-400" />
                                        <p className="text-[9px] font-black uppercase tracking-widest">Focus</p>
                                    </div>
                                    <p className="text-lg font-bold text-foreground dark:text-white">Full Stack Dev</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
