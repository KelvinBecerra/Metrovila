import { createBrowserRouter } from "react-router-dom";
import Moldepages from "./layout/moldepages";

import Home from "./pages/Home";
import Formulario from "./pages/Formulario"
import Inisesion from "./pages/Inisesion"
import Rutas from "./pages/Rutas";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Moldepages/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
        ]
    },
    {
        path:"/formulario",
        element: <Formulario/>
    },
    {
        path:"/iniciosesion",
        element: <Inisesion/>
    },
    {
        path:"/rutas",
        element: <Rutas/>
    }
])