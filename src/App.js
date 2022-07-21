import './App.css';
import ListaTareas from './components/ListaTareas';
import logo from './images/logo.png';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img src={logo} className='logo' alt='logo' />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
