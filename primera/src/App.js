import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/Navbar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error400 from '../src/componentes/error404';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path="/segunda-entrega/primera" element={<ItemListContainer />} /> {/* Ruta raíz */}
          <Route path="/segunda-entrega/primera/category/:categoryID" element={<ItemListContainer />} /> {/* Ruta con parámetro de categoría */}
          <Route path="/segunda-entrega/primera/item/:itemId" element={<ItemDetailContainer />} /> {/* Ruta con parámetro de artículo */}
          <Route path="*" element={<Error400 />} /> {/* Ruta para errores */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
