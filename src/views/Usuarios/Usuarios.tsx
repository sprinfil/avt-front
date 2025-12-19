import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable";
import { FiltrosUsuarios } from "@/components/Usuarios/FiltrosUsuarios";
import { columnsUsuarios } from "@/components/Usuarios/SharedDataTableUsuariosColumns";

export const Usuarios = () => {
  return (
    <>
      <p className="text-2xl ">Usuarios</p>
      <FiltrosUsuarios />
      <SharedDataTable
        columns={columnsUsuarios}
        data={[
          {
            name: "Josue Diaz",
            username: "josdzz",
            created_at: "2025-12-19 13:40:04",
          },
        ]}
      />
    </>
  );
};
