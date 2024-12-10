import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import React from "react";
interface ISelectProps {
  values: {
    key: string;
    value: string;
  }[];
  currentSelecteds: string | undefined;
  onSelectedItems: (selectedItems: string) => void;
}
export const MultiSelect = ({
  values,
  currentSelecteds,
  onSelectedItems,
}: ISelectProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleSelectChange = (value: string) => {
    if (!selectedItems.includes(value)) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      const referencedArray = [...selectedItems];
      const indexOfItemToBeRemoved = referencedArray.indexOf(value);
      referencedArray.splice(indexOfItemToBeRemoved, 1);
      setSelectedItems(referencedArray);
    }
  };

  const isOptionSelected = (value: string): boolean => {
    return selectedItems.includes(value) ? true : false;
  };

  function handleSaveValidadorEvents() {
    selectedItems.length > 0
      ? onSelectedItems(selectedItems.join(","))
      : onSelectedItems("");
  }

  useEffect(() => {
    if (currentSelecteds) {
      setSelectedItems(currentSelecteds.split(","));
    }
  }, [currentSelecteds]);

  return (
    <>
      <DropdownMenu
        open={open}
        onOpenChange={(current) => {
          if (!current) {
            handleSaveValidadorEvents();
          }

          setOpen(current);
        }}
      >
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">
            <span>Ver eventos</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-56"
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <DropdownMenuLabel>Eventos</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {values.map((value: ISelectProps["values"][0], index: number) => {
            return (
              <DropdownMenuCheckboxItem
                onSelect={(e) => e.preventDefault()}
                key={index}
                checked={isOptionSelected(value.key)}
                onCheckedChange={() => handleSelectChange(value.key)}
              >
                {value.value}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
