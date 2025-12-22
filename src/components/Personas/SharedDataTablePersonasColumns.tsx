import { icons } from "@/lib/icons";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const columnsPersonas = [
  {
    accessorKey: "nombre",
    header: "Nombre",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("status")}</div>
    // ),
  },
  {
    accessorKey: "curp",
    header: "CURP",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("status")}</div>
    // ),
  },
  {
    accessorKey: "rfc",
    header: "RFC",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("status")}</div>
    // ),
  },
  {
    accessorKey: "created_at",
    header: "Fecha de creación",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("status")}</div>
    // ),
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      const navigate = useNavigate();
      return (
        <>
          <Button
            onClick={() => {
              navigate("/dashboard/personasVer");
            }}
          >
            {icons.ver()}
          </Button>
        </>
      );
    },
  },
];
