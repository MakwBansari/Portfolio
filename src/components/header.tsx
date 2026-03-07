"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";

export function Header() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center pointer-events-none">
            <div className="pointer-events-auto">
                <Link href="/" className="text-xl font-bold tracking-tighter text-sky-400 leading-none whitespace-nowrap">
                    Bansari Makwana
                </Link>
            </div>
            <div className="pointer-events-auto">
                <ModeToggle />
            </div>
        </header>
    );
}
