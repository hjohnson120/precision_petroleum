import React from 'react'
import '../App.css'
import machine from '../images/trucks.JPG'
import Logo from '../images/IMG_0438.jpeg'
import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <div className="contact-info">
      <Helmet>
        <title>Precision Petroleum Contact Page</title>
        <meta name="contact" content="Precision Petroleum Contact" />
      </Helmet>
      <div>
        <h1>Call or email us today for an estimate!</h1>
        <h2>
          <a className="contact-email" href="mailto:kevinprepetro@verzion.net">
            kevinprepetro@verizon.net
          </a>
        </h2>
        <h2>727-547-0700</h2>
      </div>
      <div className="flex-contact">
        <img
          className="contact-pic"
          src={Logo}
          alt="precision petroleum logo"
        />
      </div>
    </div>
  )
}

export default Contact
