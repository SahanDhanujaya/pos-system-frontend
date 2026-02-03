"use client";

import React, { useState, useMemo } from "react";
import { 
  Users, UserPlus, Search, MoreHorizontal, Mail, Phone, 
  Shield, Building2, CalendarDays, Clock, Edit2, Trash2, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter 
} from "@/components/ui/dialog";

const ROLES = [
  { label: "Branch Manager", value: "ROLE_BRANCH_MANAGER" },
  { label: "Cashier", value: "ROLE_CASHIER" },
  { label: "Inventory Manager", value: "ROLE_INVENTORY_MANAGER" },
  { label: "Admin", value: "ROLE_ADMIN" },
];

export default function Employee() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<any>(null);

  // Form state mapped to your backend properties
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "ROLE_CASHIER",
    password: "",
    branchId: "697378b3da630d87f00560c4", 
    storeId: "6971ec6722a16cb55fd47f9d"
  });

  const handleOpenModal = (employee: any = null) => {
    if (employee) {
      setEditingEmployee(employee);
      setFormData({ ...employee, password: "" }); // Security: don't pre-fill password
    } else {
      setEditingEmployee(null);
      setFormData({
        fullName: "", email: "", phone: "", role: "ROLE_CASHIER",
        password: "", branchId: "697378b3da630d87f00560c4", storeId: "6971ec6722a16cb55fd47f9d"
      });
    }
    setIsModalOpen(true);
  };

  const formatRole = (role: string) => 
    role.replace("ROLE_", "").split("_").map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(" ");

  return (
    <div className="space-y-6 p-1">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Staff Management</h1>
          <p className="text-muted-foreground text-sm">Manage access control and employee assignments.</p>
        </div>
        <Button 
          onClick={() => handleOpenModal()}
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-11 px-6 shadow-lg shadow-emerald-600/20"
        >
          <UserPlus size={18} className="mr-2" /> Register Staff
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Total Staff", value: "24", icon: <Users className="text-blue-500" /> },
          { label: "Active Branch ID", value: "F00560C4", icon: <Building2 className="text-emerald-500" /> },
          { label: "Admin Roles", value: "3", icon: <Shield className="text-purple-500" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-card p-6 rounded-2xl border border-border flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-muted rounded-xl">{stat.icon}</div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="p-4 border-b bg-muted/10 flex items-center justify-between">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input 
              placeholder="Search by name or email..." 
              className="pl-9 h-10 rounded-lg bg-background"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-muted/30 text-muted-foreground text-[11px] uppercase tracking-wider">
                <th className="px-6 py-4 font-bold">Staff Member</th>
                <th className="px-6 py-4 font-bold">Access Level</th>
                <th className="px-6 py-4 font-bold">Account Info</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* Sample Row */}
              <tr className="hover:bg-muted/20 transition-all group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                      DP
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">Dhanujaya Perera</span>
                      <span className="text-[11px] text-muted-foreground">+94771234567</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="outline" className="bg-emerald-50 border-emerald-200 text-emerald-700 px-3">
                    {formatRole("ROLE_BRANCH_MANAGER")}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="text-[11px] text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1.5"><Mail size={12}/> dhanujaya@example.com</div>
                    <div className="flex items-center gap-1.5 text-emerald-600"><Clock size={12}/> Last login: 23:05</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1">
                    <Button 
                      variant="ghost" size="icon" className="h-8 w-8 text-blue-600 rounded-lg"
                      onClick={() => handleOpenModal({ fullName: "Dhanujaya Perera", email: "dhanujaya@example.com", phone: "+94771234567", role: "ROLE_BRANCH_MANAGER" })}
                    >
                      <Edit2 size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 rounded-lg">
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* --- REGISTER / EDIT MODAL --- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-xl rounded-[2rem] p-8 border-none shadow-2xl bg-card/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black tracking-tight flex items-center gap-3">
              <div className="bg-emerald-600 p-2 rounded-xl text-white">
                <UserPlus size={20} />
              </div>
              {editingEmployee ? "Update Account" : "Register Staff"}
            </DialogTitle>
          </DialogHeader>

          <form className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                <Input 
                  value={formData.fullName} 
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="h-12 bg-background/50 rounded-xl" placeholder="John Doe" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <Input 
                  type="email" value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12 bg-background/50 rounded-xl" placeholder="name@pos.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                <Input 
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12 bg-background/50 rounded-xl" placeholder="+94..." 
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Access Role</label>
                <select 
                  value={formData.role} 
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="flex h-12 w-full rounded-xl border border-border/60 bg-background/50 px-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  {ROLES.map(role => <option key={role.value} value={role.value}>{role.label}</option>)}
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  {editingEmployee ? "New Password (Optional)" : "Password"}
                </label>
                <Input 
                  type="password" value={formData.password} 
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="h-12 bg-background/50 rounded-xl" placeholder="••••••••" 
                />
              </div>
            </div>

            <DialogFooter className="pt-4 gap-3">
              <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)} className="rounded-xl h-12 flex-1 font-bold">
                Cancel
              </Button>
              <Button type="button" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 flex-[2] font-bold shadow-lg shadow-emerald-600/20">
                {editingEmployee ? "Save Changes" : "Create Account"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}