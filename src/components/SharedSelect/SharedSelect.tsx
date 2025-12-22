import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SharedSelectProps = {
  options?: { value: string; text: string }[];
  label?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const SharedSelect = ({
  options = [],
  label = "",
  error = "",
  value,
  onChange,
}: SharedSelectProps) => {
  return (
    <>
      {label && <p>{label}</p>}

      <Select
        value={value}
        onValueChange={(val) => {
          onChange?.(val);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={label} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.text}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};
