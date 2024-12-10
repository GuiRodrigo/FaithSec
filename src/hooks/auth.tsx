import api from "@/services/api";
import {
  useContext,
  ReactNode,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { v4 as uuidv4 } from "uuid";
import md5 from "md5";

export const clientStorageKey = "@blackpass-admin-web:user-data-1.0.0";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
