import { TodoList } from "./components/TodoList"

function App() {

  return (
    <>
    <nav className="navbar bg-light mb-2">
      <div className="d-flex">
        <a className="navbar-brand" href="#">
          <img src="https://img.icons8.com/quill/512/experimental-note-quill.png" alt="Bootstrap" width="30" height="24" />
        </a>  
        <p className="fs-3">Curso React </p>
      </div>
    </nav>
    <div className="container">
      <TodoList />
    </div>
    </>
    
  )
}

export default App
