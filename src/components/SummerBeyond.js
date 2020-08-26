import React from 'react';
import HomeCarousel from './HomeCarousel'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const SummerBeyond = () => {
  return (
    <>
      <div className="summer-beyond-page">
        <div className="d-flex page-header py-5">
          <div className="page-h1 d-flex align-items-center justify-content-end col-4">
            <h1>Summer Beyond</h1>
          </div>
          <h3 className="d-flex align-items-center col-8">Get ahead with our summer program</h3>
        </div>
        <div className="page-description d-flex justify-content-center align-items-center p-4">
            <h3 className="col-10 p-4">Our summer program offers a wide range of classes. Whatever your needs are, we are here to help you go above and beyond.</h3>
        </div>
        <div className="classes d-flex p-3 justify-content-center flex-wrap">
          <ul>
            <h2 className="list-header">Academy Book Club</h2>
            <p><em>Hone your English Skills.</em></p>
            <li>- Reading Comprehension</li>
            <li>- Creative Writing</li>
            <li>- Vocabulary Testing</li>
            <li>- Language Arts</li>
          </ul>
          <ul>
            <h2 className="list-header">Test Prep</h2>
            <p><em>Ace your upcoming exams with expert test prep.</em></p>
            <li>- SAT, ACT, SSAT, GRE, GMAT, ISEE, MCAT, LSAT</li>
          </ul>
          <ul>
            <h2 className="list-header">Computer Science</h2>
            <p><em>Expand your technological knowledge for class and for the future.</em></p>
            <li>Python <br/><span>(Level 1 & 2)</span></li>
          </ul>
          <ul>
            <h2 className="list-header">Maths</h2>
            <p><em>Strengthen your problem solving skills with our highly qualified tutors.</em></p>
            <li>Common Core</li>
            <li>Competitive Maths Prep</li>
          </ul>
          <ul>
            <h2 className="list-header">Scientific Research</h2>
            <p><em>We will help you with your research and help you gain skills that will aid you in any science fair/competition.</em></p>
          </ul>
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
