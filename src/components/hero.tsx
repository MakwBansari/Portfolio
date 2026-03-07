"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
    const [greeting, setGreeting] = useState("Hello");
    const greetings = ["Hello", "Namaste", "Hola", "Bonjour", "Ciao"];

    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(prev => {
                const currentIndex = greetings.indexOf(prev);
                return greetings[(currentIndex + 1) % greetings.length];
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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
        <section className="relative min-h-[100dvh] flex flex-col justify-center bg-background overflow-hidden pt-20 pb-32 transition-colors duration-500">
            {/* Ultra-bold Name Header */}
            <div className="w-full flex justify-center items-center px-4 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-6"
                >
                    <motion.div
                        key={greeting}
                        className="px-6 py-2 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 backdrop-blur-md"
                        initial={{ scale: 0.9, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-sky-400">
                            {greeting}
                        </span>
                    </motion.div>

                    <h1 className="text-7xl md:text-9xl font-black tracking-[-0.08em] leading-[0.85] uppercase italic">
                        <motion.span
                            className="block text-foreground dark:text-white"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Bansari
                        </motion.span>
                        <motion.span
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Makwana
                        </motion.span>
                    </h1>
                </motion.div>
            </div>

            {/* Scrolling Marquee */}
            <div className="w-full bg-sky-400 py-2 overflow-hidden border-y border-foreground/10 dark:border-white/10 group mt-12 mb-8">
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

            <div className="container mx-auto px-4 mt-8 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-lg md:text-2xl font-medium text-muted-foreground max-w-3xl mx-auto"
                >
                    Aspiring Developer | Crafting efficient, user-centric digital experiences while expanding my technical horizons.
                </motion.p>
            </div>
        </section>
    );
}
