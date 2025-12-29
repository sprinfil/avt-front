import { BreadCrumb } from "@/components/BreadCrumb/BreadCrumb";
import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable";
import { PosMapaMostrarPredio } from "@/components/POSPredios/PosMapaMostrarPredio/PosMapaMostrarPredio";
import { POSPrediosLetrasColumns } from "@/components/POSPredios/POSPrediosLetrasColumns";
import { POSPrediosPagosColumns } from "@/components/POSPredios/POSPrediosPagosColumns";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VerVentaComponent } from "@/components/ventas/VerVentaComponent/VerVentaComponent";
import { icons } from "@/lib/icons";
import ZustandPrincipal from "@/lib/ZustandPrincipal";
import { useNavigate } from "react-router-dom";

export const VentasVer = () => {
  const navigate = useNavigate();
  const { setOpcionMenu } = ZustandPrincipal();
  return (
    <>
      <p className="text-2xl ">Contrato no V00989</p>
      <BreadCrumb
        type="navigate"
        routes={[
          {
            nombre: "Ventas",
            route: "/dashboard/ventas",
          },
          {
            nombre: "Ver venta",
            route: "/dashboard/ventasVer",
          },
        ]}
      />
      <div className="mt-4 flex items-center gap-2">
        <Button>Contrato {icons.pdf()}</Button>
        <Button>Anticipo {icons.pdf()}</Button>
        <Button variant={"destructive"}>
          Cancelar venta {icons.eliminar()}
        </Button>
        <Button
          variant={"accion"}
          onClick={() => {
            navigate("/dashboard/POSPredios");
            setOpcionMenu("POSPredios");
          }}
        >
          Abonar {icons.pos()}
        </Button>
      </div>
      <div className="pb-[100px] mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <VerVentaComponent />
        <PosMapaMostrarPredio height="500px" />
      </div>
    </>
  );
};
