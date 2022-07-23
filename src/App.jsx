import { useState } from 'react'

//Importacion de Componets, imgs
import Header from './components/Header';
import Modal from './components/Modal';
import NuevoGasto from './img/nuevo-gasto.svg';

function App() {

  //Definimos states que pasaraon por varios componentes
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  return (
    <div>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img src={NuevoGasto} alt="Nuevo Gasto" onClick={handleNuevoGasto} />
        </div>
      )}

      {modal && 
        <Modal 
        setModal = {setModal}
        setAnimarModal = {setAnimarModal}
        animarModal = {animarModal} />
      }
      
    </div>
  );_
}

export default App
