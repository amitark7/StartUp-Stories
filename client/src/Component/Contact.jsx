import React, { useState } from 'react'
import '../style/Contact.css'

const Contact = () => {
    const[query,SetQuery]=useState({name:"",email:'',subject:'',message:''})

    const host="http://localhost:5000/query"

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response=await fetch(`${host}`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({name:query.name,email:query.email,subject:query.subject,message:query.message})
        })
        const data=await response.json()
        alert("Query Submitted Successfully ")
        SetQuery({name:"",email:'',subject:'',message:''})
    }
    const onChange=(e)=>{
        SetQuery({...query,[e.target.name]:e.target.value})
    }
    return (
        <>
      
            <div className="container-fluid p-5 bg-dark">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-4">Contact</h1>
                    </div>
                </div>
            </div>
        <div className='container-fluid contact'>
            <div className="row">
                <div className="col-lg-6 py-6 px-5">
                    <h1 className='display-5'>Contact for Any Queries</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <input type="text" name='name' onChange={onChange} value={query.name} placeholder='Full Name' className='form-control' />
                            </div>
                            <div className="col-6">
                                <input type="email" name='email' onChange={onChange} value={query.email} placeholder='Email Address' className='form-control' />
                            </div>
                            <div className="col-12">
                                <input type="text" name='subject' onChange={onChange} value={query.subject} placeholder='Subject' className='form-control' />
                            </div>
                            <div className="col-12">
                                <textarea name="message" onChange={onChange} value={query.message} className='form-control' placeholder='Enter Your Message' id="message" style={{ height: '150px' }}></textarea>
                            </div>
                            <div className="col-12">
                                <button className='btn' type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 p-6" style={{ minHeight: '400px' }}>
                    <div className='map'>
                        <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" allowFullScreen arial-hidden='false' tabIndex='0'></iframe>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
