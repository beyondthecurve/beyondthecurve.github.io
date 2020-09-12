import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
// import GoogleForm from './GoogleForm';

class Contact extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <>
        <div className="contact-page m-4 mb-5">
          <div className="contact-header pt-5 d-flex flex-column align-items-center">
            <h1 className="mb-2">Connect with us!</h1>
            <h2 className="mb-5">Success Begins Today.</h2>
            <h3 className="mb-5 pr-2">Please feel free to reach out for more information, or if you have any questions.<br/>You can contact us by sending in an interest form, calling, or emailing.</h3>
          </div>
          <div className="contact-methods">
            <div className="info d-flex justify-content-center">
              <div className="phone m-5">
                <h3>Phone/SMS</h3>
                <p>781-801-4364 </p>
              </div>
              <div className="email m-5">
                <h3>Email</h3>
                <p><a href="mailto:beyondthecurve.corp@gmail.com">beyondthecurve.corp@gmail.com</a></p>
              </div>
              <div className="address m-5">
                <h3>Address</h3>
                <p>500 Silver Spur Rd 204, Rancho Palos Verdes, CA 90275</p>
              </div>
            </div>
            <div className="googleform mb-5 d-flex justify-content-center">
              <h3><a href="https://forms.gle/vyq5PYrp6QS6SjGu7" className="contact-button btn my-2 contact-button px-3" target="_blank"> Click here to fill in our interest form</a></h3>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Contact
