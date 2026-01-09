import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable";
import { FiltrosUsuarios } from "@/components/Usuarios/FiltrosUsuarios";
import { columnsUsuarios } from "@/components/Usuarios/SharedDataTableUsuariosColumns";
import { useUserIndex } from "@/lib/User/hooks/useUserIndex.hook";
import type { userIndexParams } from "@/lib/User/UserTypes";
import { useState } from "react";

export const Usuarios = () => {
  const [params, setParams] = useState<userIndexParams>({});
  const { data, isLoading } = useUserIndex(params);

  return (
    <>
      <p className="text-2xl ">Usuarios</p>
      <FiltrosUsuarios params={params} setParams={setParams} />
      <SharedDataTable
        loading={isLoading}
        columns={columnsUsuarios}
        data={data?.data?.data?.items}
      />
    </>
  );
};
