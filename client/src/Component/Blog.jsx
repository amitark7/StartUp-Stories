import React from 'react'
import '../style/Blog.css'

const Blog = ({title,desc}) => {
  return (
    <div className='blog-card'>
        <div className="blog-body">

        <div className="blog-img">
            <img src="https://amitark7.github.io/StartUp-Story/img/blog-1.jpg" alt="" />
        </div>
        <div className="blog-text">
            <h1 className="blog-title"><a href="/">{title}</a></h1>
            <p>{desc}</p>
        </div>
        </div>
    </div>
  )
}

export default Blog
