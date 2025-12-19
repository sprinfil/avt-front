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
import { VerPersonsa } from "./views/Personas/VerPersonsa";

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
        element: <VerPersonsa />,
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
        path: "usuariosVer",
        element: <UsuariosVer />,
      },
      {
        path: "ventas",
        element: <Ventas />,
      },
    ],
  },
]);

export default router;
