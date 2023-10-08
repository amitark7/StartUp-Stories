import React from 'react'
import Service from './Service'
import Request from './Request'

const ServicePage = () => {
  return (
    <>
      <div className="container-fluid p-5 bg-dark">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-4">Services</h1>
                    </div>
                </div>
            </div>
    <div>
      <Service/>
      <Request/>
    </div>
    </>
  )
}

export default ServicePage
