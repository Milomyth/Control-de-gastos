import { useState } from 'react';

import CerrarBtn from '../img/cerrar.svg'

function Modal({setModal, setAnimarModal, animarModal}) {

    const[nombre, setNombre] = useState('');
    const[cantidad, setCantidad] = useState('');
    const[categoria, setCategoria] = useState('');

    const cerrarModal = () =>{

        setAnimarModal(false)

        setTimeout(() => {
          setModal(false)
        }, 500);
        
    }

  return (
    <div className="modal">
        <div className='cerrar-modal'>
            <img src={CerrarBtn} alt="Cerrar" onClick={cerrarModal} />
        </div>
        <form className={`formulario ${animarModal ? "animar" : "cerrar" }`}>
          <legend>Nuevo Gasto</legend>
          <div className='campo'>
            <label htmlFor="nombre">Nombre del Gasto</label>
            <input 
              id='nombre'
              type='text'
              placeholder='Añade nombre del Gasto' 
              value={nombre}
              onChange ={e => setNombre(e.target.value)}
            />
          </div>
          <div className='campo'>
            <label htmlFor="nombre">Cantidad</label>
            <input 
              id='cantidad'
              type='number'
              placeholder='Añade la cantidad del gasto Ej. 300'
              value={cantidad}
              onChange={e => setCantidad(Number(e.target.value))} 
            />
          </div>
          <div className='campo'>
            <label htmlFor="nombre">Categoria</label>
            <select id='categoria'
              value={categoria}
              onChange={ e => setCategoria(e.target.value)}
            >
              <option value=''>-- Seleccione una Categoria --</option>
              <option value='ahorro'>Ahorro</option>
              <option value='comida'>Comida</option>
              <option value='casa'>Casa</option>
              <option value='gastos'>Gastos Varios</option>
              <option value='ocio'>Ocio</option>
              <option value='salud'>Salud</option>
              <option value='suscripciones'>Suscripciones</option>
            </select>
          </div>
          <input 
            type='submit'
            value='Añadir Gasto'
          />
        </form>
    </div>
  )
}

export default Modal