import { useState } from "react";

const Form=()=>{
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    return (
        <div>
            <h2>Fill the form:</h2>
            <form onSubmit={handelSubmit} >
                <label htmlFor="">Enter Name</label><br /><br />
                <input type="text" value={name} onChange={} />

            </form>
        </div>
    )
};

export default Form;