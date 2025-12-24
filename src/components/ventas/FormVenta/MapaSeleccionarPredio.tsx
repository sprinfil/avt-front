import { MapContainer, Polygon, TileLayer, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";

export const MapaSeleccionarPredio = () => {
  const poligonos: {
    id: number;
    nombre: string;
    coordenadas: LatLngTuple[];
  }[] = [
    {
      id: 1,
      nombre: "Zona Centro",
      coordenadas: [
        [24.142172268499717, -110.31321094561014],
        [24.1399741107463, -110.31569195161926],
        [24.13753715760073, -110.31223658688656],
        [24.141571277812027, -110.31234484896696],
      ],
    },
  ];

  return (
    <>
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
            pathOptions={{ color: "black" }}
          >
            <Popup>
              <strong>Dueño: Jesus Andres Vazquez</strong>
              <br />
              <strong>C.C: 1234-4355-5644-7655</strong>
            </Popup>
          </Polygon>
        ))}
      </MapContainer>
    </>
  );
};
