import React from 'react'

export const Todo = ({todo, eliminarTodo, editarTodo}) => {
  const { nombre, descripcion, fecha, estado, prioridad, id, } = todo

  return (
    <>
      {estado ?
        <li className="list-group-item list-group-item-action flex-column align-items-start">
          <del>

            <div className="d-flex w-100 justify-content-between ">
              <h5 className="mb-1">{nombre}</h5>
              <small>{fecha}</small>
            </div>
            <p className="mb-1">{descripcion}.</p>
            <div className='d-flex w-100 justify-content-between'>
              <small>{estado}</small>
              {prioridad ? <span class="badge text-bg-warning">Prioridad</span> : ''}
            </div>

          </del>
          <div className='d-grid gap-2 w-100 mt-4'>
            <button 
              className='btn btn-danger' 
              onClick={() => eliminarTodo(id)}
            >
              Eliminar
            </button>
            <button 
              className='btn btn-warning'
              onClick={() => editarTodo(id)}
            >
              Pendiente
            </button>
          </div>
          
        </li> :
        <li className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{nombre}</h5>
            <small>{fecha}</small>
          </div>
          <p className="mb-1">{descripcion}.</p>
          <div className='d-flex w-100 justify-content-between'>
            <small>{estado}</small>
            {prioridad ? <span class="badge text-bg-warning">Prioridad</span> : ''}
          </div>
           <div className='d-grid gap-2 w-100'>
            <button 
              className='btn btn-danger' 
              onClick={() => eliminarTodo(id)}
            >
              Eliminar
            </button>
            <button 
              className='btn btn-warning'
              onClick={() => editarTodo(id)}
            >
              Completado
            </button>
          </div>
        </li>
      }

    </>

  )
}
