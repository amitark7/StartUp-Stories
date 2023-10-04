import React from 'react'
import '../style/Request.css'

const Request = () => {
    return (
        <div id='quote' className='request'>
            <div className='text'>
                <h1>Request A Free Quote</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores, laborum soluta quaerat dolore similique animi rerum possimus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id rem commodi laudantium fuga veniam quae dolore officia doloremque, magni veritatis repudiandae, quo quidem a corrupti minus suscipit ullam cum aliquam?</p>
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
                               <button className='btn'>Request A Booking</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='banner'>
                <div style={{position:'relative', height:'100%'}}>
                    <img src="https://amitark7.github.io/StartUp-Story/img/quote.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Request
