import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { icons } from "@/lib/icons";
import { useNavigate } from "react-router-dom";

export const FiltrosUsuarios = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full mt-5 mb-4">
        <div className=" flex gap-2">
          <Input placeholder="Nombre" className="md:w-50 w-full" />
          <Input placeholder="Usuario " className="md:w-50 w-full" />
          <Button
            className="ml-auto"
            variant={"accion"}
            onClick={() => {
              navigate("/dashboard/usuariosCrear");
            }}
          >
            Agregar usuario
            {icons.agregar()}
          </Button>
        </div>
      </div>
    </>
  );
};
