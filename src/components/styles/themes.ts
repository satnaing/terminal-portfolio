export type Theme = {
  id: string;
  name: string;
  colors: {
    body: string;
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
      primary: "#05CE91",
      secondary: "#FF9D00",
      text: {
        100: "#E5E7EB",
        200: "#D1D5DB",
        300: "#9CA3AF",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#EFF3F3",
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
