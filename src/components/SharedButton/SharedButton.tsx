import { Button, type ButtonProps } from "@/components/ui/button";
import React from "react";
import LoaderHorizontal from "../LoaderHorizontal/LoaderHorizontal";

type SharedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonProps & {
    loading?: boolean;
    children: any;
    className?: string;
  };
export const SharedButton = ({
  loading,
  children,
  className,
  ...props
}: SharedButtonProps) => {
  return (
    <>
      <Button disabled={loading} className={className} {...props}>
        {loading ? (
          <>
            <LoaderHorizontal styles={"w-full"} />
          </>
        ) : (
          <>{children}</>
        )}
      </Button>
    </>
  );
};
