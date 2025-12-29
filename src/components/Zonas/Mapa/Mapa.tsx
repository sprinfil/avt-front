import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import { SharedModal } from "@/components/SharedModal/SharedModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { icons } from "@/lib/icons";
import { SharedDataTable } from "@/components/DataTableShared/SharedDataTable";
import { POSPrediosPagosColumns } from "@/components/POSPredios/POSPrediosPagosColumns";
import { POSPrediosLetrasColumns } from "@/components/POSPredios/POSPrediosLetrasColumns";
import { VerVentaComponent } from "@/components/ventas/VerVentaComponent/VerVentaComponent";
import { useNavigate } from "react-router-dom";
import ZustandPrincipal from "@/lib/ZustandPrincipal";

export const Mapa = () => {
  type poligono = {
    id: number;
    nombre: string;
    coordenadas: LatLngTuple[];
    color: string;
    estado: string;
  };
  const [predioSeleccionado, setPredioSeleccionado] = useState<poligono | null>(
    null
  );
  const navigate = useNavigate();
  const { setOpcionMenu } = ZustandPrincipal();
  const poligonos: poligono[] = [
    {
      id: 1,
      nombre: "Zona Centro",
      coordenadas: [
        [24.142172268499717, -110.31321094561014],
        [24.1399741107463, -110.31569195161926],
        [24.13753715760073, -110.31223658688656],
        [24.141571277812027, -110.31234484896696],
      ],
      color: "green",
      estado: "disponible",
    },
    {
      id: 2,
      nombre: "predio 2",
      coordenadas: [
        [24.142213876541618, -110.3133087134092],
        [24.142742558002034, -110.31403290981024],
        [24.141925058894362, -110.31466054669112],
        [24.141567707342915, -110.31408655398809],
      ],
      color: "orange",
      estado: "noDisponible",
    },
    {
      id: 2,
      nombre: "predio 3",
      coordenadas: [
        [24.141869094314664, -110.3147375930408],
        [24.141552133072935, -110.31424139187537],
        [24.140831763691804, -110.31504433557942],
        [24.14108698073685, -110.31537814363615],
      ],
      color: "green",
      estado: "disponible",
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <p className="text-2xl mb-4">Predios</p>
      <SharedModal
        open={openModal}
        setOpenModal={setOpenModal}
        title="Predio 1234-3421-3544-2343"
        trigger={<Button className="hidden">mostrarPredio</Button>}
        contentStyles="min-w-[80%]"
        children={
          <>
            <div className="h-[70vh] overflow-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent>
                  <div className="flex-col gap-3 grid grid-cols-1 md:grid-cols-2 ">
                    <div>
                      <p className="font-medium">Clave catastral</p>
                      <p className="text-gray-500">123-234-345-234</p>
                    </div>
                    <div>
                      <p className="font-medium">Tipo predio</p>
                      <p className="text-gray-500">U</p>
                    </div>
                    <div>
                      <p className="font-medium">Activo</p>
                      <p className="text-gray-500">S</p>
                    </div>
                    <div>
                      <p className="font-medium">Propietario</p>
                      <p className="text-gray-500">
                        {" "}
                        GOBIERNO DEL ESTADO DE B.C.S
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-gray-500">
                        FORJADORES DE SUBCALIFORNIA E/SIN NOMBRE Y VERACRUZ
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Superficie construida</p>
                      <p className="text-gray-500">0</p>
                    </div>
                    <div>
                      <p className="font-medium">Superficie terreno</p>
                      <p className="text-gray-500">18787</p>
                    </div>
                    <div>
                      <p className="font-medium">Valor catastral</p>
                      <p className="text-gray-500">0</p>
                    </div>
                    <div>
                      <p className="font-medium">Valor total</p>
                      <p className="text-gray-500">15240014.4</p>
                    </div>
                    <div>
                      <p className="font-medium">Tasa</p>
                      <p className="text-gray-500">0</p>
                    </div>
                    <div>
                      <p className="font-medium">Manzana</p>
                      <p className="text-gray-500">NA</p>
                    </div>
                    <div>
                      <p className="font-medium">Area</p>
                      <p className="text-gray-500">22408.402</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {predioSeleccionado?.estado == "disponible" ? (
                <div className="h-full flex items-center justify-center">
                  Predio disponible,{" "}
                  <p
                    className="ml-1 hover:underline text-accion cursor-pointer"
                    onClick={() => {
                      navigate("/dashboard/ventasCrear");
                      setOpcionMenu("ventas");
                    }}
                  >
                    {" "}
                    Crear contrato
                  </p>
                </div>
              ) : (
                <>
                  <VerVentaComponent />
                </>
              )}
            </div>
          </>
        }
      />
      <MapContainer
        center={[24.139971095859845, -110.3137883959629]}
        zoom={16}
        style={{ height: "500px", width: "100%", borderRadius: "20px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {poligonos.map((poly) => (
          <Polygon
            key={poly.id}
            positions={poly.coordenadas}
            pathOptions={{ color: poly.color }}
            eventHandlers={{
              click: (e) => {
                // console.log("Polígono clickeado:", poly);
                // console.log("LatLng:", e.latlng);
                setOpenModal(true);
                setPredioSeleccionado(poly);
              },
            }}
          >
            {/* <Popup>
              <strong>Dueño: Jesus Andres Vazquez</strong>
              <br />
              <strong>C.C: 1234-4355-5644-7655</strong>
            </Popup> */}
          </Polygon>
        ))}
      </MapContainer>
    </>
  );
};
