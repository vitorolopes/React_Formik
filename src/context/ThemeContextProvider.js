import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ( {children} ) => {

    const [theme, setTheme] = useState("light")

    const usersURL = "https://jsonplaceholder.typicode.com/users";

    return(
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                usersURL
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
    
}

export const useThemeContext = () => useContext(ThemeContext)