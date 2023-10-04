import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Admin.css'
import BlogPost from './BlogPost'

const Admin = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/admin')
        }else{
            navigate('/login')
        }
    })
  return (
    <div className='container-fluid adminpage'>
      <h1>Welcome to Admin Page</h1>
      <BlogPost/>
    </div>
  )
}

export default Admin
