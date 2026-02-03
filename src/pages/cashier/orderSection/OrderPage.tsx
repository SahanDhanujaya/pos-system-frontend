"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Plus, Minus, Trash2, ShoppingCart, UserPlus, Tag } from "lucide-react";

// Mock Data
const PRODUCTS = [
  { id: 1, name: "Men Slim Fit Checkered Shirt", price: 399, category: "shirt", code: "SHRT-S-COTTON-BLACK" },
  { id: 2, name: "Men Geometric Print Polo", price: 599, category: "t-shirt", code: "SHRT-S-COTTON-BLUE" },
];

export default function OrderPage() {
  const [cart, setCart] = useState([
    { ...PRODUCTS[0], quantity: 2 },
    { ...PRODUCTS[1], quantity: 1 },
  ]);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <section className="min-h-screen bg-background p-4 flex flex-col gap-4">


      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1">
        
        {/* LEFT: Product Catalog (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-card p-4 rounded-xl border shadow-sm">
            <Input placeholder="Search products or scan barcode (F1)..." className="w-full" />
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="group border rounded-xl p-3 bg-background hover:border-primary transition-colors cursor-pointer">
                  <div className="aspect-square bg-muted rounded-lg mb-2 mb-2 flex items-center justify-center text-muted-foreground">Image</div>
                  <h3 className="text-sm font-semibold line-clamp-2">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-primary font-bold">₹{product.price}</span>
                    <span className="text-[10px] bg-muted px-2 py-1 rounded-md uppercase">{product.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Cart & Summary (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Cart Items */}
          <div className="bg-card rounded-xl border shadow-sm flex flex-col h-[500px]">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-bold flex items-center gap-2"><ShoppingCart size={18}/> Cart ({cart.length} items)</h2>
              <Button variant="ghost" size="sm" className="text-destructive font-bold">Clear</Button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg bg-background">
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-none">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.code}</p>
                    <p className="text-sm font-bold mt-1 text-primary">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2 border rounded-md p-1">
                    <Button variant="ghost" size="icon" className="h-6 w-6"><Minus size={12}/></Button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6"><Plus size={12}/></Button>
                  </div>
                  <Button variant="ghost" size="icon" className="text-destructive"><Trash2 size={16}/></Button>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="p-4 border-t bg-muted/20 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (18% GST):</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                <span>Total:</span>
                <span className="text-primary">₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Action Panel */}
          <div className="bg-card p-4 rounded-xl border shadow-sm space-y-4">
             <Field>
                <FieldLabel className="flex items-center gap-2"><UserPlus size={14}/> Customer</FieldLabel>
                <Button variant="outline" className="w-full justify-start text-muted-foreground font-normal">Select Customer</Button>
             </Field>

             <Field>
                <FieldLabel className="flex items-center gap-2"><Tag size={14}/> Discount</FieldLabel>
                <div className="flex gap-2">
                    <Input placeholder="Amount" className="flex-1" />
                    <Button variant="secondary" className="px-3">%</Button>
                    <Button variant="secondary" className="px-3">₹</Button>
                </div>
             </Field>

             <div className="grid grid-cols-2 gap-2 pt-2">
                <Button className="w-full h-12 text-lg bg-green-600 hover:bg-green-700 text-white col-span-2">Process Payment</Button>
                <Button variant="outline" className="w-full">Hold Order</Button>
                <Button variant="outline" className="w-full text-destructive">Cancel</Button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}