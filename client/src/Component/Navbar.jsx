import React, { useState } from 'react'
import '../style/Navbar.css'
import logo from '../images/logo.png'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    const[value,setValue]=useState(true)
    const handleClick=()=>{
        localStorage.removeItem('token')
        navigate('/')
    }

    const handleHam=()=>setValue(!value);
    return (
        <>
            {/* <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-body py-2 pe-3 border-end" href="/"><small>FAQs</small></a>
                        <a className="text-body py-2 px-3 border-end" href="/"><small>Support</small></a>
                        <a className="text-body py-2 px-3 border-end" href="/"><small>Privacy</small></a>
                        <a className="text-body py-2 px-3 border-end" href="/"><small>Policy</small></a>
                        <a className="text-body py-2 ps-3" href="/"><small>Career</small></a>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-end">
                    <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                        <div className="me-3 pe-3 border-end py-2">
                            <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@example.com</p>
                        </div>
                        <div className="py-2">
                            <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
            <nav className="navbar">
                <Link to="/" className="navbar-title">
                    <img src={logo} alt="" className='logo' />
                    <h1>STARTUP STORY</h1>
                </Link>
                <div className={value?"navbar-nav":"navbar-nav show"} onClick={handleHam}>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/service" className="nav-item">Service</Link>
                    <Link to="/blog" className="nav-item ">Blogs</Link>
                    <Link to="/contact" className="nav-item ">Contact</Link>
                    {!localStorage.getItem('token')?<Link  to="/login" className="btn">Login</Link>:
                    <button onClick={handleClick} className="btn">Logout</button>}
                </div>
                <div className='hamburger' style={{color:value?"black":"white"}} onClick={handleHam}>
                    <i className={value?"fa-solid fa-bars":"fa-solid fa-xmark"}></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar
