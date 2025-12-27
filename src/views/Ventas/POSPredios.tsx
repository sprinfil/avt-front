import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable"
import { PosMapaMostrarPredio } from "@/components/POSPredios/PosMapaMostrarPredio/PosMapaMostrarPredio"
import { POSPrediosLetrasColumns } from "@/components/POSPredios/POSPrediosLetrasColumns"
import { POSPrediosPagosColumns } from "@/components/POSPredios/POSPrediosPagosColumns"
import { PosSeleccionarMetodoPago } from "@/components/POSPredios/PosSeleccionarMetodoPago/PosSeleccionarMetodoPago"
import { SharedInput } from "@/components/SharedInput/SharedInput"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapaSeleccionarPredio } from "@/components/ventas/FormVenta/MapaSeleccionarPredio"
import { Mapa } from "@/components/Zonas/Mapa/Mapa"

export const POSPredios = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <SharedInput label="Clave catastral o folio de contrato" placeholder="Clave catastral o folio de contrato " />
          <Card>
            <CardContent>
              <Tabs defaultValue="contrato" className="h-[450px] overflow-auto">
                <TabsList>
                  <TabsTrigger value="contrato">Contrato</TabsTrigger>
                  <TabsTrigger value="pagos">Pagos</TabsTrigger>
                  <TabsTrigger value="letras">Letras</TabsTrigger>
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
                      <p className="text-gray-500">Marco Antonio Gonzalez</p>
                    </div>
                    <div>
                      <p className="font-medium">Zona</p>
                      <p className="text-gray-500">Los girasoles</p>
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
              </Tabs>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-3">
          <PosMapaMostrarPredio />
          <PosSeleccionarMetodoPago />
        </div>
      </div>
    </>
  )
}
