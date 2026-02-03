"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PlayCircle,
  BarChart3,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useAside } from "@/context/AsideContext";

const Home = () => {
  const { navigateTo } = useAside();
  const bgImage =
    "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-the-interior-of-a-clothing-store-with-clothing-on-display-image_2533545.jpg";

  return (
    <div
      className="min-h-screen bg-background text-foreground selection:bg-emerald-500/30 transition-colors duration-300"
      id="home"
    >
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden lg:flex lg:items-center min-h-[80vh]">
          <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20">
                <Zap size={14} fill="currentColor" /> The Next Generation POS
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Manage your shop <br />
                <span className="text-emerald-600 dark:text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">
                  with confidence.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A powerful, all-in-one terminal for Surat's retail leaders.
                Track inventory, process returns, and analyze sales trends in
                real-time.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-700 dark:hover:bg-emerald-600 px-8 h-14 rounded-2xl gap-2 text-lg shadow-lg shadow-emerald-600/20"
                  onClick={() => navigateTo("/dashboard")}
                >
                  Enter Dashboard <ArrowRight size={20} />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 rounded-2xl gap-2 font-semibold border-2"
                >
                  <PlayCircle size={20} /> Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-[3rem] rotate-3 blur-2xl group-hover:rotate-6 transition-transform duration-700" />

              <div
                className="relative h-[400px] lg:h-[550px] rounded-[2.5rem] border-4 border-card shadow-2xl overflow-hidden bg-cover bg-center transition-all duration-500 group-hover:scale-[1.01]"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                {/* Gradient Overlay for image readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Status Badge (UI Detail) */}
                <div className="absolute bottom-6 left-6 right-6 bg-card/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-bold">
                      Terminal Active: Surat East
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    ID: 882-POS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGE SECTION */}
        <section className="bg-muted/50 py-20 border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard
                icon={<ShieldCheck className="text-emerald-600" />}
                title="Offline Sync"
                desc="Keep selling even when the internet goes down. Data syncs automatically."
              />
              <FeatureCard
                icon={<BarChart3 className="text-emerald-600" />}
                title="Live Analytics"
                desc="See your branch revenue grow in real-time with visual heatmaps."
              />
              <FeatureCard
                icon={<Zap className="text-emerald-600" />}
                title="Instant Refunds"
                desc="Process returns and store credits in under 30 seconds."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 p-6 rounded-2xl hover:bg-card transition-colors duration-300 border">
    <div className="p-4 bg-background rounded-2xl shadow-sm border border-border">
      {icon}
    </div>
    <div className="space-y-2">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Home;
