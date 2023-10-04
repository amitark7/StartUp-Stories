import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../style/Login.css'

const Login = (props) => {
  const[credential,setCredential]=useState({email:"",password:""});
  const navigate=useNavigate();
  
  const host = "http://localhost:5000/auth";
  const onSubmit=async (e)=>{
    e.preventDefault();
    const response = await fetch(`${host}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email:credential.email,password:credential.password }),
    });
    const json= await response.json();
    if(json.success){
    localStorage.setItem('token',json.data)
      navigate("/admin");
      console.log("Login Successfully")
    }
    else{
        console.log("Invallid Password")
    }
  }

  const onchange=(e)=>{
    setCredential({...credential,[e.target.name]:e.target.value})
  }

  return (
    <div className='login-box'>
      <form onSubmit={onSubmit}>
        <h1>Admin Login</h1>
        <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={onchange} value={credential.email}/>
        </div>
        <div className="input-box">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={onchange} value={credential.password} />
        </div>
        <button className='btn'>Login</button>
      </form>
    </div>
  )
}

export default Login