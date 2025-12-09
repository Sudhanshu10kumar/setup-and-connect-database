import { useState } from "react";

const Todo=()=>{
    const [TaskNo,addTask]=useState(0);

const add=()=>{
    addTask(TaskNo+1);
};

const task=()=>{
    addTask(TaskNo+2);
};

    return (
        <div>
            <h3>Welcome todo App </h3>
            <button onClick={add} className="counter">Add Task</button>
            <div>{TaskNo}</div>
            <div><h3>{task}</h3></div>
        </div>
    )
}

export default Todo;