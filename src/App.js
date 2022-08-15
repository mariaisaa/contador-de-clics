import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import imagenFlor from './imagenes/imagen-flor.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState (0);
  
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  
  return (
    <div className= 'App'> 
      <div className= 'imagen-flor-contenedor'>
        <img 
          className='imagen-flor'
            src= {imagenFlor} 
            alt= 'Logo flor' />
      </div>
      <div className= 'contenedor-principal'>
        <Contador numClics= {numClics} />

        <Boton 
        texto= 'clic' 
        esBotonDeClic= {true}
        manejarClic= {manejarClic} />

        <Boton 
        texto= 'Reiniciar'
        esBotonDeClic= {false}
        manejarClic= {reiniciarContador} />

      </div>
    </div>
    
    
  );
}

export default App;
