"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type SharedComboBoxProps = {
  label?: string | React.ReactElement;
  data: { label: string; value: string }[];
  onChange?: (value: string) => void;
  defaultValue: any;
};

export function SharedComboBox({
  label = "",
  data = [],
  onChange,
  defaultValue,
}: SharedComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <>
      {typeof label === "string" ? <p>{label}</p> : label}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-secundario"
          >
            {value
              ? data.find((framework) => framework.value === value)?.label
              : label ?? ""}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0">
          <Command>
            <CommandInput
              placeholder={typeof label === "string" ? label : ""}
              className="h-9"
            />
            <CommandList>
              <CommandEmpty>Sin datos.</CommandEmpty>
              <CommandGroup>
                {data.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      onChange?.(currentValue === value ? "" : currentValue);
                    }}
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
