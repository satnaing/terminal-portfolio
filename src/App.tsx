import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/styles/themes";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";

export const themeContext = createContext<
  ((switchTheme: Theme) => void) | null
>(null);

function App() {
  // themes
  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // Update meta tag colors when switching themes
  useEffect(() => {
    if (document) {
      document!
        .querySelector('meta[name="theme-color"]')!
        .setAttribute("content", theme.colors.body);
      document!
        .querySelector('meta[name="msapplication-TileColor"]')!
        .setAttribute("content", theme.colors.body);
      document!
        .querySelector('link[rel="mask-icon"]')!
        .setAttribute("color", theme.colors.body);
    }
  }, [selectedTheme]);

  const themeSwitcher = (switchTheme: Theme) => {
    setSelectedTheme(switchTheme);
    setMode(switchTheme);
  };

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <themeContext.Provider value={themeSwitcher}>
            <Terminal />
          </themeContext.Provider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
