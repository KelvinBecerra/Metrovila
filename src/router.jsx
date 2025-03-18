import { createBrowserRouter } from "react-router-dom";
import Moldepages from "./layout/Moldepages";
import Formulariomolde from "./layout/Formulariomolde";
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Inisesion from "./pages/Inisesion"
import Rutas from "./pages/Rutas";

import RutaDetalle from "./pages/RutaDetalle"; //NUEVO 

//asi fue como maneje las rutas en el proyecto
//hay una manera mas facil segun he visto, pero me parecio mas comoda esta
//
export const router = createBrowserRouter([
    {
        path:"/",
        element: <Moldepages/>,
        /*aqui se le esta asignando el diseno de pagina principal
        a las paginas que esten como hijos
        las cuales deberian ser las de inicio
         */
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/TuSesion",
                element: <Inisesion/>
            }
        ]
    },
    {/**aqui se le esta asignando el diseno a la pagina formulario */
        path:"/formulario",
        element: <Formulariomolde/>,
        children:[
            {
                path:"/formulario",
                element: <Formulario/>
            }
        ]
       
    },
    {
        path:"/iniciosesion",
        element: <Inisesion/>
    },
    {
        path: "/rutas/:rutaId",
        element: <RutaDetalle />, //(NUEVO)
    }
])