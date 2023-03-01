import './App.css';
import { AddTodo } from './components/AddTodo/AddTodo';
import { ListTodo } from './components/ListTodo/ListTodo';
import { ModalTodo } from './components/ModalTodo/ModalTodo';
import { useState } from 'react';

let idEl = null;

function App() {

  const [todos, setTodos] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
 
 const changeStatus = (id) => {
  const result = todos.map(item => {
    if(item.id === id) item.status = !item.status
    return item
  })
  setTodos(result)
 }

const findTodo = it => {
   idEl = it
}

  return (
    <div className="App">
      <AddTodo todo={setTodos}/>
      <ListTodo modalShow={setIsShowModal} listTodo={todos} idTodo={findTodo} status={changeStatus}/>
      {isShowModal && <ModalTodo listTodo={todos} id={idEl} modalShow={setIsShowModal} status={changeStatus}/>}
    </div>
  );
}

export default App;
