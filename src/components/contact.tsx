"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        // Using the user's provided email and adding the public access key for Web3Forms
        formData.append("access_key", "c87380d8-0408-4e85-8847-9f0940146679"); // Placeholder - User needs to replace or I can use a generic one if I had it

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    }

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
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-4 py-1.5 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400"
                            >
                                Get in Touch
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
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
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        className="p-10 rounded-[3rem] bg-card dark:bg-white/[0.02] border border-border dark:border-white/10 backdrop-blur-3xl relative overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                                >
                                    <div className="w-24 h-24 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                                        <CheckCircle2 className="w-12 h-12 text-sky-400" />
                                    </div>
                                    <h3 className="text-3xl font-black text-foreground dark:text-white uppercase italic tracking-tighter">Message Sent!</h3>
                                    <p className="text-muted-foreground font-medium max-w-xs">
                                        Thanks for reaching out! I'll get back to you as soon as possible.
                                    </p>
                                    <Button
                                        onClick={() => setStatus("idle")}
                                        variant="ghost"
                                        className="mt-4 font-black uppercase tracking-widest text-[10px]"
                                    >
                                        Send Another
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-6 relative z-10"
                                >
                                    <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                                    <input type="hidden" name="subject" value="New Message from Portfolio" />

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-muted-foreground">Full Name</label>
                                        <Input name="name" required className="h-16 rounded-2xl bg-foreground/5 dark:bg-white/5 border-foreground/10 dark:border-white/10 px-6 font-medium focus:border-sky-400 transition-all text-foreground dark:text-white" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-muted-foreground">Email Address</label>
                                        <Input name="email" type="email" required className="h-16 rounded-2xl bg-foreground/5 dark:bg-white/5 border-foreground/10 dark:border-white/10 px-6 font-medium focus:border-sky-400 transition-all text-foreground dark:text-white" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-muted-foreground">Your Message</label>
                                        <Textarea name="message" required className="min-h-[150px] rounded-3xl bg-foreground/5 dark:bg-white/5 border-foreground/10 dark:border-white/10 p-6 font-medium focus:border-sky-400 transition-all text-foreground dark:text-white" placeholder="Tell me about your project..." />
                                    </div>
                                    <Button
                                        disabled={status === "submitting"}
                                        className="w-full h-16 rounded-2xl bg-sky-400 hover:bg-sky-500 text-black font-black uppercase tracking-widest text-xs transition-all duration-300 disabled:opacity-50"
                                    >
                                        {status === "submitting" ? (
                                            <>Submitting <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
                                        ) : (
                                            <>Send Message <Send className="ml-2 w-4 h-4" /></>
                                        )}
                                    </Button>
                                    {status === "error" && (
                                        <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center">Something went wrong. Please try again.</p>
                                    )}
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
