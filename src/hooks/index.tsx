import React, { ReactNode } from "react";

import { AuthProvider } from "./auth";
import { TransactionProvider } from "./transactions";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <TransactionProvider>{children}</TransactionProvider>
    </AuthProvider>
  );
}

export { AppProvider };
