import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable";
import { FiltrosVentas } from "@/components/ventas/FiltrosVentas";
import { columnsVentas } from "@/components/ventas/SharedDataTableVentasColumns";
import { VentasData } from "@/lib/Ventas/Ventasjson";

export const Ventas = () => {
  return (
    <>
      <p className="text-2xl ">Ventas</p>
      <FiltrosVentas />
      <div className="pb-[100px]">
        <SharedDataTable columns={columnsVentas} data={VentasData} />
      </div>
    </>
  );
};
