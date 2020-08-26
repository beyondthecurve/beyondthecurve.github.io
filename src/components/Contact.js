import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'

class Contact extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <>
        <div className="contact-page d-flex justify-content-center m-4 mb-5">
          <div className="contact-header pt-5 col-5">
            <h1 className="mb-2">Connect with us!</h1>
            <h2 className="mb-5">Success Begins Today.</h2>
            <h3 className="mb-5 pr-3">Please feel free to reach out for more information, or if you have any questions. You can contact us by sending in an interest form, calling, or emailing.</h3>
            <div className="d-flex flex-column mt-5">
              <h3>Phone/SMS</h3>
              <p>781-801-4364 </p>
            </div>
            <div className="email">
              <h3>Email</h3>
              <p>beyondthecurve.corp@gmail.com</p>
            </div>
            <div className="address">
              <h3>Address</h3>
              <p>500 Silver Spur Rd 204 <br/> Rancho Palos Verdes, CA 90275</p>
            </div>
          </div>
          <div className="contact-right-column d-flex align-items-left col-5 pt-5">
            <Form className="contact-form">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
          </div>
        </div>
      </>

    )
  }
}

export default Contact
