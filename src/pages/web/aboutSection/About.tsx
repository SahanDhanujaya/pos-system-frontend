"use client";

import Navbar from "@/components/navbar/Navbar";
import { Info, Target, ShieldCheck, Users } from "lucide-react";

const About = () => {
  const bgImage =
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop";

  const features = [
    {
      icon: <Target className="text-emerald-600" />,
      title: "Precision",
      desc: "Real-time inventory tracking with 99.9% accuracy.",
    },
    {
      icon: <ShieldCheck className="text-emerald-600" />,
      title: "Secure",
      desc: "Enterprise-grade encryption for every transaction.",
    },
    {
      icon: <Users className="text-emerald-600" />,
      title: "Friendly",
      desc: "Designed for ease of use by any staff member.",
    },
  ];

  return (
    <div className="min-h-screen bg-background" id="about">
      <Navbar />

      {/* Hero Section */}
      <div
        className="h-64 bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <h1 className="text-5xl font-extrabold text-white z-10 tracking-tight">
          Our Story
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Info size={14} /> About the POS
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Modernizing Retail Management in Surat.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2025, our POS system was designed specifically for the
              fast-paced retail environment of Surat's textile and clothing
              hubs. We believe that technology should be a tool that simplifies
              work, not a hurdle.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the Ambavadi branch to our newest expansions, we help local
              businesses manage orders, returns, and shifts with a single,
              elegant interface.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-card rounded-2xl border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-emerald-50 rounded-xl h-fit">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
