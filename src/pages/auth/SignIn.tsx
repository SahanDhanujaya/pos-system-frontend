"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAside } from "@/context/AsideContext";
import { Computer, ArrowRight, Github } from "lucide-react"; // Added for extra flair

export default function SignIn() {
  const { navigateTo } = useAside();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const fieldName = id.replace("fieldgroup-", "");
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    navigateTo("/");
  };

  return (
    <section className="flex items-center justify-center p-6 bg-slate-50/50 dark:bg-zinc-950 transition-colors duration-500">
      {/* Decorative background blur elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="w-full max-w-[440px] relative z-10">
        {/* Logo/Brand Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-emerald-600 p-3 rounded-2xl shadow-lg shadow-emerald-600/20 text-white mb-4">
            <Computer size={28} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-2">
            Access your POS terminal dashboard
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-xl shadow-2xl shadow-black/5 rounded-[2.5rem] p-8 md:p-10 border border-border/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <FieldGroup className="space-y-5">
              <Field className="space-y-2">
                <FieldLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Full Name
                </FieldLabel>
                <Input
                  id="fieldgroup-name"
                  placeholder="Jordan Lee"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 bg-background/50 border-border/60 rounded-xl px-4 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </Field>

              <Field className="space-y-2">
                <FieldLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Email Address
                </FieldLabel>
                <Input
                  id="fieldgroup-email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-background/50 border-border/60 rounded-xl px-4 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
                <FieldDescription className="text-[11px] ml-1">
                  We&apos;ll never share your email with anyone.
                </FieldDescription>
              </Field>
            </FieldGroup>

            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-base transition-all active:scale-[0.98] shadow-lg shadow-emerald-600/20 gap-2"
              >
                Sign In <ArrowRight size={18} />
              </Button>
            </div>

            {/* Social Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-3 text-muted-foreground font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            <Button variant="outline" className="w-full h-12 rounded-xl gap-2 border-border/60 font-semibold">
              <Github size={18} /> GitHub
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            New here?{" "}
            <button 
              onClick={() => navigateTo("/auth/signup")} 
              className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline underline-offset-4"
            >
              Create an account
            </button>
          </p>
        </div>
        
        {/* Footer links */}
        <footer className="mt-8 flex justify-center gap-6 text-xs text-muted-foreground font-medium">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </footer>
      </div>
    </section>
  );
}