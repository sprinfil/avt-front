import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { icons } from "@/lib/icons";

type SharedModalProps = {
  trigger: React.ReactElement;
  title?: string;
  description?: string;
  children?: React.ReactElement;
  contentStyles?: string;
  open: boolean;
  setOpenModal: (value: boolean) => void;
};

export const SharedModal = ({
  trigger,
  title,
  description,
  children,
  contentStyles,
  open,
  setOpenModal,
}: SharedModalProps) => {
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpenModal}>
        <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
        <AlertDialogContent className={contentStyles}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex">
              {title}
              <AlertDialogCancel className="p-0 ml-auto">
                <Button
                  variant={"destructive"}
                  className="ml-auto"
                >
                  {icons.cancelar()}
                </Button>
              </AlertDialogCancel>
            </AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <div className="">{children}</div>
          <AlertDialogFooter>
            {/* <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
