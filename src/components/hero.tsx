"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    const marqueeVariant = {
        animate: {
            x: [0, -1000],
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

    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-center bg-black overflow-hidden pt-20 pb-32">
            {/* Ultra-bold Name Header */}
            <div className="w-full flex justify-center items-center px-4 overflow-hidden">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[clamp(3rem,15vw,12rem)] font-black tracking-tighter leading-none text-white uppercase select-none text-center"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
                >
                    Bansari<br />Makwana
                </motion.h1>
            </div>

            {/* Scrolling Marquee */}
            <div className="w-full bg-primary py-4 overflow-hidden border-y border-white/10 group mt-12 mb-8">
                <motion.div
                    className="flex whitespace-nowrap gap-12"
                    variants={marqueeVariant}
                    animate="animate"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="text-xl md:text-3xl font-black uppercase text-black italic italic-border">
                                Currently learning programming languages
                            </span>
                            <span className="text-black text-2xl">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Subtext description */}
            <div className="container mx-auto px-4 mt-8 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-lg md:text-2xl font-medium text-white/60 max-w-3xl mx-auto"
                >
                    Aspiring Developer | Crafting efficient, user-centric digital experiences while expanding my technical horizons.
                </motion.p>
            </div>

            <style jsx>{`
                .italic-border {
                    -webkit-text-stroke: 1px rgba(0,0,0,0.3);
                }
            `}</style>
        </section>
    );
}
