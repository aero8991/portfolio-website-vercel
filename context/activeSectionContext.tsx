"use client";

import React, { createContext, useContext, useState } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContextItems =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContext({
  children,
}: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); //used in navbar - need to disable the box when a user clicks a link

  const items = {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  };

  return (
    <ActiveSectionContextItems.Provider value={items}>
      {children}
    </ActiveSectionContextItems.Provider>
  );
}

//custom hook for context
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContextItems);

  if (context === null) {
    throw new Error(
      "ActiveSectionContextItems must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
