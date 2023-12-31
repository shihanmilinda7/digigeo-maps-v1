"use client";

import { Provider } from "react-redux";
import store from "@/store/store";
import { useEffect, useRef } from "react";
import { ThemeProvider } from "@/components/theme-provider";

export default function LayoutClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
