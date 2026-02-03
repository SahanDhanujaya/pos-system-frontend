"use client";

import { ModeToggle } from '../toggles/ModeToggle';

function Header1() {

  return (
    <header className="fixed flex w-full justify-end items-center p-4">
        <ModeToggle />
    </header>
  )
}

export default Header1