import './App.css';
import { AddTodo } from './components/AddTodo/AddTodo';
import { ListTodo } from './components/ListTodo/ListTodo';
import { ModalTodo } from './components/ModalTodo/ModalTodo';
import { useState } from 'react';

let idEl = null;

function App() {

  const [todos, setTodos] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
 


const findTodo = it => {
   idEl = it
}

  return (
    <div className="App">
      <AddTodo todo={setTodos}/>
      <ListTodo modalShow={setIsShowModal} listTodo={todos} idTodo={findTodo}/>
      {isShowModal && <ModalTodo listTodo={todos} id={idEl} modalShow={setIsShowModal}/>}
    </div>
  );
}

export default App;
