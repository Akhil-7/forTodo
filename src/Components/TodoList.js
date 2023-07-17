import React from 'react'
import './TodoList.css'
import { RiCloseCircleLine } from "react-icons/ri"
import { TiEdit } from "react-icons/ti";
function TodoList(props) {

    // const changeSts = () =>{
    //   props.getNewStatus('Completed',props.id)
    // }


  return (
    <div className='items' id={props.status} >
        <h3 className='listItem' onClick={props.status != 'Completed'? ()=>{props.getNewStatus('Completed',props.id)} : ()=>{}}>{props.todo}</h3>
        <div className="icons">
            {/* <input type="button" className='iconBtn' title='Edit' value="📝" /> */}
            <TiEdit className='iconBtn'/>
            {/* <input type="button"  className='iconBtn' title='Delete' /> */}
            <RiCloseCircleLine onClick={()=>{props.getNewStatus('Deleted',props.id)}} className='iconBtn'/>
        </div>
    </div>
  )
}

export default TodoList