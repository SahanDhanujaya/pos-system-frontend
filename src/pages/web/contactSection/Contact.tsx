"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contact = () => {
  const LOCATION_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31684.35886607921!2d80.45912977262418!3d6.944868206746029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae39f0d097379bf%3A0xd7056c5b337a5dc8!2sMorahenagama!5e0!3m2!1sen!2slk!4v1770046691770!5m2!1sen!2slk";
  return (
    <div className="min-h-screen bg-background text-foreground" id="contact">
      <Navbar />

      <main className="pt-4 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Have questions about setting up your terminal? Our Surat-based
              support team is here to help you scale your retail business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              <div className="grid gap-8">
                <ContactInfoItem
                  icon={<Phone className="text-emerald-600" />}
                  title="Phone Support"
                  detail="+91 98765 43210"
                  subDetail="Mon-Sat, 9am to 7pm"
                />
                <ContactInfoItem
                  icon={<Mail className="text-emerald-600" />}
                  title="Email Us"
                  detail="support@suratpos.com"
                  subDetail="We reply within 24 hours"
                />
                <ContactInfoItem
                  icon={<MapPin className="text-emerald-600" />}
                  title="Main Branch"
                  detail="Ring Road, Textile Market"
                  subDetail="Surat, Gujarat 395002"
                />
                <ContactInfoItem
                  icon={<Clock className="text-emerald-600" />}
                  title="Technical Support"
                  detail="24/7 Priority Support"
                  subDetail="For Business & Enterprise plans"
                />
              </div>

              {/* Decorative Map Placeholder */}
              <div className="h-48 w-full bg-muted rounded-3xl border-2 border-dashed border-border flex items-center justify-center overflow-hidden">
                { LOCATION_URL && (
                  <iframe
                    src={LOCATION_URL}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                ) ||(
                  <span className="text-muted-foreground font-medium italic">
                    [ Interactive Map Integration ]
                  </span>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border p-8 rounded-[2.5rem] shadow-xl shadow-emerald-500/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">
                      Full Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      className="bg-background border-border h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background border-border h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Subject</label>
                  <Input
                    placeholder="Inquiry about Enterprise Plan"
                    className="bg-background border-border h-12 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Message</label>
                  <Textarea
                    placeholder="Tell us about your store..."
                    className="bg-background border-border min-h-[150px] rounded-2xl resize-none"
                  />
                </div>

                <Button className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-lg font-bold gap-2 transition-all">
                  <Send size={18} /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Helper Component
const ContactInfoItem = ({
  icon,
  title,
  detail,
  subDetail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  subDetail: string;
}) => (
  <div className="flex gap-5 group">
    <div className="shrink-0 w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
        {title}
      </h4>
      <p className="text-xl font-bold">{detail}</p>
      <p className="text-sm text-muted-foreground">{subDetail}</p>
    </div>
  </div>
);

export default Contact;
