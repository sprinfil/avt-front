import { BreadCrumb } from "@/components/BreadCrumb/BreadCrumb";

export const VerPersona = () => {
  return (
    <>
      <p className="text-2xl mb-1">Juan Pérez López</p>
      <BreadCrumb
        type="navigate"
        routes={[
          {
            nombre: "Personas",
            route: "/dashboard/personas",
          },
          {
            nombre: "Ver persona",
            route: "/dashboard/personasVer",
          },
        ]}
      />
    </>
  );
};
