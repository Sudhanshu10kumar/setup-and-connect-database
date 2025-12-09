import { useState } from "react";
import Counter from "./Counter.jsx";

const Buttons1=()=>{
    const [clicked,setClicked]=useState(0);


    const showStatus=()=>{
        setClicked(clicked+1);
    };
    return (
    <div>
      <button onClick={showStatus} className='Button1'>Cleack me For Status</button>
      <div>{clicked}</div>
    </div>
    
    
  )
}
export default Buttons1;