"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black mb-10 tracking-[ -0.05em] text-white uppercase italic leading-[0.85]"
                    >
                        Contact<br /><span className="text-transparent border-b-4 border-sky-500 pb-2 bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Me</span>
                    </motion.h2>
                    <p className="text-muted-foreground max-w-xl">
                        Have a project in mind or just want to say hi? I&apos;m always open to new opportunities and interesting conversations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <a href="mailto:bansarimakwana3007@gmail.com" className="font-medium hover:text-sky-400 transition-colors">bansarimakwana3007@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Github className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">GitHub</p>
                                        <a href="https://github.com/MakwBansari" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-sky-400 transition-colors">MakwBansari</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Linkedin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/bansimakwana/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-sky-400 transition-colors">Bansi Makwana</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-8 rounded-3xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">Name</label>
                                    <Input placeholder="John Doe" className="rounded-xl glass border-primary/10 transition-all focus:border-primary/30" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">Email</label>
                                    <Input placeholder="john@example.com" type="email" className="rounded-xl glass border-primary/10 transition-all focus:border-primary/30" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Subject</label>
                                <Input placeholder="Project Inquiry" className="rounded-xl glass border-primary/10 transition-all focus:border-primary/30" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Message</label>
                                <Textarea placeholder="Tell me about your project..." className="min-h-[150px] rounded-xl glass border-primary/10 transition-all focus:border-primary/30" />
                            </div>
                            <Button className="w-full rounded-xl py-6 text-base font-semibold group">
                                Send Message
                                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
