"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ArrowLeft, RotateCcw, X, Printer, Download } from "lucide-react";
import { useAside } from "@/context/AsideContext";

export default function ProcessReturnPage() {
  const {navigateTo} = useAside()
  const [showReceipt, setShowReceipt] = useState(false);
  const [returnItems, setReturnItems] = useState([
    {
      id: 1,
      name: "Men Slim Fit Checker...20",
      ordered: 1,
      returnQty: 0,
      price: 399,
    },
    {
      id: 2,
      name: "Men Geometric Print...21",
      ordered: 3,
      returnQty: 0,
      price: 599,
    },
  ]);


  const refundAmount = returnItems.reduce(
    (acc, item) => acc + item.returnQty * item.price,
    0,
  );

  return (
    <section className="min-h-screen bg-background p-6 flex flex-col gap-6 relative">
      <header>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 rounded-lg"
            onClick={() => navigateTo("/returns")}
          >
            <ArrowLeft size={16} /> Back to Order Search
          </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN: Order Reference */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-2xl border shadow-sm relative overflow-hidden">
            <span className="absolute top-4 right-4 text-[10px] font-bold bg-muted px-2 py-1 rounded">
              UPI
            </span>
            <h2 className="text-xl font-bold">Order 14</h2>
            <p className="text-sm text-muted-foreground">
              Jul 12, 2025, 09:50 PM
            </p>

            <div className="mt-6 space-y-1">
              <p className="text-xs font-bold text-muted-foreground uppercase">
                Customer
              </p>
              <p className="font-medium">krish ved</p>
              <p className="text-sm text-muted-foreground">9009123890</p>
            </div>

            <div className="mt-6 pt-6 border-t flex justify-between items-end">
              <div className="text-sm text-muted-foreground">
                <p>Order Summary</p>
                <p>
                  Total Items:{" "}
                  <span className="text-foreground font-bold">4</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground uppercase">
                  Order Total
                </p>
                <p className="text-2xl font-bold">₹2196.00</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-muted-foreground uppercase px-2">
              Original Order Items
            </h3>
            <div className="bg-card rounded-2xl border shadow-sm overflow-hidden text-sm">
              <table className="w-full">
                <thead className="bg-muted/30 border-b">
                  <tr className="text-left text-muted-foreground">
                    <th className="p-4 font-semibold">Item</th>
                    <th className="p-4 font-semibold text-center">Qty</th>
                    <th className="p-4 font-semibold text-right">Price</th>
                    <th className="p-4 font-semibold text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {returnItems.map((item) => (
                    <tr key={item.id}>
                      <td className="p-4 font-medium">{item.name}</td>
                      <td className="p-4 text-center">{item.ordered}</td>
                      <td className="p-4 text-right">₹{item.price}</td>
                      <td className="p-4 text-right font-bold">
                        ₹{item.price * item.ordered}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Return Actions */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-2xl border shadow-sm space-y-6">
            <h3 className="font-bold text-lg border-b pb-3">Return Items</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-12 text-[11px] font-bold text-muted-foreground uppercase px-2">
                <div className="col-span-6">Item</div>
                <div className="col-span-2 text-center">Ordered</div>
                <div className="col-span-2 text-center">Return Qty</div>
                <div className="col-span-2 text-right">Refund</div>
              </div>

              {returnItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 items-center gap-2 p-2 rounded-lg bg-muted/10"
                >
                  <div className="col-span-6 text-xs font-medium truncate">
                    {item.name}
                  </div>
                  <div className="col-span-2 text-center text-sm font-bold">
                    {item.ordered}
                  </div>
                  <div className="col-span-2">
                    <Input
                      type="number"
                      className="h-8 text-center p-1"
                      max={item.ordered}
                      min={0}
                      value={item.returnQty}
                      onChange={(e) => {
                        const newItems = [...returnItems];
                        newItems[idx].returnQty = Math.min(
                          item.ordered,
                          parseInt(e.target.value) || 0,
                        );
                        setReturnItems(newItems);
                      }}
                    />
                  </div>
                  <div className="col-span-2 text-right text-xs font-bold">
                    ₹{(item.returnQty * item.price).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t">
              <Field>
                <FieldLabel>Return Reason</FieldLabel>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none">
                  <option>Defective Product</option>
                  <option>Wrong Size</option>
                  <option>Customer Changed Mind</option>
                </select>
              </Field>

              <div className="pt-4 space-y-4">
                <div className="flex justify-between items-center px-2">
                  <span className="font-bold text-muted-foreground uppercase text-xs">
                    Total Refund Amount:
                  </span>
                  <span className="text-2xl font-bold tracking-tight">
                    ₹{refundAmount.toFixed(2)}
                  </span>
                </div>
                <Button
                  onClick={() => setShowReceipt(true)}
                  disabled={refundAmount === 0}
                  className="w-full h-12 text-lg bg-emerald-900 hover:bg-emerald-800 gap-2"
                >
                  <RotateCcw size={20} /> Process Refund
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RECEIPT MODAL */}
      {showReceipt && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
              <h3 className="font-bold">Return Receipt</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowReceipt(false)}
                className="h-8 w-8"
              >
                <X size={18} />
              </Button>
            </div>

            <div className="p-8 space-y-6 text-center">
              <div>
                <h2 className="text-xl font-bold uppercase">
                  Surat D-MART Branch
                </h2>
                <p className="text-xs text-gray-500">123 main Street, city</p>
                <p className="text-xs text-gray-500">Tel: 123-456-7890</p>
              </div>

              <div className="border-y border-dashed py-4 text-left space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-bold">Original Order:</span>
                  <span>14</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-bold">Date:</span>
                  <span>{new Date().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-bold">Customer:</span>
                  <span>krish ved</span>
                </div>
              </div>

              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Item</th>
                    <th className="py-2 text-center">Qty</th>
                    <th className="py-2 text-right">Price</th>
                    <th className="py-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {returnItems
                    .filter((i) => i.returnQty > 0)
                    .map((item) => (
                      <tr key={item.id} className="border-b border-gray-100">
                        <td className="py-3 pr-2 font-medium">{item.name}</td>
                        <td className="py-3 text-center">{item.returnQty}</td>
                        <td className="py-3 text-right">₹{item.price}</td>
                        <td className="py-3 text-right font-bold">
                          ₹{item.price * item.returnQty}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <div className="flex justify-between items-center pt-2">
                <span className="text-sm font-bold uppercase">
                  Total Refunded:
                </span>
                <span className="text-2xl font-black">
                  ₹{refundAmount.toFixed(2)}
                </span>
              </div>

              <div className="flex gap-2 pt-4 no-print">
                <Button
                  variant="outline"
                  className="flex-1 gap-2 border-gray-300"
                  onClick={() => window.print()}
                >
                  <Printer size={16} /> Print
                </Button>
                <Button className="flex-1 gap-2 bg-emerald-900">
                  <Download size={16} /> Save PDF
                </Button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 text-center text-[10px] text-gray-400 uppercase tracking-widest">
              Thank you for visiting D-MART
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
