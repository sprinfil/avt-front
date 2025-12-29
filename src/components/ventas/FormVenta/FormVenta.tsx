import { SharedComboBox } from "@/components/SharedComboBox/SharedComboBox";
import { SharedInput } from "@/components/SharedInput/SharedInput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapaSeleccionarPredio } from "./MapaSeleccionarPredio";
import { MetodoPago } from "./MetodoPago";
import { Button } from "@/components/ui/button";

export const FormVenta = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Card>
          <CardHeader>
            <CardTitle>Comprador</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <SharedComboBox
                label={
                  <>
                    <div className="flex items-center gap-2">
                      Seleccionar Comprador o{" "}
                      <p className="hover:underline cursor-pointer font-medium text-accion">
                        Crear comprador
                      </p>
                    </div>
                  </>
                }
                data={[]}
                defaultValue={{}}
              />
              <SharedComboBox
                label={
                  <>
                    <div className="flex items-center gap-2">
                      Seleccionar Aval o{" "}
                      <p className="hover:underline cursor-pointer font-medium text-accion">
                        Crear Aval
                      </p>
                    </div>
                  </>
                }
                data={[]}
                defaultValue={{}}
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Predio</CardTitle>
          </CardHeader>
          <CardContent className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=" flex flex-col gap-3">
              <SharedComboBox label="Predio" data={[]} defaultValue={{}} />
              <SharedInput placeholder="Zona" label="Zona" />
              <SharedInput placeholder="Dueño" label="Dueño" />
            </div>
            <MapaSeleccionarPredio />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Método de pago</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <MetodoPago />
          </CardContent>
        </Card>
      </div>
    </>
  );
};
