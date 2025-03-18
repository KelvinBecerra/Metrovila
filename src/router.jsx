import { createBrowserRouter } from "react-router-dom";
import Moldepages from "./layout/Moldepages";
import Formulariomolde from "./layout/Formulariomolde";
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Inisesion from "./pages/Inisesion";
import Rutas from "./pages/Rutas";
import RutaDetalle from "./pages/RutaDetalle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Moldepages />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/TuSesion",
        element: <Inisesion />,
      },
    ],
  },
  {
    path: "/formulario",
    element: <Formulariomolde />,
    children: [
      {
        path: "/formulario",
        element: <Formulario />,
      },
    ],
  },
  {
    path: "/iniciosesion",
    element: <Inisesion />,
  },
  {
    path: "/rutas",
    element: <Rutas />, // Ruta principal para ver todas las rutas.
  },
  {
    path: "/rutas/:rutaId",
    element: <RutaDetalle />, // Ruta para detalles individuales.
  },
]);
