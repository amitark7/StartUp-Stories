import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../style/Slider.css'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import pic from '../images/carousel-1.jpg'
import pic1 from '../images/carousel-2.jpg'

const Slider = () => {
    return (
        <div>
            <Carousel autoPlay="true" infiniteLoop="true" showThumbs='true'>
                <div className='slide' >
                    <img src={pic} alt='' />
                    <p className="legend1" >
                        <div class="p-3" style={{ maxWidth: "900px" }}>
                            <h5 class="slide-text anime">StartUp Story</h5>
                            <h1 class="slide-title anime">Take Our Help To Reach The Top Level</h1>
                            <a href="/" class="btn anime">Get Quote</a>
                            <Link to="/contact" class="btn anime">Contact Us</Link>
                        </div>
                    </p>
                </div>
                <div>
                    <img src={pic1} alt='' />
                    <p className="legend1">
                        <div class="p-3" style={{ maxWidth: '900px' }}>
                            <h5 class="slide-text anime">StartUp Story</h5>
                            <h1 class="slide-title anime">Take Our Help To Reach The Top Level</h1>
                            <a href="/" class="btn anime ">Get Quote</a>
                            <Link to="/contact" class="btn anime">Contact Us</Link>
                        </div>
                    </p>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider
