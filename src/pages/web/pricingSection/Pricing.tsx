"use client";

import React, { useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Check, Zap, Building2, Store } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Boutique",
      icon: <Store className="w-6 h-6 text-emerald-600" />,
      price: isYearly ? "1,499" : "1,999",
      desc: "Perfect for single small shops in Surat.",
      features: ["1 Register", "Basic Inventory", "Daily Reports", "Email Support"],
      button: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Business",
      icon: <Zap className="w-6 h-6 text-white" />,
      price: isYearly ? "3,499" : "4,499",
      desc: "Ideal for growing clothing stores.",
      features: ["Unlimited Registers", "Advanced Analytics", "Customer Loyalty Program", "Priority 24/7 Support"],
      button: "Get Started",
      highlight: true,
    },
    {
      name: "Enterprise",
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      price: "Custom",
      desc: "For multi-branch retail chains.",
      features: ["Multi-branch Sync", "Custom API Access", "Dedicated Account Manager", "On-site Training"],
      button: "Contact Sales",
      highlight: false,
    }
  ];

  return (
    <div className="min-h-screen bg-card/90 pb-4" id="pricing">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Choose the plan that fits your retail needs. All plans include our core POS terminal.
          </p>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="flex items-center gap-4 mb-16 bg-muted p-1 rounded-full border">
          <button 
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isYearly ? "bg-card-foreground shadow-sm text-muted " : "text-muted-foreground"}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isYearly ? "bg-card-foreground shadow-sm text-muted" : "text-muted-foreground"}`}
          >
            Yearly <span className="text-emerald-600 text-[10px] ml-1">(-20%)</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl ${
                plan.highlight 
                ? "bg-emerald-900 text-white scale-105 border-emerald-800 shadow-emerald-900/20" 
                : "bg-card text-card-foreground border-slate-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className={`mb-6 p-3 rounded-2xl w-fit ${plan.highlight ? "bg-white/10" : "bg-emerald-50"}`}>
                {plan.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-emerald-100/80" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold">₹{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-sm">/{isYearly ? 'yr' : 'mo'}</span>}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 ${plan.highlight ? "text-emerald-400" : "text-emerald-600"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? "secondary" : "outline"} 
                className={`w-full h-12 rounded-xl font-bold ${plan.highlight ? "bg-white text-emerald-900 hover:bg-emerald-50" : "border-emerald-600 text-emerald-600 hover:bg-emerald-50"}`}
              >
                {plan.button}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;