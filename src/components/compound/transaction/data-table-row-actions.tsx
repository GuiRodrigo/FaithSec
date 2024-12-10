"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components";
import { ReturnToBuyerMenuItem } from "../ReturnToBuyerMenuItem";
import { useRouter } from "next/router";
import { ResendEmailButton } from "../ResendEmailButton";
import { InvalidateTicketButton } from "../InvalidateTicketButton";
import { useAuth } from "@/hooks/auth";

interface DataTableRowActionsProps<TData> {
  row: any;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  const router = useRouter();
  const { userData } = useAuth();

  const refreshPage = () => {
    router.replace(router.asPath);
    router.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {row.original.istransfer === "1" && (
          <ReturnToBuyerMenuItem
            onReturnedTicket={() => {
              refreshPage();
            }}
            id={row.original.id}
          />
        )}

        {row.original.iscustomer === "0" && <ResendEmailButton id={row.original.id} />}

        {userData && userData?.isadmin === 1 && row.original.ts_used === "0" && (
          <InvalidateTicketButton id={row.original.id} isValid />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
