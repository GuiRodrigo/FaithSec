import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "../lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { AppProvider } from "@/hooks";
import { TooltipProvider } from "@/components/plate-ui/tooltip";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
      <AppProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TooltipProvider disableHoverableContent delayDuration={500} skipDelayDuration={0}>
            <Component {...pageProps} />
            <Toaster richColors position="top-right" toastOptions={{ duration: 7000 }} />
          </TooltipProvider>
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}
