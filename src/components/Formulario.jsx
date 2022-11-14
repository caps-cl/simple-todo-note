import moment from "moment";
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "../hooks/useForm";


const initialState ={
  nombre: '',
  descripcion: '',
  estado: 'pendiente',
  prioridad: false
}

export const Formulario = ({ agregarTodo }) => {
  const {inputs, handleChange, resetForm} = useForm(initialState)

  const { nombre, descripcion, estado, prioridad } = inputs

 

  const handleSubmit = (event) => {
    event.preventDefault();

    if(nombre.trim().length <= 1){
      event.target[0].focus();
      Swal.fire({
        title: 'Error!',
        text: 'No deje el nombre en blanco',
        icon: 'error',
      });
      return
    }

    if(descripcion.trim().length <= 1)  {
      event.target[1].focus();
      Swal.fire({
        title: 'Error!',
        text: 'No deje la descripcion en blanco',
        icon: 'error',
      });
      return
    }

    Swal.fire({
      title: 'Exito!',
      text: 'Tarea agregada',
      icon: 'success',
    });

    agregarTodo({
      nombre: nombre, 
      descripcion: descripcion,
      estado: estado === 'pendiente' ? false : true,
      prioridad: prioridad,
      id: uuidv4(),
      fecha: moment().format('llll')
    })

    resetForm()
  }

  return (
    <>
      <h3>Agregar todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="nombre"
          onChange={handleChange}
          placeholder="Ingrese el nombre"
          type="text"
          value={nombre}
        />
        <textarea
          className="form-control mb-2"
          name="descripcion"
          onChange={handleChange}
          placeholder="Ingrese descripcion"
          value={descripcion}
        />
        <select 
          className='form-control mb-2' 
          name="estado" 
          onChange={handleChange}
          value={estado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check">
          <input
            checked={prioridad}
            className="form-check-input"
            id="flexCheckDefault"
            name="prioridad"
            onChange={handleChange}
            type="checkbox"
          />
          <label 
            className="form-check-label" 
            htmlFor="flexCheckDefault"
          >
            Dar Prioridad
          </label>
          
        </div>
        <button type="submit" className='btn btn-primary'>Agregar</button>
      </form>
    </>
  )
}
