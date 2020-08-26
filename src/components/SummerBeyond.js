import React from 'react';
import HomeCarousel from './HomeCarousel'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const SummerBeyond = () => {
  return (
    <>
      <div className="subject-page">
        <div className="d-flex page-header py-5">
          <div className="page-h1 d-flex align-items-center justify-content-end col-4">
            <h1>Summer Beyond</h1>
          </div>
          <h3 className="d-flex align-items-center col-8">Get ahead with our summer program</h3>
        </div>
        <div className="page-description d-flex justify-content-center align-items-center p-4">
            <h3 className="col-10 p-4">Our summer program offers a wide range of classes. Whatever your needs are, we are here to help you go above and beyond.</h3>
        </div>
        <div className="page-subheader d-flex justify-content-center align-items-center">
          <h2>What We Offer</h2>
        </div>
        <div className="contact-us-button d-flex justify-content-center align-items-center flex-column py-5">
          <h2>Want to learn more or sign up?</h2>
          <Link to="/contact" class="btn my-2 contact-button px-3">Contact Us</Link>
        </div>
      </div>
    </>
  )
}

export default SummerBeyond
