import React from 'react'
import '../style/Team.css'
import founder from '../images/Founder.jpg'
import ceo from '../images/Founder and Ceo.jpg'

const Team = () => {
    return (
        <div className='container-fluid py-6'>
            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ textAlign: 'center', color: '#111', fontSize: '3rem', lineHeight: '1.2', marginBottom: '0.5rem' }}>Our Founders</h1>
                <hr style={{ height: '1px', width: '15%', backgroundColor: '#F3525A', margin: 'auto', opacity: '0.3' }} />
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="profile-card">
                        <div className="image">
                            <img src={founder} alt="" className="profile-img" />
                        </div>
                        <div className="text-data">
                            <span className='name'>Tathagat Sankritayan</span>
                            <span className='job'>Founder </span>
                        </div>
                        <div className="media-buttons">
                            <a href="/" style={{ background: '#4267b2' }} className='link'>
                                <i className='fab fa-facebook-f fw-normal'></i>
                            </a>
                            <a href="/" style={{ background: '#1da1f2' }} className='link'>
                                <i className='fab fa-linkedin-in fw-normal'></i>
                            </a>
                            <a href="/" style={{ background: '#e1306c' }} className='link'>
                                <i className='fab fa-twitter fw-normal'></i>
                            </a>
                            <a href="/" style={{ background: '#ff0000' }} className='link'>
                                <i className='fab fa-youtube fw-normal'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="profile-card">
                        <div className="image">
                            <img src={ceo} alt="" className="profile-img" />
                        </div>
                        <div className="text-data">
                            <span className='name'>Ripunjay Mishra</span>
                            <span className='job'> Founder and CEO</span>
                        </div>
                        <div className="media-buttons">
                            <a href="/" style={{ background: '#4267b2' }} className='link'>
                                <i className='fab fa-facebook-f fw-normal'></i>
                            </a>
                            <a href="/" style={{ background: '#1da1f2' }} className='link'>
                                <i className='fab fa-linkedin-in fw-normal'></i>
                            </a>
                            <a href="/" style={{ background: '#e1306c' }} className='link'>
                                <i className='fab fa-twitter fw-normal'></i>
                            </a>
                            <a href="/" style={{ background: '#ff0000' }} className='link'>
                                <i className='fab fa-youtube fw-normal'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
