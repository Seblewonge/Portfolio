// import React, { createContext,useEffect,useState,} from "react"

// const ThemeContext = createContext();



// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem("theme") || "light"
//   );
//   useEffect(() => {
//     document.body.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);
// const toggleTheme = () => {
//   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
// };

// return (
//   <ThemeContext.Provider value={{ theme, toggleTheme }}>
//     {children}
//   </ThemeContext.Provider>
// );
// };

import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext"; // ✅ import from ThemeContext.js

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

