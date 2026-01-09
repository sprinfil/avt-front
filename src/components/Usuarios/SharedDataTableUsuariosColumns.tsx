import { icons } from "@/lib/icons";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import type { GetIndexUser } from "@/lib/User/UserTypes";
import { formatearFecha } from "@/lib/tools";
import { useToggleStatusUser } from "@/lib/User/hooks/useToggleStatusUser.hook";
import { SharedButton } from "../SharedButton/SharedButton";

export const columnsUsuarios = [
  {
    accessorKey: "name",
    header: "Nombre",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("status")}</div>
    // ),
  },
  {
    accessorKey: "username",
    header: "Usuario",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("status")}</div>
    // ),
  },
  {
    accessorKey: "created_at",
    header: "Fecha de creación",
    cell: ({ row }: { row: any }) => (
      <div className="capitalize">
        {formatearFecha(row.getValue("created_at"))}
      </div>
    ),
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }: { row: any }) => {
      const navigate = useNavigate();
      let user: GetIndexUser = row?.original;
      const { loading, toggleStatus } = useToggleStatusUser();

      return (
        <>
          <div className="w-full flex justify-center">
            <div className="flex gap-2 items-center ">
              <Button
                onClick={() => {
                  navigate("/dashboard/usuariosVer/" + user?.id);
                }}
              >
                {icons.ver()}
              </Button>

              {user?.is_active ? (
                <>
                  <SharedButton
                    variant={"destructive"}
                    className="flex items-center"
                    loading={loading}
                    onClick={() => {
                      toggleStatus({
                        userId: user.id,
                        is_active: !user.is_active,
                      });
                    }}
                  >
                    <p>Inactivar </p>
                    {icons.cancelar()}
                  </SharedButton>
                </>
              ) : (
                <>
                  <SharedButton
                    variant={"positivo"}
                    loading={loading}
                    onClick={() => {
                      toggleStatus({
                        userId: user.id,
                        is_active: !user.is_active,
                      });
                    }}
                  >
                    <p>Activar</p> {icons.confirmar()}
                  </SharedButton>
                </>
              )}
            </div>
          </div>
        </>
      );
    },
  },
];
