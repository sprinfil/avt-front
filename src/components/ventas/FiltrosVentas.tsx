import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { icons } from "@/lib/icons";
import { useNavigate } from "react-router-dom";
import { SharedInput } from "../SharedInput/SharedInput";

export const FiltrosVentas = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full mt-5 mb-4">
        <div className=" flex gap-2 flex-wrap items-end">
          <Button
            className="ml-auto md:hidden flex w-full"
            variant={"accion"}
            onClick={() => {
              navigate("/dashboard/personasCrear");
            }}
          >
            Agregar venta
            {icons.agregar()}
          </Button>
          <SharedInput
            label="Comprador"
            placeholder="Comprador"
            className="md:w-50 w-full"
          />
          <SharedInput
            label="Clave catastral"
            placeholder="Clave catastral"
            className="md:w-50 w-full"
          />
          <SharedInput
            label="Número de contacto"
            placeholder="Número de contacto"
            className="md:w-50 w-full"
          />
          <Button
            className="ml-auto hidden md:flex"
            variant={"accion"}
            onClick={() => {
              navigate("/dashboard/personasCrear");
            }}
          >
            Agregar venta
            {icons.agregar()}
          </Button>
        </div>
      </div>
    </>
  );
};
