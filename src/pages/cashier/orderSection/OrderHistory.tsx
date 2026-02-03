"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, RefreshCw, Eye, Printer, 
  RotateCcw, Calendar, Download, X 
} from "lucide-react";

function OrderDetailsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="p-4 border-b flex justify-between items-center bg-muted/20">
          <h2 className="text-lg font-bold">Order Details - 11</h2>
          <Button variant="ghost" size="icon" onClick={onClose}><X size={20}/></Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3 p-4 border rounded-xl bg-background/50">
              <h3 className="text-xs font-bold uppercase text-muted-foreground">Order Information</h3>
              <div className="space-y-1 text-sm">
                <p className="flex justify-between"><span>Date:</span> <span className="font-medium">Jul 8, 2025, 12:37 PM</span></p>
                <p className="flex justify-between"><span>Status:</span> <span className="text-emerald-500 font-bold">Completed</span></p>
                <p className="flex justify-between"><span>Payment Method:</span> <span className="font-medium">UPI</span></p>
                <p className="flex justify-between border-t pt-1 mt-1 font-bold"><span>Total Amount:</span> <span>₹599.00</span></p>
              </div>
            </div>

            <div className="space-y-3 p-4 border rounded-xl bg-background/50">
              <h3 className="text-xs font-bold uppercase text-muted-foreground">Customer Information</h3>
              <div className="space-y-1 text-sm">
                <p className="flex justify-between"><span>Name:</span> <span className="font-medium">krish ved</span></p>
                <p className="flex justify-between"><span>Phone:</span> <span className="font-medium">9009123890</span></p>
              </div>
            </div>
          </div>

          {/* Items List */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase text-muted-foreground">Order Items</h3>
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b">
                  <tr className="text-[10px] text-muted-foreground uppercase">
                    <th className="px-4 py-2 text-left">Image</th>
                    <th className="px-4 py-2 text-left">Item</th>
                    <th className="px-4 py-2 text-center">Qty</th>
                    <th className="px-4 py-2 text-right">Price</th>
                    <th className="px-4 py-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3"><div className="w-10 h-10 bg-muted rounded border" /></td>
                    <td className="px-4 py-3">
                       <p className="font-medium">Men Geometric Print...</p>
                       <p className="text-[10px] text-muted-foreground">SKU: SHRT-S-COTTON-BLU-2025</p>
                    </td>
                    <td className="px-4 py-3 text-center">1</td>
                    <td className="px-4 py-3 text-right">₹599.00</td>
                    <td className="px-4 py-3 text-right font-bold">₹599.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex gap-3 justify-end border-t pt-6">
            <Button variant="outline" className="gap-2"><Download size={16}/> Download PDF</Button>
            <Button variant="outline" className="gap-2"><Printer size={16}/> Print Invoice</Button>
            <Button className="gap-2 bg-emerald-900 hover:bg-emerald-800 text-white">
              <RotateCcw size={16}/> Initiate Return
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mock Data from your screenshots
const ORDERS = [
  { id: "11", date: "Jul 8, 2025, 12:37 PM", customer: "krish ved", amount: 599.00, method: "UPI", status: "Completed" },
  { id: "12", date: "Jul 8, 2025, 05:48 PM", customer: "krish ved", amount: 2396.00, method: "CASH", status: "Completed" },
  { id: "16", date: "Aug 8, 2025, 01:25 PM", customer: "Devyani", amount: 599.00, method: "CARD", status: "Completed" },
];

export default function OrderHistory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("Today");

  return (
    <section className="min-h-screen bg-background p-6 flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Order History</h1>
        <Button variant="outline" size="sm" className="gap-2">
          <RefreshCw size={14} /> Refresh
        </Button>
      </header>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by order ID or customer..." className="pl-10 bg-card" />
        </div>
        
        <div className="flex bg-muted/30 p-1 rounded-lg border gap-1">
          {["Today", "This Week", "This Month"].map((t) => (
            <Button 
              key={t}
              variant={filter === t ? "default" : "ghost"} 
              size="sm"
              onClick={() => setFilter(t)}
              className={filter === t ? "bg-emerald-900 hover:bg-emerald-800" : ""}
            >
              {t}
            </Button>
          ))}
          <Button variant="outline" size="sm" className="gap-2"><Calendar size={14}/> Custom</Button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b text-muted-foreground">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Order ID</th>
              <th className="px-6 py-4 text-left font-semibold">Date/Time</th>
              <th className="px-6 py-4 text-left font-semibold">Customer</th>
              <th className="px-6 py-4 text-left font-semibold">Amount</th>
              <th className="px-6 py-4 text-left font-semibold">Payment Mode</th>
              <th className="px-6 py-4 text-left font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {ORDERS.map((order) => (
              <tr key={order.id} className="hover:bg-muted/5 transition-colors">
                <td className="px-6 py-4 font-bold">{order.id}</td>
                <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                <td className="px-6 py-4 font-medium">{order.customer}</td>
                <td className="px-6 py-4 font-bold">₹{order.amount.toFixed(2)}</td>
                <td className="px-6 py-4 text-xs font-semibold tracking-wider">{order.method}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(true)} className="h-8 w-8 text-muted-foreground hover:text-primary"><Eye size={16}/></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary"><Printer size={16}/></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary"><RotateCcw size={16}/></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Detail Modal Overlay */}
      {isModalOpen && <OrderDetailsModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}