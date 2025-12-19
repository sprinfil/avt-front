import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { icons } from "@/lib/icons";
import ZustandPrincipal from "@/lib/ZustandPrincipal";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { setOpcionMenu } = ZustandPrincipal();
  return (
    <div className="w-full h-screen bg-[#FAFBFC] flex flex-col items-center justify-center">
      <div className="w-125 bg-white shadow-lg rounded-md flex flex-col">
        <div className="w-full  flex items-center justify-center mt-10 ">
          {icons.user("w-[60px] h-[60px]")}
        </div>

        <div className="px-10 flex-1 flex flex-col pb-12.5 mt-7.5">
          <div className="w-full text-center">
            <p className="mb-10">Inicie sesión para continuar</p>
          </div>
          <div className="flex flex-col gap-3 ">
            <Input placeholder="Usuario" />
            <Input placeholder="Contraseña" type="password" />
          </div>
          <div className="mt-5 ">
            <Button
              className="w-full"
              variant={"accion"}
              onClick={() => {
                navigate("/dashboard/zonas");
                setOpcionMenu("zonas");
              }}
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
