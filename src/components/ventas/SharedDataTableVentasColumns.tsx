import { icons } from "@/lib/icons";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { formatearDinero, formatearFecha } from "@/lib/tools";

export const columnsVentas = [
  {
    accessorKey: "zona",
    header: "Zona",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("status")}</div>
    // ),
  },
  {
    accessorKey: "contrato",
    header: "Contrato",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("status")}</div>
    // ),
  },
  {
    accessorKey: "comprador",
    header: "Comprador",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("status")}</div>
    // ),
  },
  {
    accessorKey: "clave_catastral",
    header: "Clave catastral",
    // cell: ({ row }) => (
    //   <div className="capitalize">{row.getValue("status")}</div>
    // ),
  },
  {
    accessorKey: "proximo_cobro",
    header: "Próximo cobro",
    cell: ({ row }: { row: any }) => (
      <div className="capitalize">
        {formatearFecha(row.getValue("proximo_cobro"))}
      </div>
    ),
  },
  {
    accessorKey: "monto",
    header: "Monto",
    cell: ({ row }: { row: any }) => (
      <div className="capitalize">{formatearDinero(row.getValue("monto"))}</div>
    ),
  },
  {
    accessorKey: "expiro",
    header: "Expiro la fecha",
    cell: ({ row }: { row: any }) => {
      const data = row.original;

      return (
        <>
          {data.expiro ? (
            <>
              <div className="bg-red-500 text-white px-3 py-1 rounded-md">
                <p>Expiro</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-green-600 text-white px-3 py-1 rounded-md">
                <p>A tiempo</p>
              </div>
            </>
          )}
        </>
      );
    },
  },
  {
    id: "actions",
    header: "Contactar con el comprador",
    cell: ({ row }: { row: any }) => {
      const navigate = useNavigate();

      return (
        <>
          <div className="w-full flex gap-2">
            <Button className="bg-green-700 hover:bg-green-800">
              Whatsapp {icons.whatsapp()}
            </Button>
            <Button className="bg-green-700 hover:bg-green-800">
              Llamar {icons.telefono()}
            </Button>
            <Button
              onClick={() => {
                navigate("/dashboard/ventasVer");
              }}
            >
              {icons.ver()}
            </Button>
          </div>
        </>
      );
    },
  },
];
