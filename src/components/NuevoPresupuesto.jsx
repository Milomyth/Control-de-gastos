import {useState} from 'react'
import Mensaje from './Mensaje';

function NuevoPresupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {

  //Variable de mensaje de error
  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault();

    //Validamos si los datos del input es Numero y mayor a cero
    if(!presupuesto || presupuesto < 0){
      setMensaje('No es un presupuesto Valido')

      return
    }

    setMensaje('')
    setIsValidPresupuesto(true)


  }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>
                <input
                    className = 'nuevo-presupuesto'
                    type = 'number'
                    value = {presupuesto}
                    onChange = { e => setPresupuesto(Number(e.target.value))}
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