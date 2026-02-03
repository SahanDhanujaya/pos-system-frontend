"use client";

import React from "react";
import { AsideProvider, useAside } from "../context/AsideContext";

// Components
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Header1 from "@/components/header/Header1";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Pages
import OrderPage from "@/pages/cashier/orderSection/OrderPage.js";
import CustomerManagement from "@/pages/cashier/customerSection/CustomerSection.js";
import ShiftSummary from "@/pages/cashier/shiftReportSection/index.js";
import OrderHistory from "@/pages/cashier/orderSection/OrderHistory.js";
import ReturnRefundPage from "@/pages/cashier/refundSection/Return.js";
import ProcessReturnPage from "@/pages/cashier/refundSection/Refund.js";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/Signup";
import About from "@/pages/web/aboutSection/About";
import Contact from "@/pages/web/contactSection/Contact";
import Dashboard from "@/pages/web/homeSection/Home";
import Pricing from "@/pages/web/pricingSection/Pricing";
import Employee from "@/pages/admin/employeeSection/Employee";
import Branch from "@/pages/admin/branchSection/Branch";
import Category from "@/pages/admin/categorySection/Category";

function LayoutContent() {
  const { activePage } = useAside();

  const isMarketingPage = ["/", "/about", "/pricing", "/contact"].includes(activePage);
  const isAuthPage = ["/auth/signin", "/auth/signup"].includes(activePage);
  
  // Define Admin routes
  const isAdminPage = activePage.startsWith("/admin/");

  // 1. Marketing Layout (Scrollable One-Page)
  if (isMarketingPage) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <section id="home"><Dashboard /></section>
          <section id="about"><About /></section>
          <section id="pricing"><Pricing /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    );
  }

  // 2. Admin & POS Layout (Sidebar + Header + Content)
  // We combine these because they share the "Dashboard Shell" structure
  return (
    <div className="flex min-h-screen bg-background">
      {/* Hide sidebar only on Auth pages */}
      {!isAuthPage && <Sidebar />}

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        {/* Auth pages use Header1, Admin and POS use the standard Header */}
        {isAuthPage ? <Header1 /> : <Header />}
        
        <main className="flex-1 p-4 overflow-y-auto">
          {/* POS Pages */}
          {activePage === "/pos" && <OrderPage />}
          {activePage === "/history" && <OrderHistory />}
          {activePage === "/customers" && <CustomerManagement />}
          {activePage === "/shift" && <ShiftSummary />}
          {activePage === "/returns" && <ReturnRefundPage />}
          {activePage === "/refund" && <ProcessReturnPage />}
          
          {/* Admin Pages */}
          {activePage === "/admin/employees" && <Employee />}
          {activePage === "/admin/branches" && <Branch />}
          {activePage === "/admin/categories" && <Category />}
          {/* Auth Pages */}
          {activePage === "/auth/signin" && <SignIn />}
          {activePage === "/auth/signup" && <SignUp />}
        </main>
      </div>
    </div>
  );
}

export default function MainLayout() {
  return (
    <AsideProvider>
      <LayoutContent />
    </AsideProvider>
  );
}