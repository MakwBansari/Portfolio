"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { Home, FolderCode, Cpu, Mail, Github, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const items = [
    { name: "Home", icon: Home, href: "#" },
    { name: "Projects", icon: FolderCode, href: "#projects" },
    { name: "Skills", icon: Cpu, href: "#skills" },
    { name: "Contact", icon: Mail, href: "#contact" },
];

function DockItem({ icon: Icon, href, mouseX, name }: { icon: any; href: string; mouseX: any; name: string }) {
    const ref = React.useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                className="aspect-square rounded-full bg-background/50 backdrop-blur-md border border-primary/20 flex items-center justify-center relative group"
            >
                <Icon className="h-1/2 w-1/2 text-foreground group-hover:text-primary transition-colors" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-popover text-popover-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border shadow-sm">
                    {name}
                </span>
            </motion.div>
        </Link>
    );
}

export function Dock() {
    const mouseX = useMotionValue(Infinity);
    const { theme, setTheme } = useTheme();

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex items-end gap-4 px-4 py-3 rounded-2xl bg-background/30 backdrop-blur-xl border border-primary/20 shadow-2xl"
            >
                {items.map((item) => (
                    <DockItem key={item.name} {...item} mouseX={mouseX} />
                ))}

                <div className="h-10 w-px bg-primary/20 mx-2 self-center" />

                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="h-10 w-10 aspect-square rounded-full bg-background/50 backdrop-blur-md border border-primary/20 flex items-center justify-center group"
                >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-primary" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-primary" />
                </button>
            </motion.div>
        </div>
    );
}
