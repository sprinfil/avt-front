import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable";
import { FiltrosUsuarios } from "@/components/Usuarios/FiltrosUsuarios";
export const Usuarios = () => {
  return (
    <>
      <p className="text-2xl ">Usuarios</p>
      <FiltrosUsuarios/>
      <SharedDataTable />
    </>
  );
};
