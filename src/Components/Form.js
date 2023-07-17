import React,{useState} from 'react'
import './Form.css'
function Form(props) {
    const d = new Date();

    const [inputTodo,setInputTodo] = useState({
        id:'',
        todo:'',
        status:'',
    })
    const changeTodo = (e) =>{
        setInputTodo({todo:e.target.value})
    }
    const submitFun = (e) =>{
        e.preventDefault()
        const formData = {
            id : d.getTime(),
            todo: inputTodo.todo,
            status: 'Active',
        }
        props.getData(formData)
        setInputTodo({
            id:'',
            todo:'' 
        })
    }
  return (
    <form action="">
        <h1>What's The Plan For Today?</h1>
        <input type="text" onChange={changeTodo} value={inputTodo.todo} placeholder='Add a TODO' />
        <input type="submit" onClick={submitFun} value="Add TODO" />
    </form>
  )
}

export default Form