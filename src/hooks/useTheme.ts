import { useEffect, useState } from "react";
import _ from "lodash";
import themes, { Theme } from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(themes.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: Theme) => {
    setToLS("tsn-theme", mode.name);
    setTheme(mode);
  };

  useEffect(() => {
    const localThemeName = getFromLS("tsn-theme");
    localThemeName ? setTheme(themes[localThemeName]) : setTheme(themes.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
