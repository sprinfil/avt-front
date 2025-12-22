import { BreadCrumb } from "@/components/BreadCrumb/BreadCrumb";
import { PersonaForm } from "@/components/Personas/PersonaForm/PersonaForm";

export const CrearPersona = () => {
  return (
    <>
      <p className="text-2xl mb-1">Crear persona</p>
      <BreadCrumb
        type="navigate"
        routes={[
          {
            nombre: "Personas",
            route: "/dashboard/personas",
          },
          {
            nombre: "Crear persona",
            route: "/dashboard/personasCrear",
          },
        ]}
      />
      <div className="mt-4">
        <PersonaForm />
      </div>
    </>
  );
};
