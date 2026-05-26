import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface ThemeContextType {
  toggleTheme: "light" | "dark";
  setToggleTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}
const ThemeContext = createContext<ThemeContextType | null>(null);
export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [toggleTheme, setToggleTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const root = document.documentElement;
    if (toggleTheme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [toggleTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, setToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme must be used within a ThemeContextProvider");
  return context;
}
