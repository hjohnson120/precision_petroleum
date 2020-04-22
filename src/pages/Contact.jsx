import React from 'react'
import '../App.css'
import machine from '../images/trucks.JPG'
import Logo from '../images/Logo1.png'

function Contact() {
  return (
    <div>
      <section>
        <img className="logo " alt="Precision Petroleum Work Shop" src={Logo} />
      </section>
      <section>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
