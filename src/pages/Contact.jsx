import React from 'react'
import '../App.css'
import machine from '../images/trucks.JPG'
import Logo from '../images/Logo.png'

function Contact() {
  return (
    <div>
      <section>
        <img className="logo " alt="Precision Petroleum Work Shop" src={Logo} />
      </section>
      <section>
        <img
          className="machine "
          alt="Precision Petroleum Work Shop"
          src={machine}
        />
      </section>
    </div>
  )
}

export default Contact
