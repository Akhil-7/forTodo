import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodo] = useState([])
  const [newTodos, setNewTodo] = useState([])
  const valFromForm = (formData) =>{
    setTodo((preData)=>{
      return [formData,...preData]
    });
  }

  const changeStatus = (newStatus,id) => {

    todos.map((todo) => {
      if (todo.id == id){
        todo.status = newStatus
      }
    })
    setNewTodo(todos.filter(todo=>{
      return todo.status == 'Active' || todo.status == 'Completed'
    }))
  }

  // const filteredTodo = todos.filter(todo=>{
  //   return todo.status == 'Active' || todo.status == 'Completed'
  // })

  useEffect(()=>{
    setNewTodo(todos.filter(todo=>{
      return todo.status == 'Active' || todo.status == 'Completed'
    }))
  },[todos])
  

  return (
    <div className="App backTest">
     <div className="content">
       <Form getData={valFromForm}/>
        {
          newTodos.map(
            (obj, index)=>{
              return(
                <TodoList key={index} id={obj.id} todo={obj.todo} status={obj.status} getNewStatus={changeStatus}/>
              )
            }
          )
        }
       
     </div>
     
    </div>
  );
}

export default App;
