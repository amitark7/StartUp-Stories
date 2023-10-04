import React from 'react'
import '../style/Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className='left-side'>
        <h1>Welcome to <span style={{ color: "blue" }}>StartUp Story</span> </h1>
        <h3>Welcome to the inspiring
          journey of Startup Story</h3>
        <p>Startup Story began its journey with a
          singular vision: to support entrepreneurs and
          businesses, regardless of their size or origin,
          on their quest for success. In our early days,
          we faced numerous challenges typical of any
          startup. However, it was these very
          challenges that fueled our determination to
          grow.At the heart of Startup Story are its visionary
          founders, <span style={{color:'black' ,fontWeight:'700'}}>Tathagat and Ripunjay Mishra.</span>
          Their shared passion for entrepreneurship,
          innovation, and a deep-seated commitment
          to helping others succeed laid the foundation
          for our venture</p>
        <button className='btn'><Link to="/about">Read More..</Link></button>
      </div>
      <div className='right-side'>
        <div className='service'>
          <div className='icon'>
            <i className='fa fa-user-tie fa-2x'></i>
          </div>
          <div className='details' >
            <h3>Consulting & Advisory Services</h3>
            <p> Tailor-made solutions for businesses looking to refine their goals and operations, specializing in startups and SMEs.
              Comprehensive management services, from creating effective business models to organizational structuring, aimed at optimizing performance.</p>
          </div>
        </div>
        <div className='service'>
          <div className='icon'>

            <i className='fa fa-chart-line fa-2x'></i>
          </div>
          <div className='details'>
            <h3>Digital Marketing Services</h3>
            <p> Improve your online visibility and ranking with our search engine optimization and marketing services.High-quality content creation, including blog posts, podcasts, and articles, designed to engage and convert your audience.</p>
          </div>
        </div>
        <div className='service'>
          <div className='icon'>
            <i className="fa-brands fa-connectdevelop"></i>
          </div>
          <div className='details'>
            <h3>IT Consulting</h3>
            <p>Planning and implementation of your IT environment, tailored to your business needs. Customized software development services, from app development to complex systems integration.</p>
          </div>
        </div>
        <div className='service'>
          <div className='icon'>
            <i className='fa fa-balance-scale fa-2x'></i>
          </div>
          <div className='details'>
            <h3>Legal and Advisory Services</h3>
            <p>Offering advice and solutions for legal issues, from contracts to compliance, with a focus on the startup ecosystem.Regulatory and compliance guidance to navigate the complex legal landscape effectively.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
