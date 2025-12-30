import { Button } from "../ui/button";
import { icons } from "@/lib/icons";
import { useNavigate } from "react-router-dom";
import { SharedInput } from "../SharedInput/SharedInput";
import { SharedComboBox } from "../SharedComboBox/SharedComboBox";

export const FiltrosPagosDuenos = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full mt-5 mb-4">
        <div className=" flex gap-2 flex-wrap items-end">
          <Button
            className="ml-auto md:hidden flex w-full"
            variant={"accion"}
            onClick={() => {
              navigate("/dashboard/ventasCrear");
            }}
          >
            Agregar pago
            {icons.agregar()}
          </Button>
          <div className="w-[400px]">
            <SharedComboBox
              label="Zona"
              placeholder="Zona"
              className="md:w-50 w-full"
            />
          </div>

          <SharedInput
            label="Fecha inicio"
            placeholder="Fecha inicio"
            className="md:w-50 w-full"
            type="date"
          />
          <SharedInput
            label="Fecha final"
            placeholder="Fecha final"
            className="md:w-50 w-full"
            type="date"
          />
          <Button
            className="ml-auto hidden md:flex"
            variant={"accion"}
            onClick={() => {
              navigate("/dashboard/ventasCrear");
            }}
          >
            Agregar pago
            {icons.agregar()}
          </Button>
        </div>
      </div>
    </>
  );
};
