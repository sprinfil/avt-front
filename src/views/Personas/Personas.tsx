import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable";
import { FiltrosPersonas } from "@/components/Personas/FiltrosPersonas";
import { columnsPersonas } from "@/components/Personas/SharedDataTablePersonasColumns";
import { personasData } from "@/lib/Personas/PersonasService";

export const Personas = () => {
  return (
    <>
      <p className="text-2xl ">Personas</p>
      <FiltrosPersonas />
      <SharedDataTable columns={columnsPersonas} data={personasData} />
    </>
  );
};
