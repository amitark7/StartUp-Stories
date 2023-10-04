import React, { useState } from 'react'
import '../style/BlogPost.css'

const BlogPost = () => {
    const host="http://localhost:5000/blog"
    const[blog,setBlogs]=useState({title:'',desc:''})

    const onSubmit=async (e) => {
      e.preventDefault();
        const response= await fetch(`${host}/createblog`,{
            method:'Post',
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({title:blog.title,desc:blog.desc}),
        })
        const data=response.json()
        alert("Blog Added Successfully")
        console.log(data)
        setBlogs({title:'',desc:''})
    }

    const onchange=(e)=>{
        setBlogs({...blog,[e.target.name]:e.target.value})
    }
  return (
    <div >
       <div className='blog-box'>
      <form onSubmit={onSubmit}>
        <h1>Add Blog</h1>
        <div className="input-box">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={onchange} value={blog.title}/>
        </div>
        <div className="input-box">
            <label htmlFor="desc">Description</label>
            <input type="text" name="desc" id="desc" onChange={onchange} value={blog.desc} />
        </div>
        <button className='btn'>Add</button>
      </form>
    </div>
    </div>
  )
}

export default BlogPost
