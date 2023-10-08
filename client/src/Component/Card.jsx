import React from 'react'
import '../style/Card.css'

const Card = ({ icon, title, desc }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className="card_body">
          <div className='card-img'>
            <i className={icon}></i>
          </div>
          <h1 className='card-title'>{title}</h1>
          <p className='card-desc'>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
