"use client";

import React from 'react'
import { ModeToggle } from '../toggles/ModeToggle';
import { Menu, MenuIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useAside } from '@/context/AsideContext';

function Header() {
  const { openAside } = useAside();

  return (
    <header className="flex justify-between items-center bg-card p-4 rounded-xl border shadow-sm m-4">
      <Button variant="ghost" size="icon" onClick={openAside}>
        <Menu size={20} />
      </Button>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          <span>F1: Search</span>
          <span>F2: Discount</span>
          <span>F3: Customer</span>
          <span>Ctrl+Enter: Payment</span>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header