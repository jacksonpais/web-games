import { Theme } from "./theme";

export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
  };