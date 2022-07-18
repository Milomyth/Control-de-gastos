import React from 'react'

function NuevoPresupuesto({ presupuesto, setPresupuesto }) {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
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

        </form>
    </div>
  )
}

export default NuevoPresupuesto