import { MapContainer, Polygon, TileLayer, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";

export const Mapa = () => {
  const poligonos: {
    id: number;
    nombre: string;
    coordenadas: LatLngTuple[];
    color: string;
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
        color: "green"
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
        color: "orange"
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
        color: "green"
      },
    ];

  return (
    <>
      <p className="text-2xl mb-4">Predios</p>
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
