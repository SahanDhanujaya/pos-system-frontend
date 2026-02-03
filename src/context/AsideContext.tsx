"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface AsideContextType {
  isOpen: boolean;
  activePage: string;
  openAside: () => void;
  closeAside: () => void;
  toggleAside: () => void;
  navigateTo: (path: string) => void;
}

const AsideContext = createContext<AsideContextType | undefined>(undefined);

export function AsideProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("/auth/signin");

  const openAside = () => setIsOpen(true);
  const closeAside = () => setIsOpen(false);
  const toggleAside = () => setIsOpen((prev) => !prev);
  
  const navigateTo = (path: string) => {
    setActivePage(path);
    setIsOpen(false);
  };

  return (
    <AsideContext.Provider 
      value={{ isOpen, activePage, openAside, closeAside, toggleAside, navigateTo }}
    >
      {children}
    </AsideContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAside = () => {
  const context = useContext(AsideContext);
  if (!context) throw new Error("useAside must be used within AsideProvider");
  return context;
};