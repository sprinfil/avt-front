import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable";
import { FiltrosPagosDuenos } from "@/components/PagosDuenos/FiltrosPagosDuenos";

export const Pagos = () => {
  return (
    <>
      <p className="text-2xl ">Pagos a dueños</p>
      <FiltrosPagosDuenos />
      <div className="pb-[100px]">
        <SharedDataTable />
      </div>
    </>
  );
};
