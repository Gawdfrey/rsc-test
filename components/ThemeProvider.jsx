"use client";
import React, { createContext, useContext } from "react";
const theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
  },
};

// Create a context for the theme
const ThemeContext = createContext();

// Create a hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Create the provider component
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
