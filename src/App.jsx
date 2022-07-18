import { useState } from 'react'

//Importacion de Componets
import Header from './components/Header';

function App() {

  //Definimos states que pasaraon por varios componentes
  const [presupuesto, setPresupuesto] = useState(0);

  return (
    <div>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
      />
    </div>
  );_
}

export default App
