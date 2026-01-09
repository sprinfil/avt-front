import { BreadCrumb } from "@/components/BreadCrumb/BreadCrumb";
import { UsuarioFormulario } from "@/components/Usuarios/UsuarioFormulario/UsuarioFormulario";
import { useParams } from "react-router-dom";

export const UsuariosVer = () => {
  const params = useParams();
  return (
    <>
      <p className="text-2xl mb-1">Josue díaz</p>
      <BreadCrumb
        type="navigate"
        routes={[
          {
            nombre: "Usuarios",
            route: "/dashboard/usuarios",
          },
          {
            nombre: "Ver usuario",
            route: "/dashboard/usuariosCrear",
          },
        ]}
      />
      <div className="mt-4">
        <UsuarioFormulario idUser={params?.idUser}/>
      </div>
    </>
  );
};
