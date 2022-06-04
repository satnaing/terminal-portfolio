export type Theme = {
  id: string;
  name: string;
  colors: {
    body: string;
    scrollHandle: string;
    scrollHandleHover: string;
    primary: string;
    secondary: string;
    text: {
      100: string;
      200: string;
      300: string;
    };
  };
};

export type Themes = {
  [key: string]: Theme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#1D2A35",
      scrollHandle: "#19252E",
      scrollHandleHover: "#162028",
      primary: "#05CE91",
      secondary: "#FF9D00",
      text: {
        100: "#cbd5e1",
        200: "#B2BDCC",
        300: "#64748b",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#EFF3F3",
      scrollHandle: "#C1C1C1",
      scrollHandleHover: "#AAAAAA",
      primary: "#027474",
      secondary: "#FF9D00",
      text: {
        100: "#334155",
        200: "#475569",
        300: "#64748b",
      },
    },
  },
};

export default theme;
