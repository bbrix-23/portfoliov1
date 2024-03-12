"use client";
import React, { createContext, useContext, useState } from "react";

const ThemeProvider = createContext();

export const useMode = () => {
  return useContext(ThemeProvider);
};

const theme = ({ children }) => {
  const [isDark, setDark] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <ThemeProvider.Provider value={{ isNavOpen, setNavOpen, isDark, setDark }}>
      {children}
    </ThemeProvider.Provider>
  );
};

export default theme;
