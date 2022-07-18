import {useState} from 'react'
import Mensaje from './Mensaje';

function NuevoPresupuesto({ presupuesto, setPresupuesto }) {

  //Variable de mensaje de error
  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault();

    //Validamos si los datos del input es Numero y mayor a cero
    if(!Number(presupuesto) || Number(presupuesto) < 0){
      setMensaje('No es un presupuesto Valido')
    } else {
      console.log('Si es un presupuesto Valido')
    }

  }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>
                <input
                    className = 'nuevo-presupuesto'
                    type = 'text'
                    value = {presupuesto}
                    onChange = { e => setPresupuesto(e.target.value)}
                    placeholder = 'Añadir Presupuesto'
                    />
            </div>
            <input type="submit" value='Añadir' />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }

        </form>
    </div>
  )
}

export default NuevoPresupuesto