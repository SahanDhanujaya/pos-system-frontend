"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Printer, 
  LogOut, 
  User, 
  TrendingUp, 
  CreditCard, 
  History, 
  RotateCcw
} from "lucide-react";

export default function ShiftSummary() {
  // Mock data based on provided images
  const shiftData = {
    cashier: "vinod",
    start: "Aug 8, 2025, 09:34 AM",
    end: "ongoing",
    duration: "8 hours",
    sales: {
      totalOrders: 1,
      totalSales: 599.00,
      totalRefunds: 599.00,
      netSales: 0.00
    },
    payment: {
      type: "CARD",
      transactions: 1,
      amount: 599.00,
      percentage: "100.0%"
    },
    topSelling: "Men Geometric Print Polo Neck Pure Cotton Black T-Shirt"
  };

  return (
    <section className="min-h-screen bg-background p-6 flex flex-col gap-6">
      {/* Header Actions */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Shift Summary</h1>
        <div className="flex gap-3">
          <Button variant="outline" className="flex gap-2">
            <Printer size={16} /> Print Summary
          </Button>
          <Button variant="destructive" className="flex gap-2 bg-red-600 hover:bg-red-700">
            <LogOut size={16} /> End Shift & Logout
          </Button>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. Shift Information */}
        <SummaryCard title="Shift Information" icon={<User size={18} className="text-muted-foreground"/>}>
          <div className="space-y-3">
            <DetailRow label="Cashier:" value={shiftData.cashier} isBold />
            <DetailRow label="Shift Start:" value={shiftData.start} />
            <DetailRow label="Shift End:" value={shiftData.end} isStatus badge="ongoing" />
            <DetailRow label="Duration:" value={shiftData.duration} />
          </div>
        </SummaryCard>

        {/* 2. Sales Summary */}
        <SummaryCard title="Sales Summary" icon={<TrendingUp size={18} className="text-muted-foreground"/>}>
          <div className="space-y-3">
            <DetailRow label="Total Orders:" value={shiftData.sales.totalOrders} />
            <DetailRow label="Total Sales:" value={`₹${shiftData.sales.totalSales.toFixed(2)}`} />
            <DetailRow label="Total Refunds:" value={`-₹${shiftData.sales.totalRefunds.toFixed(2)}`} isRed />
            <div className="border-t pt-2 mt-2">
              <DetailRow label="Net Sales:" value={`₹${shiftData.sales.netSales.toFixed(2)}`} isBold />
            </div>
          </div>
        </SummaryCard>

        {/* 3. Payment Summary */}
        <SummaryCard title="Payment Summary" icon={<CreditCard size={18} className="text-muted-foreground"/>}>
          <div className="flex justify-between items-center p-3 border rounded-lg bg-muted/10">
            <div className="flex gap-3 items-center">
               <div className="bg-background p-2 rounded border shadow-sm"><CreditCard size={16}/></div>
               <div>
                  <p className="text-sm font-bold">{shiftData.payment.type}</p>
                  <p className="text-xs text-muted-foreground">{shiftData.payment.transactions} transactions</p>
               </div>
            </div>
            <div className="text-right">
               <p className="font-bold">₹{shiftData.payment.amount.toFixed(2)}</p>
               <p className="text-xs text-muted-foreground">{shiftData.payment.percentage}</p>
            </div>
          </div>
        </SummaryCard>

        {/* 4. Top Selling Items */}
        <SummaryCard title="Top Selling Items" icon={<StarIcon />}>
           <div className="flex gap-3 items-start p-3 border rounded-lg bg-muted/10">
              <span className="bg-muted px-2 py-0.5 rounded text-[10px] font-bold">1</span>
              <div className="flex-1">
                 <p className="text-sm font-medium leading-tight">{shiftData.topSelling}</p>
                 <p className="text-xs text-muted-foreground mt-1">1 units sold</p>
              </div>
              <p className="font-bold">₹599.00</p>
           </div>
        </SummaryCard>

        {/* 5. Recent Orders Table */}
        <SummaryCard title="Recent Orders" icon={<History size={18} className="text-muted-foreground"/>} className="md:col-span-1">
          <div className="w-full overflow-hidden rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b text-muted-foreground font-medium">
                <tr>
                  <th className="px-4 py-2 text-left">Order ID</th>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left">Payment</th>
                  <th className="px-4 py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b last:border-0 hover:bg-muted/5">
                  <td className="px-4 py-3">16</td>
                  <td className="px-4 py-3">01:25 PM</td>
                  <td className="px-4 py-3">CARD</td>
                  <td className="px-4 py-3 text-right font-medium">₹599.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SummaryCard>

        {/* 6. Refunds Processed Table */}
        <SummaryCard title="Refunds Processed" icon={<RotateCcw size={18} className="text-muted-foreground"/>} className="md:col-span-1">
          <div className="w-full overflow-hidden rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b text-muted-foreground font-medium">
                <tr>
                  <th className="px-4 py-2 text-left">Refund ID</th>
                  <th className="px-4 py-2 text-left">Order ID</th>
                  <th className="px-4 py-2 text-left">Reason</th>
                  <th className="px-4 py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b last:border-0 hover:bg-muted/5">
                  <td className="px-4 py-3 text-muted-foreground font-mono">RFD-4</td>
                  <td className="px-4 py-3">ORD-12</td>
                  <td className="px-4 py-3 italic">Customer changed mind</td>
                  <td className="px-4 py-3 text-right font-medium text-red-600">₹599.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SummaryCard>

      </div>
    </section>
  );
}

// Helper: Card Container
function SummaryCard({ title, icon, children, className = "" }: { title: string, icon: React.ReactNode, children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-card p-6 rounded-2xl border shadow-sm space-y-4 ${className}`}>
      <div className="flex items-center gap-2 border-b pb-3">
        {icon}
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// Helper: Detail Data Row
function DetailRow({ label, value, isBold = false, isRed = false, isStatus = false, badge = "" }: any) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-muted-foreground font-medium">{label}</span>
      {isStatus ? (
        <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
          {badge}
        </span>
      ) : (
        <span className={`${isBold ? "font-bold text-base" : "font-medium"} ${isRed ? "text-red-500" : ""}`}>
          {value}
        </span>
      )}
    </div>
  );
}

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);