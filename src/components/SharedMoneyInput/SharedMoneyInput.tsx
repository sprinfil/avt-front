import type { ComponentType } from "react";
import { NumericFormat, type InputAttributes } from "react-number-format";

type SharedMoneyInput = {
  value: any;
  onChange: (value: any) => void;
  Input: ComponentType<InputAttributes> | undefined;
  label: string;
  error?: string;
};

export const SharedMoneyInput = ({
  value,
  onChange,
  Input,
  label,
  error,
}: SharedMoneyInput) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        {label && <p className="text-sm text-foreground ml-1">{label}</p>}
        <NumericFormat
          value={value}
          onValueChange={(values) => {
            onChange(values.value);
          }}
          thousandSeparator={true}
          prefix={"$"}
          decimalScale={2}
          fixedDecimalScale={true}
          allowNegative={false}
          placeholder={label}
          customInput={Input}
          isAllowed={(values) => {
            const { floatValue } = values;
            return floatValue === undefined || floatValue <= 9999999;
          }}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </>
  );
};
