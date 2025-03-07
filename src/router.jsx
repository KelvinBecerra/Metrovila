import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Moldepages from './layout/Moldepages';
import Formulariomolde from './layout/Formulariomolde';
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import Inisesion from './pages/Inisesion';
import Rutas from './pages/Rutas';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/formulario', element: <Formulario /> },
  { path: '/inisesion', element: <Inisesion /> },
  { path: '/rutas', element: <Rutas /> }
];

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
