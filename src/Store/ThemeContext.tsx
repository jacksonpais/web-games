import { ReactNode, createContext, useState } from "react";
import { ThemeContextType } from "../@types/ThemeContextType";
import { Theme } from "../@types/theme";

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [themeColor, setThemeColor] = useState<Theme>("yellow");
  return (
    <ThemeContext.Provider value={{ theme: themeColor, setTheme: setThemeColor}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
