import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Dock } from "@/components/dock";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bansari Makwana",
  description: "Personal Portfolio showcasing my work and skills.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Refined background for a more premium dark vibe */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-background">
            <div className="absolute inset-0 bg-[radial-gradient(#489FB515_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(72,159,181,0.15),transparent)]" />
          </div>

          <Header />
          <main className="relative z-0">
            {children}
          </main>
          <Footer />
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
