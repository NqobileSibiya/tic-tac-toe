import { useState, createContext } from "react";

export const SoundEffectContext = createContext({});

export function  SoundEffectContext({children}) {
  
    return (
        <SoundEffectContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </SoundEffectContext.Provider>

    );
}