"use client";

import { useState } from "react";
import { 
  Building2, 
  Plus, 
  Search, 
  MapPin, 
  User, 
  Phone, 
  Edit2, 
  Trash2, 
  Store,
  CheckCircle2,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter 
} from "@/components/ui/dialog";

export default function Branch() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBranch, setEditingBranch] = useState<any>(null);

  // Form State
  const [formData, setFormData] = useState({
    branchName: "",
    address: "",
    managerName: "",
    contactNumber: "",
    status: "ACTIVE",
    storeId: "6971ec6722a16cb55fd47f9d" // Parent Store ID
  });

  const handleOpenModal = (branch: any = null) => {
    if (branch) {
      setEditingBranch(branch);
      setFormData(branch);
    } else {
      setEditingBranch(null);
      setFormData({
        branchName: "",
        address: "",
        managerName: "",
        contactNumber: "",
        status: "ACTIVE",
        storeId: "6971ec6722a16cb55fd47f9d"
      });
    }
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Branch Management</h1>
          <p className="text-muted-foreground text-sm">Manage physical store locations and branch supervisors.</p>
        </div>
        <Button 
          onClick={() => handleOpenModal()}
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-11 px-6 shadow-lg shadow-emerald-600/20"
        >
          <Plus size={18} className="mr-2" /> Register Branch
        </Button>
      </div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card p-5 rounded-2xl border border-border flex items-center gap-4">
          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><Building2 size={24}/></div>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Total Branches</p>
            <p className="text-2xl font-black">08</p>
          </div>
        </div>
        <div className="bg-card p-5 rounded-2xl border border-border flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><CheckCircle2 size={24}/></div>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Active Now</p>
            <p className="text-2xl font-black">07</p>
          </div>
        </div>
        <div className="bg-card p-5 rounded-2xl border border-border flex items-center gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-xl"><Clock size={24}/></div>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Store ID</p>
            <p className="text-sm font-mono font-bold">FD47F9D</p>
          </div>
        </div>
      </div>

      {/* Search & Table Area */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="p-4 border-b bg-muted/10">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input 
              placeholder="Search branches..." 
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
                <th className="px-6 py-4 font-bold">Branch Details</th>
                <th className="px-6 py-4 font-bold">Manager</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* Sample Branch Row */}
              <tr className="hover:bg-muted/20 transition-all group">
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-foreground">Surat East Branch</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin size={12} /> Ambavadi Choke, Surat
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 font-medium">
                      <User size={14} className="text-emerald-600" /> Dhanujaya Perera
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                      <Phone size={12} /> +94 771 234 567
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-none px-3">
                    Active
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" size="icon" className="h-8 w-8 text-blue-600 rounded-lg"
                      onClick={() => handleOpenModal({ branchName: "Surat East Branch", address: "Ambavadi Choke", managerName: "Dhanujaya Perera", contactNumber: "+94771234567", status: "ACTIVE" })}
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
                <Store size={20} />
              </div>
              {editingBranch ? "Edit Branch Info" : "Register New Branch"}
            </DialogTitle>
          </DialogHeader>

          <form className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Branch Name</label>
                <Input 
                  value={formData.branchName} 
                  onChange={(e) => setFormData({...formData, branchName: e.target.value})}
                  className="h-12 bg-background/50 border-border/60 rounded-xl focus:ring-emerald-500" placeholder="e.g. Colombo Central" 
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Physical Address</label>
                <Input 
                  value={formData.address} 
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="h-12 bg-background/50 border-border/60 rounded-xl" placeholder="Street, City, Postal Code" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Manager Name</label>
                <Input 
                  value={formData.managerName} 
                  onChange={(e) => setFormData({...formData, managerName: e.target.value})}
                  className="h-12 bg-background/50 border-border/60 rounded-xl" placeholder="Assigned Manager" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Contact Number</label>
                <Input 
                  value={formData.contactNumber} 
                  onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                  className="h-12 bg-background/50 border-border/60 rounded-xl" placeholder="+94..." 
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Operational Status</label>
                <select 
                  value={formData.status} 
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="flex h-12 w-full rounded-xl border border-border/60 bg-background/50 px-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="ACTIVE">Active (Operating)</option>
                  <option value="INACTIVE">Inactive (Closed)</option>
                  <option value="MAINTENANCE">Under Maintenance</option>
                </select>
              </div>
            </div>

            <DialogFooter className="pt-4 gap-3">
              <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)} className="rounded-xl h-12 flex-1 font-bold">
                Cancel
              </Button>
              <Button type="button" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 flex-[2] font-bold shadow-lg shadow-emerald-600/20">
                {editingBranch ? "Save Changes" : "Create Branch"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}