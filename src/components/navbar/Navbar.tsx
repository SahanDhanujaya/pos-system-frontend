"use client";

import React, { useEffect, useState } from "react";
import { Computer } from "lucide-react";
import { ModeToggle } from "../toggles/ModeToggle";
import { Button } from "../ui/button";
import { useAside } from "@/context/AsideContext";

function Navbar() {
  const { navigateTo } = useAside();
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Intersection Observer to update active state on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust to trigger active state mid-scroll
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto bg-card/70 backdrop-blur-xl border border-border/40 flex items-center justify-between p-3 px-6 rounded-2xl shadow-lg transition-all duration-300">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection("home")}
        >
          <div className="bg-emerald-600 p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform">
            <Computer size={20} />
          </div>
          <h1 className="font-bold uppercase tracking-widest text-sm hidden sm:block">
            pos <span className="text-emerald-600">system</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 cursor-pointer hover:text-emerald-600 ${
                  activeSection === item.id ? "text-emerald-600" : "text-muted-foreground"
                }`}
              >
                {item.label}
                {/* Animated Indicator Underline */}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full animate-in fade-in zoom-in duration-300" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="hidden sm:flex"
            onClick={() => navigateTo("/auth/signin")}
          >
            Sign In
          </Button>
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition-all active:scale-95"
            onClick={() => navigateTo("/dashboard")}
          >
            Launch Terminal
          </Button>
          <div className="border-l pl-3 ml-1">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;