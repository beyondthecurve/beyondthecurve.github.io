import React from 'react';
import {Link} from 'react-router-dom'
import check from '../imgs/checkmark.png';

const Subject = () => {
  return (
    <>
      <div className="test-page">
        <div className="d-flex page-header py-5">
          <div className="page-h1 d-flex align-items-center justify-content-end col-4">
            <h1>Test Prep</h1>
          </div>
          <h3 className="d-flex align-items-center col-8">Effective classes tailored to your needs</h3>
        </div>
        <div className="page-description d-flex justify-content-center align-items-center p-4">
            <h3 className="col-10 p-4">
            Necessary for admissions and an impressive resume, preparing for standardized tests can be overwhelming and stressful.  Our tutors will help you set concrete goals and improve your skills in no time.
            </h3>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h2 className="page-subheader">What we can prep you for</h2>
          <img src={check} className="check m-2"/>
        </div>
        <div className="classes d-flex m-3 justify-content-center">
          <ul className="col-3">
            <h2 className="list-header">K-12</h2>
            <li>SSAT</li>
            <li>PSAT</li>
            <li>TOEFL iBT</li>
            <li>SAT</li>
            <li>ACT</li>
            <li>Advanced Placement <br/><span>(AP)</span></li>
          </ul>
          <ul className="col-3">
            <h2 className="list-header">Higher Ed.</h2>
            <li>MCAT</li>
            <li>GMAT</li>
            <li>GRE</li>
          </ul>
        </div>
        <div className="contact-us-button d-flex justify-content-center align-items-center flex-column py-5">
          <h2>Find an expert test prep tutor.</h2>
          <Link to="/contact" class="btn my-2 contact-button px-3">Contact Us</Link>
        </div>
      </div>
    </>
  )
}

export default Subject
