import React, { useState } from 'react'
import Todo from './todo';

function TodoList() {
  const [text,gettext]=useState([]);
  const[inputvalue,setvalue]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(inputvalue.trim()){
      gettext([...text,inputvalue]);
      setvalue("");
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputvalue} placeholder='Add Todo' />
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {text.map((text,index)=>(
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
