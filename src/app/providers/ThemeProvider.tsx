"use client";

import { ReactNode } from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types";

interface IProps {
  children: ReactNode
}
const ThemeProvider = ({ children, ...props} : ThemeProviderProps) => {
  return <NextThemeProvider { ...props}>{children}</NextThemeProvider>
}

export default ThemeProvider