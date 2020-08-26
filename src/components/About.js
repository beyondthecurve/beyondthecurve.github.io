import React from 'react';
import HomeCarousel from './HomeCarousel'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
      <HomeCarousel/>
      <div className="d-flex justify-content-center align-items-center heading">
        <h3>Give your child the tools to succeed.</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center our-promise mb-3">
        <h2 className="mr-3">About Us</h2>
        <div className="text-wrap p-4">
          <p className="mx-auto">Many families connect with us because their student is struggling in a particularly difficult subject.
Our subject tutors have an excellent track record and can not only help your child understand and retain subject material, but also help them develop a sense of self esteem. <br/><b>Check out our programs from the drop down above to learn more.</b>
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column my-5">
        <h2>Interested? Let's get started today.</h2>
        <h3><em>Submit a form, shoot us an email or call us!</em></h3>
        <Link to="/contact" class="btn my-2 contact-button px-3">Contact Us</Link>
      </div>
    </>
  )
}

export default About
