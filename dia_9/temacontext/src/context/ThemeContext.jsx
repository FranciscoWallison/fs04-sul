import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemaProvider = ({ children }) => {
  const [theme, setThema] = useState("light");

  const toggleThema = () => {
    setThema(theme === "light" ? "dark" : "light");
  };

  const allData = {
    // Tema dark
    theme,
    toggleThema,
  };

  return (
    <ThemeContext.Provider value={allData}>{children}</ThemeContext.Provider>
  );
};
