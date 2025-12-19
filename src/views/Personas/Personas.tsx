import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable";
import { FiltrosPersonas } from "@/components/Personas/FiltrosPersonas";

export const Personas = () => {
  return (
    <>
      <p className="text-2xl ">Personas</p>
      <FiltrosPersonas />
      <SharedDataTable />
    </>
  );
};
