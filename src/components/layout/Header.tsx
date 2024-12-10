import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CircleUser, Menu, MessageCircleQuestion, Package2 } from "lucide-react";
import Link from "next/link";
import { Button } from "..";
import Image from "next/image";
import { LogoutButtonItem } from "../compound/LogoutButtonItem";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/auth";
import { toast } from "sonner";

type HeaderLinksOptions =
  | "/"
  | "/ingressos"
  | "/eventos"
  | "/clientes"
  | "/validador"
  | "/support"
  | "/usuarios";

export function Header() {
  const { pathname, push } = useRouter();
  const { userData } = useAuth();
  const currentPath: HeaderLinksOptions = pathname as HeaderLinksOptions;

  useEffect(() => {
    if (pathname === "/clientes" && userData?.isadmin !== 1) {
      toast.warning("Apenas Admins tem acesso a esta área");
      push("/");
      return;
    }
    if (pathname === "/eventos" && userData?.isadmin !== 1) {
      toast.warning("Apenas Admins tem acesso a esta área");
      push("/");
      return;
    }
    if (pathname === "/eventos/create" && userData?.isadmin !== 1) {
      toast.warning("Apenas Admins tem acesso a esta área");
      push("/");
      return;
    }
    if (pathname === "/eventos/edit/[id]" && userData?.isadmin !== 1) {
      toast.warning("Apenas Admins tem acesso a esta área");
      push("/");
      return;
    }
    if (pathname === "/support" && userData?.isadmin !== 1) {
      toast.warning("Apenas usuários com acesso autorizado tem acesso a esta área");
      push("/");
      return;
    }

    if (pathname === "/support/create" && userData?.isadmin !== 1) {
      toast.warning("Apenas usuários com acesso autorizado tem acesso a esta área");
      push("/");
      return;
    }
    if (pathname === "/support/config" && userData?.isadmin !== 1) {
      toast.warning("Apenas usuários com acesso autorizado tem acesso a esta área");
      push("/");
      return;
    }
    if (pathname === "/support/chat/[protocol]" && userData?.isadmin !== 1) {
      toast.warning("Apenas usuários com acesso autorizado tem acesso a esta área");
      push("/");
      return;
    }
    if (pathname === "/usuarios" && userData?.isadmin !== 1) {
      toast.warning("Apenas Admins tem acesso a esta área");
      push("/");
      return;
    }
    // if (pathname === "/reports" && userData?.isadmin !== 1) {
    //   push("/");
    //   return;
    // }
  }, [pathname, userData]);

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-black px-4 md:px-6 opacity-1 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <Image
            src={"/logo.png"}
            width={"512"}
            height={"512"}
            quality={100}
            alt="Logo"
            className="h-8 w-8 rounded-md"
          />
          <Package2 className="h-6 w-6" />
        </Link>

        <Link
          href="/"
          className={`${
            currentPath === "/" ? "text-foreground" : "text-muted-foreground"
          } transition-colors hover:text-foreground`}
        >
          Dashboard
        </Link>
        <Link
          href="/ingressos"
          className={`${
            currentPath === "/ingressos" ? "text-foreground" : "text-muted-foreground"
          } transition-colors hover:text-foreground`}
        >
          Ingressos
        </Link>

        {userData?.isadmin === 1 && (
          <Link
            href="/eventos"
            className={`${
              currentPath === "/eventos" ? "text-foreground" : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            Eventos
          </Link>
        )}

        {userData?.isadmin === 1 && (
          <Link
            href="/clientes"
            className={`${
              currentPath === "/clientes" ? "text-foreground" : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            Clientes
          </Link>
        )}
        {/* 
        {userData?.isadmin === 1 && (
          <Link
            href="/usuarios"
            className={`${
              currentPath === "/usuarios" ? "text-foreground" : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            Usuários
          </Link>
        )} */}

        {userData?.isadmin === 1 && (
          <Link
            href="/support"
            className={`${
              currentPath === "/support" ? "text-foreground" : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            Suportes
          </Link>
        )}

        {userData?.isadmin === 1 && (
          <Link
            href="/validador"
            className={`${
              currentPath === "/validador" ? "text-foreground" : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            Validadores
          </Link>
        )}
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              <Image
                src={"/logo.png"}
                width={"512"}
                height={"512"}
                quality={100}
                alt="Logo"
                className="h-8 w-8 rounded-md"
              />
              <span className="sr-only">BlackStage</span>
            </Link>

            <Link href="#" className="text-foreground transition-colors hover:text-foreground">
              Dashboard
            </Link>
            <Link
              href="/ingressos"
              className={`${
                currentPath === "/ingressos" ? "text-foreground" : "text-muted-foreground"
              } transition-colors hover:text-foreground`}
            >
              Ingressos
            </Link>

            {userData?.isadmin === 1 && (
              <Link
                href="/eventos"
                className={`${
                  currentPath === "/eventos" ? "text-foreground" : "text-muted-foreground"
                } transition-colors hover:text-foreground`}
              >
                Eventos
              </Link>
            )}

            {userData?.isadmin === 1 && (
              <Link
                href="/clientes"
                className={`${
                  currentPath === "/clientes" ? "text-foreground" : "text-muted-foreground"
                } transition-colors hover:text-foreground`}
              >
                Clientes
              </Link>
            )}
            {/* 
            {userData?.isadmin === 1 && (
              <Link
                href="/usuarios"
                className={`${
                  currentPath === "/usuarios" ? "text-foreground" : "text-muted-foreground"
                } transition-colors hover:text-foreground`}
              >
                Usuários
              </Link>
            )} */}

            {userData?.isadmin === 1 && (
              <Link
                href="/support"
                className={`${
                  currentPath === "/support" ? "text-foreground" : "text-muted-foreground"
                } transition-colors hover:text-foreground`}
              >
                Suportes
              </Link>
            )}

            {userData?.isadmin === 1 && (
              <Link
                href="/validador"
                className={`${
                  currentPath === "/validador" ? "text-foreground" : "text-muted-foreground"
                } transition-colors hover:text-foreground`}
              >
                Validadores
              </Link>
            )}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="flex-1" />

        {/* <CreateAdminButton /> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Abrir Menu de Usuário</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuLabel className="text-muted-foreground">
              {userData?.user}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* <Link href={`/settings/perfil`}>
              <DropdownMenuItem className="cursor-pointer">
                <CircleUserRound className="size-5 mr-2" /> Minha Conta
              </DropdownMenuItem>
            </Link> */}
            <Link href={`https://www.instagram.com/blackpassbrasil/`} prefetch={false}>
              <DropdownMenuItem className="cursor-pointer">
                <MessageCircleQuestion className="size-5 mr-2" /> Suporte
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <LogoutButtonItem />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
