"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function AcademicsSection() {
    return (
        <section id="academics" className="py-32 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400"
                    >
                        Education
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white uppercase italic"
                    >
                        Academics
                    </motion.h2>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        whileHover={{ y: -10 }}
                        className="relative group w-full max-w-4xl"
                    >
                        {/* Animated Border Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                        {/* Main Card */}
                        <div className="relative flex flex-col md:flex-row items-center gap-10 bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-10 md:p-16 overflow-hidden">
                            <div className="relative">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                                    <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-sky-400" />
                                </div>
                                {/* Floating decorative element */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-sky-500/20 blur-xl"
                                />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic leading-none mb-4 tracking-tighter shadow-sky-500/10">
                                    Bachelor of Engineering
                                </h3>
                                <p className="text-sky-400 text-lg md:text-xl font-bold uppercase tracking-widest mb-6">
                                    Computer Engineering
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-white/50">
                                        <MapPin className="w-5 h-5 text-sky-500" />
                                        <span className="font-bold">SAL Institute of Technology and Engineering Research</span>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-3">
                                        <Calendar className="w-5 h-5 text-sky-500" />
                                        <div className="flex flex-col">
                                            <span className="text-white font-black text-2xl tracking-tighter italic">
                                                2023 - 2027
                                            </span>
                                            <span className="text-sky-500 font-bold text-xs uppercase tracking-[0.2em] leading-none">
                                                (Expected Arrival)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-9xl leading-none select-none pointer-events-none italic uppercase">
                            SAL
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
