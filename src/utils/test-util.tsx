import React, { FC, ReactElement, useState } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  const [selectedTheme] = useState(theme);
  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
