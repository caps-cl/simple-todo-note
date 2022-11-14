import { useEffect, useState } from 'react'
import { Formulario } from './Formulario'
import { Todo } from './Todo'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if(localStorage.getItem('todos')){
      setTodos(JSON.parse(localStorage.getItem('todos')))   // guardando notas todos, guardando estado  
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const agregarTodo = todo => {
    setTodos([...todos, todo])
  }

  const eliminarTodo = id => {
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }

  const editarTodo = id => {
    const editTodo = todos.map(item => (
      item.id === id ? {...item, estado: !item.estado} : item
    ))

    setTodos(editTodo)
  }

  return (
    <div className='row'>
      <div className='col-4'>
      <Formulario agregarTodo={agregarTodo}/>

      </div>  
      <div className='col-8'>
      <h3>Lista todo</h3>
      <ul className='list-group list-group-flush '>
        {todos.map((item) => (
          <Todo 
            key={item.id} 
            todo={item}
            eliminarTodo={eliminarTodo}
            editarTodo={editarTodo}
          />                // mostrar item renderizandose "todos"
        ))}
      </ul>
      </div>
    </div>
     
  )
}
