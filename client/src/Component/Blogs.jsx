import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import '../style/Blogs.css'

const Blogs = () => {
    const[blogs,setBlogs]=useState([])
    const host="https://startup-stories.onrender.com/blog"

    const GetBlog=async () => {
        const response= await fetch(`${host}`,{
            method:'GET',
            headers:{
                "Content-type":"application/json"
            }
        })
        const data=await response.json()
       setBlogs(data)
    }

    useEffect(()=>{
        GetBlog()
    },[])
    return (
        <>
          <div className="container-fluid p-5 bg-dark">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-4">Our Blogs</h1>
                    </div>
                </div>
            </div>
        <div className='container-fluid py-6'>
            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ textAlign: 'center', color: '#111', fontSize: '3rem', lineHeight: '1.2', marginBottom: '0.5rem' }}>Our Latest Blog!!</h1>
                <hr style={{ height: '1px', width: '15%', backgroundColor: '#F3525A', margin: 'auto', opacity: '0.3' }} />
            </div>
            <div className="blogs">
                {blogs.map((e,index)=>{
                return (
                    <Blog title={e.title} desc={e.desc}/>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Blogs
