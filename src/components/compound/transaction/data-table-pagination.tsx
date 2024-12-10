import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components";
import { useTransaction } from "@/hooks/transactions";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  const { pagination, setPage, setPageSize } = useTransaction();
  const amount = [20, 50, 100, 200, 500];

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    table.setPageIndex(newPage - 1); // Ajuste para zero-based index
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    table.setPageSize(size);
  };

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {/* Exemplo: {pagination.totalRecords} registros no total */}
      </div>
      <div className="md:flex items-center">
        <div className="flex space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Ingressos por página</p>
            <Select
              value={`${pagination.pageSize}`}
              onValueChange={(value) => handlePageSizeChange(Number(value))}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={pagination.pageSize} />
              </SelectTrigger>
              <SelectContent side="top">
                {amount.map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex w-[120px] items-center justify-center text-sm font-medium">
            Página {pagination.currentPage} de {pagination.totalPages}
          </div>
        </div>

        <div className="flex mt-4 md:mt-0 items-center space-x-2">
          {/* Botão para primeira página (opcional)
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => handlePageChange(1)}
            disabled={pagination.currentPage === 1}
          >
            <span className="sr-only">Ir para primeira página</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
          */}

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
          >
            <span className="sr-only">Voltar para página anterior</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
          >
            <span className="sr-only">Ir para próxima página</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>

          {/* Botão para última página (opcional)
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => handlePageChange(pagination.totalPages)}
            disabled={pagination.currentPage === pagination.totalPages}
          >
            <span className="sr-only">Ir para última página</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
          */}
        </div>
      </div>
    </div>
  );
}
