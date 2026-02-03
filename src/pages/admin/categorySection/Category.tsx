"use client";

import React, { useState } from "react";
import { 
  LayoutGrid, 
  Plus, 
  Search, 
  Tag, 
  MoreHorizontal, 
  Edit2, 
  Trash2, 
  Package,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter 
} from "@/components/ui/dialog";

export default function Category() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);

  // Form State
  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
    status: "ACTIVE",
    storeId: "6971ec6722a16cb55fd47f9d" // Mapping to your store
  });

  const handleOpenModal = (category: any = null) => {
    if (category) {
      setEditingCategory(category);
      setFormData(category);
    } else {
      setEditingCategory(null);
      setFormData({
        categoryName: "",
        description: "",
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
          <h1 className="text-2xl font-bold tracking-tight">Product Categories</h1>
          <p className="text-muted-foreground text-sm">Organize your inventory for faster checkout and reporting.</p>
        </div>
        <Button 
          onClick={() => handleOpenModal()}
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-11 px-6 shadow-lg shadow-emerald-600/20"
        >
          <Plus size={18} className="mr-2" /> Add Category
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card p-5 rounded-2xl border border-border flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><LayoutGrid size={24}/></div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Total Categories</p>
            <p className="text-2xl font-black">14</p>
          </div>
        </div>
        <div className="bg-card p-5 rounded-2xl border border-border flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Package size={24}/></div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Linked Products</p>
            <p className="text-2xl font-black">124</p>
          </div>
        </div>
        <div className="bg-card p-5 rounded-2xl border border-border flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-xl"><AlertCircle size={24}/></div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Inactive</p>
            <p className="text-2xl font-black">02</p>
          </div>
        </div>
      </div>

      {/* Search & Table Area */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="p-4 border-b bg-muted/10">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input 
              placeholder="Search by category name..." 
              className="pl-9 h-10 rounded-lg bg-background border-border/60"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-muted/30 text-muted-foreground text-[11px] uppercase tracking-wider">
                <th className="px-6 py-4 font-bold">Category Details</th>
                <th className="px-6 py-4 font-bold">Description</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* Sample Category Row */}
              <tr className="hover:bg-muted/20 transition-all group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Tag size={18} />
                    </div>
                    <span className="font-bold text-foreground text-sm tracking-tight">Beverages</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-muted-foreground text-xs italic">
                  Soft drinks, juices, and bottled water
                </td>
                <td className="px-6 py-4">
                  <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-none px-3 font-bold text-[10px]">
                    ACTIVE
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1">
                    <Button 
                      variant="ghost" size="icon" className="h-8 w-8 text-blue-600 rounded-lg"
                      onClick={() => handleOpenModal({ categoryName: "Beverages", description: "Soft drinks, juices, and bottled water", status: "ACTIVE" })}
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

      {/* --- ADD / EDIT CATEGORY MODAL --- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md rounded-[2rem] p-8 border-none shadow-2xl bg-card/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black tracking-tight flex items-center gap-3">
              <div className="bg-emerald-600 p-2 rounded-xl text-white">
                <Tag size={20} />
              </div>
              {editingCategory ? "Update Category" : "New Category"}
            </DialogTitle>
          </DialogHeader>

          <form className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Category Name</label>
                <Input 
                  value={formData.categoryName} 
                  onChange={(e) => setFormData({...formData, categoryName: e.target.value})}
                  className="h-12 bg-background/50 border-border/60 rounded-xl" placeholder="e.g. Electronics" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Description (Optional)</label>
                <textarea 
                  value={formData.description} 
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="flex min-h-[100px] w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Provide a brief summary of this category..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Visibility Status</label>
                <select 
                  value={formData.status} 
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="flex h-12 w-full rounded-xl border border-border/60 bg-background/50 px-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 appearance-none"
                >
                  <option value="ACTIVE">Active (Visible in POS)</option>
                  <option value="INACTIVE">Inactive (Hidden)</option>
                </select>
              </div>
            </div>

            <DialogFooter className="pt-4 gap-3">
              <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)} className="rounded-xl h-12 flex-1 font-bold">
                Cancel
              </Button>
              <Button type="button" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 flex-[2] font-bold shadow-lg shadow-emerald-600/20">
                {editingCategory ? "Save Changes" : "Create Category"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}