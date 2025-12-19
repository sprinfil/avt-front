import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { icons } from "@/lib/icons";
import { useNavigate } from "react-router-dom";

export const FiltrosPersonas = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full mt-5 mb-4">
        <div className=" flex gap-2 flex-wrap">
          <Button
            className="ml-auto md:hidden flex w-full"
            variant={"accion"}
            onClick={() => {
              navigate("/dashboard/personasCrear");
            }}
          >
            Agregar persona
            {icons.agregar()}
          </Button>
          <Input placeholder="Nombre" className="md:w-50 w-full" />
          <Button
            className="ml-auto hidden md:flex"
            variant={"accion"}
            onClick={() => {
              navigate("/dashboard/personasCrear");
            }}
          >
            Agregar persona
            {icons.agregar()}
          </Button>
        </div>
      </div>
    </>
  );
};
