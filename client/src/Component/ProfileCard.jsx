import React from 'react'
import '../style/Team.css'
import HR from '../images/HR.jpg'
import Manager from '../images/Manager.jpg'
import dev from '../images/Web_Dev.jpg' 
import dev1 from '../images/Developer.jpg'

const ProfileCard = () => {
  return (
    <div className='container-fluid py-6'>
    <div className='container-m'>
        <h1 className='container-title'>Our Team Members</h1>
        <hr style={{ height: '1px', width: '15%', backgroundColor: '#F3525A', margin: 'auto', opacity: '0.3' }} />
    </div>
    <div className="row">
        <div className="col-4">
            <div className="profile-card team-card">
                <div className="image">
                    <img src={HR} alt="" className="profile-img" />
                </div>
                <div className="text-data">
                    <span className='name'>Shaveta Salaria</span>
                    <span className='job'>HR & Content</span>
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
            <div className="profile-card team-card">
                <div className="image">
                    <img src={Manager} alt="" className="profile-img" />
                </div>
                <div className="text-data">
                    <span className='name'>Ayush Srivastava</span>
                    <span className='job'>Management Coordianator</span>
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
            <div className="profile-card team-card">
                <div className="image">
                    <img src={dev} alt="" className="profile-img" />
                </div>
                <div className="text-data">
                    <span className='name'>Amit Kumar</span>
                    <span className='job'>Web Developer</span>
                </div>
                <div className="media-buttons">
                    <a href="https://www.facebook.com/profile.php?id=100012760477413" style={{ background: '#4267b2' }} className='link'>
                        <i className='fab fa-facebook-f fw-normal'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/amit-kr07" style={{ background: '#1da1f2' }} className='link'>
                        <i className='fab fa-linkedin-in fw-normal'></i>
                    </a>
                    <a href="https://www.instagram.com/amit_ark7/" style={{ background: '#e1306c' }} className='link'>
                        <i className='fab fa-instagram fw-normal'></i>
                    </a>
                    <a href="https://www.youtube.com/@mastigangbgs7936" style={{ background: '#ff0000' }} className='link'>
                        <i className='fab fa-youtube fw-normal'></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-4">
            <div className="profile-card team-card">
                <div className="teams">

                <div className="image">
                    <img src={dev1} alt="" className="profile-img" />
                </div>
                <div className="text-data">
                    <span className='name'>Amarnath Rai</span>
                    <span className='job'>Web Developer</span>
                </div>
                <div className="media-buttons">
                    <a href="/" style={{ background: '#4267b2' }} className='link'>
                        <i className='fab fa-facebook-f fw-normal'></i>
                    </a>
                    <a href="/" style={{ background: '#1da1f2' }} className='link'>
                        <i className='fab fa-linkedin-in fw-normal'></i>
                    </a>
                    <a href="/" style={{ background: '#e1306c' }} className='link'>
                        <i className='fab fa-instagram fw-normal'></i>
                    </a>
                    <a href="/" style={{ background: '#ff0000' }} className='link'>
                        <i className='fab fa-youtube fw-normal'></i>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProfileCard
