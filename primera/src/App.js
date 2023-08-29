import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/Navbar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Hola pibe!"}/>
    </div>
  );
}

export default App;
