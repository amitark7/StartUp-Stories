import React from 'react'
import '../style/Footer.css'
import { Link } from 'react-router-dom'
import Update from './Update'


const Footer = () => {
    return (
        <>
            <Update />
            <div className='container-fluid container'>
                <div className='footer'>
                    <div className='col-6'>
                        <h6 className='text1'>Solutions</h6>
                        <ul>
                            <li className='py-1 cursor-pointer hover:text-blue-400'><i class="fa-solid fa-arrow-right"></i> Marketing</li>
                            <li className='py-1 cursor-pointer hover:text-blue-400'><i class="fa-solid fa-arrow-right"></i>Analytics</li>
                            <li className='py-1 cursor-pointer hover:text-blue-400'><i class="fa-solid fa-arrow-right"></i>Commerce</li>
                            <li className='py-1 cursor-pointer hover:text-blue-400'><i class="fa-solid fa-arrow-right"></i>Data</li>
                            <li className='py-1 cursor-pointer hover:text-blue-400'><i class="fa-solid fa-arrow-right"></i>Cloud</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <h6 className='text1'>Company</h6>
                        <ul>
                            <li className='py-1 cursor-pointer hover:text-blue-400'><i class="fa-solid fa-arrow-right"></i><Link to='/' className='link'>Home</Link></li>
                            <li className='py-1 cursor-pointer hover:text-blue-400'><i class="fa-solid fa-arrow-right"></i><Link to='/about' className='link'>About Us</Link></li>
                            <li className='py-1 cursor-pointer hover:text-blue-400'><i class="fa-solid fa-arrow-right"></i><Link to='/service' className='link'>Our Services</Link></li>
                            <li className='py-1 cursor-pointer hover:text-blue-400'><i class="fa-solid fa-arrow-right"></i><Link to='/blog' className='link'>Latest Blog Post</Link></li>
                            <li className='py-1 cursor-pointer hover:text-blue-400'><i class="fa-solid fa-arrow-right"></i><Link to='/contact' className='link'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <h6 className='text1'>Get In Touch</h6>
                        <p className='mb-2'><i class="fa-solid fa-location-dot"></i>Lucknow ,Uttar Pradesh </p>
                        <p className='mb-2'><i class="fa-regular fa-envelope-open"></i>startup.storyy@gmail.com</p>
                        <p><i class="fa-solid fa-phone"></i>+1002936544</p>
                    </div>
                    <div className="col-6">
                        <h6 className='text1'>Follow Us</h6>
                        <div className="d-flex">
                            <a className='icons' href="https://twitter.com/StartUp__Story" ><i className='fab fa-twitter fw-normal'></i></a>
                            <a className='icons' href="https://www.facebook.com/people/StartUp-Story/61551569582444/" ><i className='fab fa-facebook-f fw-normal'></i> </a>
                            <a className='icons ' href="https://www.linkedin.com/company/startupstory101/"><i className='fab fa-linkedin-in fw-normal'></i></a>
                            <a className='icons' href="https://www.instagram.com/startup__story__/"><i className='fab fa-instagram fw-normal'></i></a>
                        </div>
                    </div>
                </div>
                <hr />

                <div className='footer-title'>
                    <p className='py-4'>Made with 💙 by <a href="/" className='text-blue-500'>Startup Story Team</a></p>
                </div>
            </div>
        </>
    )
}

export default Footer