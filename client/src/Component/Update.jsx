import React from 'react'
import '../style/Update.css'

const Update = () => {
  return (
    <div className='container-fluid bg-primary py-5'>
      <div className="row">
        <div className="col-12">
            <h1 className="display-5">Stay Update!!!</h1>
            <form action="" className="mx-auto">
                <div className="input-group">
                    <input type="text" className='form-control' placeholder='Your Email'/>
                    <button className='btn-dark'>Sign Up</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Update
