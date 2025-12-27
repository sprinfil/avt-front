import { BreadCrumb } from "@/components/BreadCrumb/BreadCrumb"
import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable"
import { PosMapaMostrarPredio } from "@/components/POSPredios/PosMapaMostrarPredio/PosMapaMostrarPredio"
import { POSPrediosLetrasColumns } from "@/components/POSPredios/POSPrediosLetrasColumns"
import { POSPrediosPagosColumns } from "@/components/POSPredios/POSPrediosPagosColumns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { icons } from "@/lib/icons"

export const VentasVer = () => {
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
        <Button variant={"destructive"}>Cancelar venta {icons.eliminar()}</Button>
        <Button variant={"accion"}>Abonar {icons.pos()}</Button>
      </div>
      <div className="pb-[100px] mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <Tabs defaultValue="contrato" className="h-[450px] overflow-auto">
              <TabsList>
                <TabsTrigger value="contrato">Contrato</TabsTrigger>
                <TabsTrigger value="pagos">Pagos</TabsTrigger>
                <TabsTrigger value="letras">Letras</TabsTrigger>
                <TabsTrigger value="escrituracion">Escrituracion</TabsTrigger>
              </TabsList>
              <TabsContent value="contrato" >
                <div className="flex-col gap-3 grid grid-cols-1 md:grid-cols-2 ">
                  <div>
                    <p className="font-medium">Folio de contrato</p>
                    <p className="text-gray-500">C0102</p>
                  </div>
                  <div>
                    <p className="font-medium">Clave catastral</p>
                    <p className="text-gray-500">123-234-345-234</p>
                  </div>
                  <div>
                    <p className="font-medium">Fecha del ultimo pago</p>
                    <p className="text-gray-500">20/11/2025</p>
                  </div>
                  <div>
                    <p className="font-medium">Meses atrasados</p>
                    <p className="text-gray-500">4</p>
                  </div>
                  <div>
                    <p className="font-medium">Comprador</p>
                    <p className="text-gray-500 hover:underline cursor-pointer flex gap-1 items-center">Marco Antonio Gonzalez {icons.link("w-4 h-4")}</p>
                  </div>
                  <div>
                    <p className="font-medium">Zona</p>
                    <p className="text-gray-500">Los girasoles</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Contactar</p>
                    <div className="flex gap-1">
                      <Button className="bg-green-700 hover:bg-green-800">
                        Whatsapp {icons.whatsapp()}
                      </Button>
                      <Button className="bg-green-700 hover:bg-green-800">
                        Llamar {icons.telefono()}
                      </Button>
                    </div>

                  </div>
                  <div>
                    <p className="font-medium mb-1">Subir contrato</p>
                    <Button>
                      Subir contrato {icons.agregar()}
                    </Button>
                  </div>
                </div>

              </TabsContent>
              <TabsContent value="pagos">
                <SharedDataTable data={[
                  { folio: "P001", monto: "$ 2,000.00", fecha: "26/12/2025" },
                  { folio: "P002", monto: "$ 2,000.00", fecha: "26/11/2025" },
                  { folio: "P003", monto: "$ 2,000.00", fecha: "26/10/2025" },
                  { folio: "P004", monto: "$ 2,000.00", fecha: "26/09/2025" },
                  { folio: "P005", monto: "$ 2,000.00", fecha: "26/08/2025" }
                ]} columns={POSPrediosPagosColumns} />
              </TabsContent>
              <TabsContent value="letras">
                <SharedDataTable data={[
                  { consecutivo: "1", monto: "$ 2,000.00", fecha_expiracion: "15/01/2025", estado: "pagada" },
                  { consecutivo: "2", monto: "$ 2,000.00", fecha_expiracion: "15/02/2025", estado: "pagada" },
                  { consecutivo: "3", monto: "$ 2,000.00", fecha_expiracion: "15/03/2025", estado: "pagada" },
                  { consecutivo: "4", monto: "$ 2,000.00", fecha_expiracion: "15/04/2025", estado: "pagada" },
                  { consecutivo: "5", monto: "$ 2,000.00", fecha_expiracion: "15/05/2025", estado: "pagada" },
                  { consecutivo: "6", monto: "$ 2,000.00", fecha_expiracion: "15/06/2025", estado: "expirada" },
                  { consecutivo: "7", monto: "$ 2,000.00", fecha_expiracion: "15/07/2025", estado: "pendiente" },
                  { consecutivo: "8", monto: "$ 2,000.00", fecha_expiracion: "15/08/2025", estado: "pendiente" },
                  { consecutivo: "9", monto: "$ 2,000.00", fecha_expiracion: "15/09/2025", estado: "pendiente" },
                  { consecutivo: "10", monto: "$ 2,000.00", fecha_expiracion: "15/10/2025", estado: "pendiente" }
                ]} columns={POSPrediosLetrasColumns} />
              </TabsContent>
              <TabsContent value="escrituracion">
                <p>Escrituracion</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <PosMapaMostrarPredio height="500px" />
      </div>
    </>
  )
}
