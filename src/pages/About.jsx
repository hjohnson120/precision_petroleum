import React from 'react'
import '../App.css'
import logo from '../images/main.jpeg'

function About() {
  return (
    <div className="flex-section">
      <section className="about-info">
        <h1>
          <b>About Us</b>
        </h1>
        <h2 style={{ fontWeight: '300' }}>
          <b>Precision Petroleum, Inc</b>. has been serving the Petroleum
          Industry since <b>1994</b>. Specializing in the installation and
          removal of underground fuel tank systems, tank and line testing,
          maintenance, sheet piling and Commercial Convenience Store
          Construction. Precision Petroleum also specializes in projects such as
          industrial fuel site systems to marinas, fuel tank installations at
          Convenience stores as well as above ground fuel tank installations.
          Precision Petroleum has highly
          <b> trained</b> and <b>certified</b> professional personnel in all
          areas of the petroleum industry. All of our personnel have over
          <b> 50 years</b> combined experience in the petroleum industry.
        </h2>
      </section>
      <section className="about-pic-section">
        <img
          className="about-pic"
          src={logo}
          alt="fuel tank installation on construction site in Florida"
        />
      </section>
    </div>
  )
}

export default About
