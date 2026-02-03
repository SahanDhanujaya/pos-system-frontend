"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAside } from "@/context/AsideContext";
import { UserPlus, Computer, ArrowRight, UserCircle2 } from "lucide-react";

const ROLES = [
  { label: "Standard User", value: "USER" },
  { label: "Administrator", value: "ADMIN" },
  { label: "Moderator", value: "MODERATOR" },
  { label: "Guest", value: "GUEST" },
];

export default function SignUp() {
  const { navigateTo } = useAside();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "USER",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Registration Successful:", formData);
    navigateTo("/auth/signin");
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-slate-50/50 dark:bg-zinc-950 transition-colors duration-500">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="w-full max-w-2xl relative">
        {/* Brand/Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-emerald-600 p-3 rounded-2xl shadow-xl shadow-emerald-600/20 text-white mb-4">
            <Computer size={32} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Create an Account
          </h1>
          <p className="text-muted-foreground mt-2 text-center max-w-sm">
            Join the POS network and start managing your retail store with ease.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-card/80 backdrop-blur-xl shadow-2xl shadow-black/5 rounded-[2.5rem] p-8 md:p-12 border border-border/50">
          <form onSubmit={handleSubmit} className="space-y-8">
            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              
              {/* Full Name */}
              <Field className="md:col-span-2 space-y-2">
                <FieldLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Full Name
                </FieldLabel>
                <div className="relative">
                  <UserCircle2 className="absolute left-3 top-3 text-muted-foreground/60" size={18} />
                  <Input 
                    name="fullName" 
                    placeholder="Enter your full name"
                    value={formData.fullName} 
                    onChange={handleChange} 
                    className="h-12 pl-10 bg-background/50 border-border/60 rounded-xl focus:ring-emerald-500/20"
                    required 
                  />
                </div>
              </Field>

              {/* Email */}
              <Field className="space-y-2">
                <FieldLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Email
                </FieldLabel>
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="name@store.com"
                  value={formData.email} 
                  onChange={handleChange} 
                  className="h-12 bg-background/50 border-border/60 rounded-xl focus:ring-emerald-500/20"
                  required 
                />
              </Field>

              {/* Phone */}
              <Field className="space-y-2">
                <FieldLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Phone
                </FieldLabel>
                <Input 
                  name="phone" 
                  type="tel" 
                  placeholder="+91 00000 00000"
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="h-12 bg-background/50 border-border/60 rounded-xl focus:ring-emerald-500/20"
                  required 
                />
              </Field>

              {/* User Role */}
              <Field className="md:col-span-2 space-y-2">
                <FieldLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  User Role
                </FieldLabel>
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="appearance-none flex h-12 w-full rounded-xl border border-border/60 bg-background/50 px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-emerald-500/20 outline-none cursor-pointer transition-all"
                  >
                    {ROLES.map((role) => (
                      <option key={role.value} value={role.value} className="bg-background text-foreground">
                        {role.label}
                      </option>
                    ))}
                  </select>
                  {/* Custom Arrow for select */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </Field>

              {/* Password */}
              <Field className="md:col-span-2 space-y-2">
                <FieldLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Password
                </FieldLabel>
                <Input 
                  name="password" 
                  type="password" 
                  placeholder="••••••••"
                  value={formData.password} 
                  onChange={handleChange} 
                  className="h-12 bg-background/50 border-border/60 rounded-xl focus:ring-emerald-500/20"
                  required 
                />
              </Field>
            </FieldGroup>

            <div className="space-y-4 pt-4">
              <Button 
                type="submit" 
                className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <UserPlus size={20} /> Create Account
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <button 
                  type="button"
                  onClick={() => navigateTo("/auth/signin")} 
                  className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline underline-offset-4"
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Support Link */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          By signing up, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </section>
  );
}