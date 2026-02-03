"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { setReturnOrder } from "@/state/returnOrder/returnOrderSlice";
import { type AppDispatch } from '../../../state/store';
import { useAside } from "@/context/AsideContext";

// Data sourced directly from your provided screenshot
const RETURNABLE_ORDERS = [
  { id: "16", date: "Aug 8, 2025, 01:25 PM", customer: "Devyani", amount: 599.00, method: "CARD" },
  { id: "15", date: "Jul 14, 2025, 04:08 PM", customer: "krish ved", amount: 1996.00, method: "UPI" },
  { id: "14", date: "Jul 12, 2025, 09:50 PM", customer: "krish ved", amount: 2196.00, method: "UPI" },
  { id: "13", date: "Jul 12, 2025, 09:47 PM", customer: "Chitrodo Sharma", amount: 998.00, method: "CASH" },
  { id: "12", date: "Jul 8, 2025, 05:48 PM", customer: "krish ved", amount: 2396.00, method: "CASH" },
  { id: "11", date: "Jul 8, 2025, 12:37 PM", customer: "krish ved", amount: 599.00, method: "UPI" },
  { id: "10", date: "Jul 8, 2025, 08:00 AM", customer: "Walk-in", amount: 1450.00, method: "CARD" },
  { id: "9", date: "Jul 7, 2025, 01:09 PM", customer: "krish ved", amount: 3592.00, method: "UPI" },
];

export default function ReturnRefundPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { navigateTo } = useAside();
  const dispatch = useDispatch<AppDispatch>();

  const filteredOrders = RETURNABLE_ORDERS.filter(order => 
    order.id.includes(searchQuery) || 
    order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (order: typeof RETURNABLE_ORDERS[0]) => {
    dispatch(setReturnOrder(order));
    navigateTo("/refund");
  };

  return (
    <div className="flex flex-col min-h-screen font-san border-slate-50">
      {/* Header - No background color */}
      <header className="px-6 py-4 ">
        <h1 className="text-xl font-bol tracking-tight">Return / Refund</h1>
      </header>

      {/* Main Content Area */}
      <div className="p-6 bg-card rounded-xl border shadow-sm">
        {/* Search Bar - Clean style */}
        <div className="relative max-w-sm mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
          <Input 
            placeholder="Search by order ID or customer..." 
            className="pl-10 h-10 border-slate-200 bg-white rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Table - No background shading */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-slate-200">
            <thead>
              <tr className="border-b border-slate-500 text-[13px] font-medium">
                <th className="px-4 py-3 font-semibold">Order ID</th>
                <th className="px-4 py-3 font-semibold">Date/Time</th>
                <th className="px-4 py-3 font-semibold">Customer</th>
                <th className="px-4 py-3 font-semibold">Amount</th>
                <th className="px-4 py-3 font-semibold">Payment Mode</th>
                <th className="px-4 py-3 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-slate-500 last:border-0 hover:bg-opacity-900">
                  <td className="px-4 py-5 font-bold">{order.id}</td>
                  <td className="px-4 py-5 ">{order.date}</td>
                  <td className="px-4 py-5 text-slate-600">{order.customer}</td>
                  <td className="px-4 py-5 font-semibold text-red-800">₹{order.amount.toFixed(2)}</td>
                  <td className="px-4 py-5 text-slate-500">{order.method}</td>
                  <td className="px-4 py-5 text-right">
                    <Button 
                      onClick={() => handleSelect(order)}
                      className="bg-[#062d27] hover:bg-emerald-900 text-white text-[11px] font-bold uppercase tracking-wide px-4 h-9 rounded-sm"
                    >
                      Select for Return
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredOrders.length === 0 && (
            <div className="py-20 text-center text-slate-400">
              No orders found matching "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}