import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable";
import { FiltrosUsuarios } from "@/components/Usuarios/FiltrosUsuarios";
import { columnsUsuarios } from "@/components/Usuarios/SharedDataTableUsuariosColumns";
import { useUserIndex } from "@/lib/User/hooks/useUserIndex.hook";

export const Usuarios = () => {
  const { data, isLoading } = useUserIndex();

  return (
    <>
      <p className="text-2xl ">Usuarios</p>
      <FiltrosUsuarios />
      <SharedDataTable
        loading={isLoading}
        columns={columnsUsuarios}
        data={data?.data?.data}
      />
    </>
  );
};
