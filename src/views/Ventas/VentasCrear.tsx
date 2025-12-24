import { BreadCrumb } from "@/components/BreadCrumb/BreadCrumb";
import { FormVenta } from "@/components/ventas/FormVenta/FormVenta";

export const VentasCrear = () => {
  return (
    <>
      <p className="text-2xl ">Nueva venta</p>
      <BreadCrumb
        type="navigate"
        routes={[
          {
            nombre: "Ventas",
            route: "/dashboard/ventas",
          },
          {
            nombre: "Crear venta",
            route: "/dashboard/ventasCrear",
          },
        ]}
      />
      <div className="mt-4 pb-[100px]">
        <FormVenta />
      </div>
    </>
  );
};
