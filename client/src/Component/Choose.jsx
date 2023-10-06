import React from 'react'
import '../style/Choose.css'
import {Link} from 'react-router-dom'
//import pic from '../images/carousel-1.jpg'

const Choose = () => {
    return (
        <div className='container-fluid py-6'>
            <div className='container-m'>
                <h1 className="container-title" >Why Choose Us!!!</h1>
                <hr style={{ height: '1px', width: '15%', backgroundColor: '#F3525A', margin: 'auto', opacity: '0.3' }} />
            </div>
            <div className="choose">
                <div className="left">
                    <div className='left-body'>
                        <div className="icons">
                            <i className='fa fa-cubes fs-4 text-white'></i>
                        </div>
                        <h3>Best In Industry</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas ipsam quaerat.</p>
                    </div>
                    <div className='left-body'>
                        <div className="icons">
                            <i className='fa fa-percent fs-4 text-white'></i>
                        </div>
                        <h3>99% Success Rate</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatem eum in.</p>
                    </div>
                    <div className='left-body'>
                        <div className="icons">
                            <i className='fa fa-award fs-4 text-white'></i>
                        </div>
                        <h3>Award Winning</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate nam qui!</p>
                    </div>
                </div>
                <div className="mid">
                    <div className='mid-body'>
                        <img src="https://amitark7.github.io/StartUp-Story/img/feature.jpg" alt="" className='pic' />
                        <div className="para">
                            <p> The idea of
                                Startup Story was conceived, laying the
                                groundwork for what would become a
                                transformative journey. <br />
                                We faced early hurdles
common to startups, from resource
constraints to market uncertainties.
However, these challenges strengthened our
resolve to persevere.</p>
                            <Link to="/about">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className='right-body'>
                        <div className="icons">
                            <i className='far fa-smile-beam fs-4 text-white'></i>
                        </div>
                        <h3>100% Happy Client</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum provident maiores expedita.</p>
                    </div>
                    <div className='right-body'>
                        <div className="icons">
                            <i className='fa fa-user-tie fs-4 text-white'></i>
                        </div>
                        <h3>Professional Advisory</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repudiandae magni error!</p>
                    </div>
                    <div className='right-body'>
                        <div className="icons">
                            <i className='fa fa-headset fs-4 text-white'></i>
                        </div>
                        <h3>24/7 Customer Support</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis hic exercitationem voluptatibus!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose
