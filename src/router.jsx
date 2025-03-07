import { createBrowserRouter,Routes,Route } from "react-router-dom";
import Moldepages from "./layout/Moldepages";
import Formulariomolde from "./layout/Formulariomolde";
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Inisesion from "./pages/Inisesion"
import Rutas from "./pages/Rutas";

export const router = createBrowserRouter(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/formulario" element={<Formulario/>}/>
        <Route path="/inisesion" element={<Inisesion/>}/>
        <Route path="/rutas" element={<Rutas/>}/>
    </Routes>
);