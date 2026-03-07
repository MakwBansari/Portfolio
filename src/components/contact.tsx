"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Content */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400"
                            >
                                Get in Touch
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-black tracking-[-0.05em] text-foreground dark:text-white uppercase italic leading-[0.85]"
                            >
                                Let's Build<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Together</span>
                            </motion.h2>
                            <p className="text-muted-foreground text-xl max-w-md font-medium leading-relaxed">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: <Mail className="w-6 h-6" />, label: "Email", value: "bansarimakwana3007@gmail.com", link: "mailto:bansarimakwana3007@gmail.com" },
                                { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "@MakwBansari", link: "https://github.com/MakwBansari" },
                                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", value: "Bansi Makwana", link: "https://www.linkedin.com/in/bansimakwana/" },
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-6 group p-4 -ml-4 rounded-3xl hover:bg-foreground/5 dark:hover:bg-white/5 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-sky-400/10 dark:bg-sky-500/10 border border-sky-400/20 dark:border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                                        <p className="text-lg font-bold text-foreground dark:text-white group-hover:text-sky-400 transition-colors">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[3rem] bg-card dark:bg-white/[0.02] border border-border dark:border-white/10 backdrop-blur-3xl relative"
                    >
                        <form className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-muted-foreground">Full Name</label>
                                <Input className="h-16 rounded-2xl bg-foreground/5 dark:bg-white/5 border-foreground/10 dark:border-white/10 px-6 font-medium focus:border-sky-400 transition-all text-foreground dark:text-white" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-muted-foreground">Email Address</label>
                                <Input className="h-16 rounded-2xl bg-foreground/5 dark:bg-white/5 border-foreground/10 dark:border-white/10 px-6 font-medium focus:border-sky-400 transition-all text-foreground dark:text-white" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-muted-foreground">Your Message</label>
                                <Textarea className="min-h-[150px] rounded-3xl bg-foreground/5 dark:bg-white/5 border-foreground/10 dark:border-white/10 p-6 font-medium focus:border-sky-400 transition-all text-foreground dark:text-white" placeholder="Tell me about your project..." />
                            </div>
                            <Button className="w-full h-16 rounded-2xl bg-sky-400 hover:bg-sky-500 text-black font-black uppercase tracking-widest text-xs transition-all duration-300">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
