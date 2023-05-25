"use client";
import { createContext, useState, ReactNode } from "react";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";

interface IThemeContext {
  primaryColor: string;
  updatePrimaryColor: (color: string) => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

interface IColorProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IColorProviderProps) => {
  const [primaryColor, setPrimaryColor] = useState<string>("#1677ff");

  const updatePrimaryColor = (color: string) => {
    setPrimaryColor(color);
  };

  return (
    <ThemeContext.Provider value={{ primaryColor, updatePrimaryColor }}>
      <ConfigProvider
        locale={ptBR}
        theme={{ token: { colorPrimary: primaryColor } }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
