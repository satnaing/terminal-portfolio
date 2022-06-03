import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/styles/themes";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";

function App() {
  // themes
  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  const themeSwitcher = (switchTheme: Theme) => {
    setSelectedTheme(switchTheme);
    setMode(switchTheme);
  };

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          {/* <button onClick={() => themeSwitcher(themes.light)}>Click Me</button> */}
          <Terminal />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
