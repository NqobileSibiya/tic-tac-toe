import { useState, createContext } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({children}) {
    const [theme, setTheme] =useState("dark")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light" )
    };
    console.log(theme);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>

    );
}