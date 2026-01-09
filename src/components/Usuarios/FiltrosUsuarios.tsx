import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { icons } from "@/lib/icons";
import { useNavigate } from "react-router-dom";
import type { userIndexParams } from "@/lib/User/UserTypes";

export const FiltrosUsuarios = ({
  params,
  setParams,
}: {
  params: userIndexParams;
  setParams: (values: any) => void;
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full mt-5 mb-4">
        <div className=" flex gap-2 flex-wrap">
          <Button
            className="ml-auto md:hidden flex w-full"
            variant={"accion"}
            onClick={() => {
              navigate("/dashboard/usuariosCrear");
            }}
          >
            Agregar usuario
            {icons.agregar()}
          </Button>
          <Input
            placeholder="Nombre"
            className="md:w-50 w-full"
            value={params?.name}
            onChange={(e) => {
              setParams((prev: any) => {
                return {
                  ...prev,
                  name: e?.target?.value,
                };
              });
            }}
          />
          <Input
            placeholder="Usuario "
            className="md:w-50 w-full"
            value={params?.username}
            onChange={(e) => {
              setParams((prev: any) => {
                return {
                  ...prev,
                  username: e?.target?.value,
                };
              });
            }}
          />
          <Button
            className="ml-auto hidden md:flex"
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
