import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './index.css';
import App from './app';
//aqui es donde se aplica el diseno de toda la pagina
// simplemente se le pone un identificador a las etiquetas
// y con eso se le aplica el css desde el archivo css
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>
);
