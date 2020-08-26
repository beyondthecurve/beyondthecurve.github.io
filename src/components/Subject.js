import React from 'react';
import {Link} from 'react-router-dom'
import check from '../imgs/checkmark.png';

const Subject = () => {
  return (
    <>
      <div className="subject-page">
        <div className="d-flex page-header py-5">
          <div className="page-h1 d-flex align-items-center justify-content-end col-4">
            <h1>Subject Tutoring</h1>
          </div>
          <h3 className="d-flex align-items-center col-8">Deepen your comprehension with first class tutoring</h3>
        </div>
        <div className="page-description d-flex justify-content-center align-items-center p-4">
            <h3 className="col-10 p-4">We offer focused classes in any subject to help you gain a deeper understanding and ace your classes.
            Our subject tutoring is designed to help you see improvements in grades, as well as personal habits, with mental support along the way. </h3>
        </div>
        <div className="page-subheader d-flex justify-content-center align-items-center">
          <h2>What we offer</h2>
          <img src={check} className="check m-2"/>
        </div>
        <div className="classes d-flex p-3 justify-content-center flex-wrap">
          <ul>
            <h2 className="list-header">Maths</h2>
            <li>Elementary Math</li>
            <li>Pre-Algebra Algebra</li>
            <li>Geometry</li>
            <li>Precalculus</li>
            <li>Statistics</li>
          </ul>
          <ul>
            <h2 className="list-header mb-4">Sciences</h2>
            <li>Biology</li>
            <li>Chemistry</li>
            <li>Physics</li>
          </ul>
          <ul>
            <h2 className="list-header mb-4">Writing</h2>
            <li>Essay Writing</li>
            <li>Expository Writing</li>
            <li>Creative Writing</li>
            <li>Research Papers <br/><span>(History, Science, Math)</span></li>
          </ul>
          <ul>
            <h2 className="list-header mb-4">Languages</h2>
            <li>English</li>
            <li>ESL</li>
            <li>Spanish</li>
            <li>Japanese</li>
            <li>Korean</li>
            <li>Chinese</li>
          </ul>
          <ul>
            <h2 className="list-header mb-4">Humanities</h2>
            <li>World History</li>
            <li>US History</li>
            <li>Psychology</li>
            <li>Social Studies</li>
            <li>Religion</li>
            <li>Economics</li>
          </ul>
        </div>
        <div className="contact-us-button d-flex justify-content-center align-items-center flex-column py-5">
          <h2>Get specialized lessons today.</h2>
          <Link to="/contact" class="btn my-2 contact-button px-3">Contact Us</Link>
        </div>
      </div>
    </>
  )
}

export default Subject
