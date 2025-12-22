import { BreadCrumb } from "@/components/BreadCrumb/BreadCrumb";
import { UsuarioFormulario } from "@/components/Usuarios/UsuarioFormulario/UsuarioFormulario";

export const UsuariosCrear = () => {
  return (
    <>
      <p className="text-2xl mb-1">Crear usuario</p>
      <BreadCrumb
        type="navigate"
        routes={[
          {
            nombre: "Usuarios",
            route: "/dashboard/usuarios",
          },
          {
            nombre: "Crear usuario",
            route: "/dashboard/usuariosCrear",
          },
        ]}
      />
      <div className="mt-3">
        <UsuarioFormulario />
      </div>
    </>
  );
};
