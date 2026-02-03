"use client";

import { useMemo } from "react";
import {
  ShoppingCart,
  History,
  RotateCcw,
  Users,
  FileBarChart,
  LogOut,
  X,
  MapPin,
  ShieldCheck,
  GitBranchPlusIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAside } from "@/context/AsideContext";

export default function Sidebar() {
  const { isOpen, closeAside, activePage, navigateTo } = useAside();
  
  // This would ideally come from your auth state
  const userRole = 'Admin'; 

  // useMemo ensures the navigation list is stable and doesn't duplicate
  const navItems = useMemo(() => {
    const baseItems = [
      { label: "POS Terminal", icon: <ShoppingCart size={18} />, path: "/pos" },
      { label: "Order History", icon: <History size={18} />, path: "/history" },
      { label: "Returns/Refunds", icon: <RotateCcw size={18} />, path: "/returns" },
      { label: "Customers", icon: <Users size={18} />, path: "/customers" },
      { label: "Shift Summary", icon: <FileBarChart size={18} />, path: "/shift" },
    ];

    // If Admin, add management routes
    if (userRole === 'Admin') {
      baseItems.push(
        { label: "Branches", icon: <GitBranchPlusIcon size={18} />, path: "/admin/branches" },
        { label: "Employees", icon: <ShieldCheck size={18} />, path: "/admin/employees" },
        { label: "Categories", icon: <MapPin size={18} />, path: "/admin/categories" }
      );
    }

    return baseItems;
  }, [userRole]);

  return (
    <>
      {/* Backdrop with modern blur */}
      <div
        className={`fixed inset-0 bg-background/50 z-40 backdrop-blur-md transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeAside}
      />

      {/* Aside Menu */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-card border-r border-border shadow-2xl 
          transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-10 px-2">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
                <ShoppingCart size={18} fill="currentColor" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                POS <span className="text-emerald-600">System</span>
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeAside}
              className="hover:bg-muted rounded-full"
            >
              <X size={18} />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2 overflow-y-auto no-scrollbar">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4 ml-2">
              Main Menu
            </p>
            {navItems.map((item) => {
              const isActive = activePage === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    navigateTo(item.path);
                    closeAside(); // Close on mobile after click
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all group ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className={`${isActive ? "text-white" : "text-emerald-600 group-hover:scale-110 transition-transform"}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Branch Info & Footer Actions */}
          <div className="mt-auto pt-6 border-t border-border space-y-4">
            <div className="bg-muted/40 p-4 rounded-2xl border border-border group hover:border-emerald-500/30 transition-colors">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-1">
                <MapPin size={12} /> Branch Info
              </h3>
              <p className="text-sm font-bold leading-tight">
                Surat East Branch
              </p>
              <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                Ambavadi Choke, near Ashoka Complex
              </p>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-red-500 hover:bg-red-500/10 hover:text-red-600 font-bold h-12 rounded-2xl transition-all active:scale-95"
              onClick={() => navigateTo("/auth/signin")}
            >
              <LogOut size={18} />
              End Shift & Logout
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}