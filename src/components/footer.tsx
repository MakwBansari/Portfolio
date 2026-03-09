"use client";

import React from "react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="w-full pb-24 relative overflow-hidden bg-background">
            {/* Final Marquee */}
            <div className="w-full overflow-hidden bg-sky-400 py-4 mb-16 select-none border-y border-sky-500/20">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-20"
                >
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="text-black font-black uppercase italic tracking-tighter text-2xl px-4 flex items-center gap-4">
                            Thanks for visiting • Keep Building • Open for Collaborations • Let's Connect •
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="text-4xl font-black tracking-tighter uppercase italic text-foreground dark:text-white mb-2">
                        Bansari <span className="text-sky-400">Makwana</span>
                    </div>

                    <div className="flex flex-col gap-2 italic">
                        <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
                            © {new Date().getFullYear()} Designed & Built with ❤️ by Bansari Makwana
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50 font-black">
                            All Rights Reserved
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
        </footer>
    );
}
