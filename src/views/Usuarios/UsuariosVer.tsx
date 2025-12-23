import { BreadCrumb } from "@/components/BreadCrumb/BreadCrumb";
import { UsuarioFormulario } from "@/components/Usuarios/UsuarioFormulario/UsuarioFormulario";

export const UsuariosVer = () => {
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
        <UsuarioFormulario />
      </div>
    </>
  );
};
