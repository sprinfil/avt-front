import React from "react";
import { Input } from "../ui/input";

type SharedInputProps = React.ComponentProps<"input"> & {
  error?: string;
  label?: string;
};

export const SharedInput = ({
  className,
  type = "text",
  error,
  label,
  ...props
}: SharedInputProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        {label && <p className="text-sm text-foreground ml-1">{label}</p>}
        <Input className={className} type={type} {...props} />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </>
  );
};
