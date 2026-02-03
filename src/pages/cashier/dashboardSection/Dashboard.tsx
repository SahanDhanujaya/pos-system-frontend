"use client";

import Navbar from "@/components/navbar/Navbar";
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight 
} from "lucide-react";

// Mock data for the cards
const STATS = [
  { label: "Today's Sales", value: "₹42,500", change: "+12.5%", trendingUp: true, icon: <ShoppingBag className="text-blue-600" /> },
  { label: "Total Orders", value: "128", change: "+5.2%", trendingUp: true, icon: <CreditCard className="text-emerald-600" /> },
  { label: "New Customers", value: "24", change: "-2.1%", trendingUp: false, icon: <Users className="text-purple-600" /> },
  { label: "Net Profit", value: "₹12,200", change: "+8.4%", trendingUp: true, icon: <TrendingUp className="text-orange-600" /> },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
            <p className="text-slate-500">Welcome back! Here’s what’s happening with your store today.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-500">Auto-refreshing in 30s</span>
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                  {stat.icon}
                </div>
                <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
                  stat.trendingUp ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                }`}>
                  {stat.trendingUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions Table */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Recent Transactions</h3>
              <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[1024, 1023, 1022, 1021].map((id) => (
                    <tr key={id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">#ORD-{id}</td>
                      <td className="px-6 py-4 text-slate-600 text-sm">Customer Name</td>
                      <td className="px-6 py-4 font-semibold">₹1,299.00</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">Success</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions / Terminal Status */}
          <div className="bg-emerald-900 rounded-2xl p-6 text-white shadow-xl shadow-emerald-900/20">
            <h3 className="font-bold text-lg mb-4">Terminal Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
                <span className="text-sm text-emerald-100">Shift Started</span>
                <span className="text-sm font-bold">08:00 AM</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
                <span className="text-sm text-emerald-100">Cash in Drawer</span>
                <span className="text-sm font-bold">₹5,000.00</span>
              </div>
              <button className="w-full py-4 mt-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-colors">
                Go to POS Terminal
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;