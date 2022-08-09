import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ( {children} ) => {

    const  dummyValue = "This is a dummy value"

    const [theme, setTheme] = useState("light")

    return(
        <ThemeContext.Provider
            value={{
                dummyValue,
                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
    
}

export const useThemeContext = () => useContext(ThemeContext)