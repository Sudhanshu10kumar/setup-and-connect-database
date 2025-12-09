import { useState } from 'react';
import './login.css'
const Login=()=>{
    const [formData,setformData]=useState({
        name:"",
        email:"",
        password:"",
    });

    const handlechange=(e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try{
        const res=await fetch("http://localhost:5000/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(formData),});
        const data=await res.json();
        console.log("Response",data);
        }catch(err){
        console.log("error",err);
        }
        
    };
    return (
        <div className="login">
            <form onSubmit={handlesubmit}>

                <div className="name">
                <label>Name:</label>
                <input type="text" value={formData.name} placeholder="abc" onChange={handlechange} /><br />
                </div>

                <div className="email">
                <label >Email: </label>
                <input  type="text" value={formData.email} placeholder="abc123@gmaill.com" onChange={handlechange}/><br />
                </div>

                <div className="password">
                <label>Password: </label>
                <input  type="text" value={formData.password} placeholder="123@qwe" onChange={handlechange} /><br />
                </div><br />

                <div className="submit">
                <button type="submit">Submit</button>
                <button className="reset" type="submit">Reset</button>
                </div>
            </form>
        </div>
    )

};
export default Login;