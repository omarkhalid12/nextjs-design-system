"use client";

import { ReactNode } from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"

interface IProps {
  children: ReactNode
}
const ThemeProvider = ({ children, ...props} : IProps) => {
  return <NextThemeProvider { ...props}>{children}</NextThemeProvider>
}

export default ThemeProvider