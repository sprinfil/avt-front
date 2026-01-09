import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./views/Auth/Login";
import { GuestLayout } from "./components/GuestLayout/GuestLayout";
import { DefaultLayout } from "./components/DefaultLayout/DefaultLayout";
import { Zonas } from "./views/Zonas/Zonas";
import { Pagos } from "./views/Pagos/Pagos";
import { Personas } from "./views/Personas/Personas";
import { Usuarios } from "./views/Usuarios/Usuarios";
import { Ventas } from "./views/Ventas/Ventas";
import { UsuariosCrear } from "./views/Usuarios/UsuariosCrear";
import { UsuariosVer } from "./views/Usuarios/UsuariosVer";
import { CrearPersona } from "./views/Personas/CrearPersona";
import { VerPersona } from "./views/Personas/VerPersona";
import { VentasCrear } from "./views/Ventas/VentasCrear";
import { POSPredios } from "./views/Ventas/POSPredios";
import { VentasVer } from "./views/Ventas/VentasVer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="zonas" />,
      },
      {
        path: "zonas",
        element: <Zonas />,
      },
      {
        path: "pagos",
        element: <Pagos />,
      },
      {
        path: "personas",
        element: <Personas />,
      },
      {
        path: "personasCrear",
        element: <CrearPersona />,
      },
      {
        path: "personasVer",
        element: <VerPersona />,
      },
      {
        path: "usuarios",
        element: <Usuarios />,
      },
      {
        path: "usuariosCrear",
        element: <UsuariosCrear />,
      },
      {
        path: "usuariosVer/:idUser",
        element: <UsuariosVer />,
      },
      {
        path: "ventas",
        element: <Ventas />,
      },
      {
        path: "ventasCrear",
        element: <VentasCrear />,
      },
      {
        path: "ventasVer",
        element: <VentasVer />,
      },
      {
        path: "POSPredios",
        element: <POSPredios />,
      },
    ],
  },
]);

export default router;
