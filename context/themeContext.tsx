"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Theme } from "@/lib/types";

type ThemeContextProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContextItems = createContext<ThemeContextType | null>(null);

export default function ThemeContext({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const items = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContextItems.Provider value={items}>
      {children}
    </ThemeContextItems.Provider>
  );
}

export function useTheme() {
    const context = useContext(ThemeContextItems)

    if (context === null) {
        throw new Error(
          "ActiveSectionContextItems must be used within an ActiveSectionContextProvider"
        );
      }
    
      return context;
}
