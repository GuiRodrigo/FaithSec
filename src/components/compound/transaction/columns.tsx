import { ColumnDef } from "@tanstack/react-table";

import { Transaction } from "../../../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { format, fromUnixTime } from "date-fns";
import formatCurrency from "@/utils/formatCurrency";
import { obfuscateEmail } from "@/utils/obfuscateEmail";
import { useAuth } from "@/hooks/auth";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Transaction>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "client_name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Cliente" />,
    cell: ({ row }) => {
      const { userData } = useAuth();
      return (
        <div>
          <p className="font-medium">{row.original.client_name}</p>

          <p className="hidden text-sm text-muted-foreground md:inline">
            {userData?.isadmin === 1
              ? row.original.client_email
              : obfuscateEmail(row.original.client_email)}
          </p>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "evento",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Evento" />,
    cell: ({ row }) => {
      return <p className="font-medium">{row.original.event}</p>;
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "ingresso",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Ingresso" />,
    cell: ({ row }) => {
      return <div>{row.original.tk_name}</div>;
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "posse",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Posse" />,
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          {row.original.istransfer === "1" ? (
            <>
              {row.original.iscustomer === "0" ? (
                <Badge className="text-xs" variant={"warn"}>
                  Transferido
                </Badge>
              ) : (
                <Badge className="text-xs" variant={"default"}>
                  Transferido
                </Badge>
              )}
            </>
          ) : (
            <>
              {row.original.iscustomer === "0" ? (
                <Badge className="text-xs" variant={"warn"}>
                  Comprador
                </Badge>
              ) : (
                <Badge className="text-xs" variant={"outline"}>
                  Comprador
                </Badge>
              )}
            </>
          )}
          {/* <Badge className="text-xs" variant={getCurrentBadge()}>
            {capitizeString(status)}
          </Badge> */}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const date = row.original.ts_used ? fromUnixTime(parseInt(row.original.ts_used)) : 0;
      const formattedDate = format(date, "dd/MM - HH:mm");

      return (
        <div className="flex w-[100px] items-center">
          {row.original.ts_used && row.original.ts_used !== "0" ? (
            <div>
              <Badge className="text-xs" variant={"default"}>
                Usado
              </Badge>

              <p className="hidden text-xs text-muted-foreground md:block mt-1">{formattedDate}</p>
            </div>
          ) : (
            <Badge className="text-xs" variant={"secondary"}>
              Não usado
            </Badge>
          )}
          {/* <Badge className="text-xs" variant={getCurrentBadge()}>
            {capitizeString(status)}
          </Badge> */}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID da Transação" />,
    cell: ({ row }) => {
      return (
        <div>
          {row.original.status_pgto && row.original.status_pgto !== 2 ? (
            <Badge className="text-xs" variant={"warn"}>
              <p>
                {row.original.status_pgto === 22
                  ? "Rejeitado"
                  : row.original.status_pgto === 15
                  ? "Cancelado"
                  : row.original.status_pgto === 21
                  ? "Contestado/Negado"
                  : row.original.status_pgto === 23
                  ? "Estornado"
                  : ""}
              </p>
              - {row.original.paymentid}
            </Badge>
          ) : (
            <Badge className="text-xs" variant={"outline"}>
              {row.original.n_number}
            </Badge>
          )}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "valor",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Valor" />,
    cell: ({ row }) => {
      return (
        <div>
          <b>{row.original.courtesy === "1" && "Cortesia"}</b>
          <p>{row.original.free === "1" ? formatCurrency(row.original.price_amount / 100) : ""}</p>
          {row.original.cupom && row.original.cupom != "null" && (
            <Badge variant={"outline"}>{row.original.cupom ? row.original.cupom : "Cupom"}</Badge>
          )}
        </div>
      );
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { userData } = useAuth();

      return userData?.isadmin === 1 && <DataTableRowActions row={row} />;
    },
  },
];
