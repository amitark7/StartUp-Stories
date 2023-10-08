import React from 'react'
import '../style/Request.css'

const Request = () => {
    return (
        <div id='quote' className='request'>
            <div className='text'>
                <h1>Request A Free Booking</h1>
                <p>If You Want Grow Your Bussiness Then Choose Us To Reach The Top Level. Why Are You Waiting ! Hurry Up Book Your Seat Free And Join Our Team To Grow Your Dreams.</p>
                <form >
                    <div className="row">
                        <div className='col-6'>
                            <div>
                                <input type="text" placeholder='Full Name' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div>
                                <input type="email" placeholder='Email address' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div>
                                <input type="text" placeholder='Enter Service Name' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div>
                                <button className='btn'>Book</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='banner'>
                <div className='banner-body'>
                        <img className='ban-image' src="https://amitark7.github.io/StartUp-Story/img/quote.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Request
