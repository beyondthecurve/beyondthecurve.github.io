 import React, {Component} from 'react';
import axios from 'axios';
import GoogleForm from './GoogleForm';

const FORM_EMAIL_ID = "entry.1357188805";
const FORM_STUDENT_ID = "entry.1884265043";
const FORM_GRADE_ID = "entry.1722765997";
const FORM_PARENT_ID = "entry.1185247862";
const FORM_PARENT_CONTACT_ID = "entry.513669972";
const FORM_SUBJECTS_ID = "entry.1212348438_sentinel"

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      student: '',
      grade: '',
      parent: '',
      parent_contact: '',
      subjects: '',
      message: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <>
        <div className="form-container col-4 mt-5">
          <form onSubmit={this.handleChange}>
            <div className='form-group'>
              <label htmlFor='student' className='col-form-label'>
                Student Name:
              </label>
              <div>
                <input
                  type='text'
                  name='student'
                  id='student'
                  className='form-control'
                  value={this.state.student}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='grade' className='col-form-label'>
                Student Grade:
              </label>
              <div>
                <input
                  type='text'
                  name='grade'
                  id='grade'
                  className='form-control'
                  value={this.state.grade}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='parent' className='col-form-label'>
                Parent Name:
              </label>
              <div>
                <input
                  type='text'
                  name='parent'
                  id='parent'
                  className='form-control'
                  value={this.state.parent}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='email' className='col-form-label'>
              Parent Email:
              </label>
              <div>
                <input
                type='email'
                name='email'
                id='email'
                className='form-control'
                value={this.state.email}
                onChange={this.handleChange}
                required
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='student' className='col-form-label'>
                Parent Number:
              </label>
              <div>
                <input
                  type='text'
                  name='parent_contact'
                  id='parent_contact'
                  className='form-control'
                  value={this.state.parent_contact}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='subjects' className='col-form-label'>
                Subjects Needed:
              </label>
              <div className="d-flex">
                <div className="group1 mr-3">
                  <input className="m-1" type="checkbox" name="subject" value="Math"/>
                  <label for="subject1">Math</label> <br/>
                  <input className="m-1" type="checkbox" name="subject2" value="Language Art"/>
                  <label for="subject2">Language Art</label> <br/>
                  <input className="m-1" type="checkbox" name="subject3" value="Computer Science"/>
                  <label for="subject3">Computer Science</label> <br/>
                </div>
                <div className="group2">
                  <input className="m-1" type="checkbox" name="subject4" value="Social Studies"/>
                  <label for="subject4">Social Studies</label> <br/>
                  <input className="m-1" type="checkbox" name="subject5" value="Reading"/>
                  <label for="subject5">Reading</label> <br/>
                  <input className="m-1" type="checkbox" name="subject6" value="Science"/>
                  <label for="subject6">Science</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Contact
