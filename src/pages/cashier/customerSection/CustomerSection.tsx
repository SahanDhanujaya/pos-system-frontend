"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, UserPlus, Star, ShoppingBag, 
  CreditCard, Calendar, CheckCircle2 
} from "lucide-react";

// Mock Data based on your screenshots
const CUSTOMERS = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", pts: 150, orders: 5, spent: 300 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", pts: 200, orders: 8, spent: 540 },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "555-555-5555", pts: 250, orders: 12, spent: 960 },
  { id: 4, name: "Bob Brown", email: "bob@example.com", phone: "444-444-4444", pts: 300, orders: 3, spent: 150 },
];

export default function CustomerManagement() {
  const [selectedId, setSelectedId] = useState(1);
  const activeUser = CUSTOMERS.find(c => c.id === selectedId) || CUSTOMERS[0];

  return (
    <section className="min-h-screen bg-background p-4 flex flex-col gap-4">
      {/* Top Header */}
      <header className="flex justify-between items-center bg-card p-4 rounded-xl border shadow-sm">
        <h1 className="text-xl font-bold tracking-tight uppercase">Customer Management</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 overflow-hidden">
        
        {/* LEFT: Customer List (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="bg-card p-4 rounded-xl border shadow-sm space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search Customers..." className="pl-8" />
              </div>
              <Button className="bg-emerald-900 hover:bg-emerald-800">
                <UserPlus size={18} /> <span className="ml-2 hidden sm:inline">Add New</span>
              </Button>
            </div>

            <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
              {CUSTOMERS.map((c) => (
                <div 
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer flex justify-between items-start ${
                    selectedId === c.id ? "bg-accent border-primary" : "bg-background hover:border-muted-foreground/50"
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-sm">{c.name}</h3>
                    <p className="text-xs text-muted-foreground">{c.email}</p>
                    <p className="text-xs text-muted-foreground">{c.phone}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-950 text-emerald-400 px-2 py-1 rounded-md text-[10px] font-bold">
                    <Star size={10} fill="currentColor"/> {c.pts} pts
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Customer Detail (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Profile Summary Card */}
          <div className="bg-card p-6 rounded-xl border shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold">{activeUser.name}</h2>
                <p className="text-muted-foreground">{activeUser.email}</p>
                <p className="text-muted-foreground">{activeUser.phone}</p>
              </div>
              <Button variant="outline" className="text-emerald-500 border-emerald-500 hover:bg-emerald-50">
                + Add Points
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard label="Loyalty Points" value={activeUser.pts} icon={<Star className="text-yellow-500" size={18}/>} />
              <StatCard label="Total Orders" value={activeUser.orders} icon={<ShoppingBag className="text-blue-500" size={18}/>} />
              <StatCard label="Total Spent" value={`$${activeUser.spent}`} icon={<CreditCard className="text-emerald-500" size={18}/>} />
            </div>
          </div>

          {/* Purchase History */}
          <div className="bg-card p-6 rounded-xl border shadow-sm space-y-4">
            <h3 className="font-bold text-lg border-b pb-2">Purchase History</h3>
            
            {/* Single Order Example */}
            <div className="border rounded-xl p-4 bg-background space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="font-bold text-sm">Order #1</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={12}/> 2023-10-01 10:00 AM
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">$50.00</p>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <CheckCircle2 size={10}/> Completed
                  </span>
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground border-t pt-3">
                <p>Payment: Cash</p>
                <div className="mt-2 flex justify-between text-foreground font-medium">
                  <span>Men Slim Fit Checkered Shirt (Pack of 2)</span>
                  <span>2 × $25.00</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Helper component for the metrics
function StatCard({ label, value, icon }: { label: string; value: string | number; icon: React.ReactNode }) {
  return (
    <div className="p-4 rounded-xl border bg-background flex flex-col gap-2">
      <p className="text-sm font-semibold text-muted-foreground">{label}</p>
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-2xl font-bold tracking-tight">{value}</span>
      </div>
    </div>
  );
}