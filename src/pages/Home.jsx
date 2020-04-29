import React from 'react'
import '../App.css'
import trucks from '../images/trucks.JPG'
import sheetPiling from '../images/newlogo.jpeg'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div className="home-div">
      <Helmet>
        <title>Precision Petroleum</title>
        <meta name="home" content="Precision Petroleum Home" />
      </Helmet>
      <section>
        <img
          className="precisionMain "
          alt="Precision Petroleum Work Shop"
          src={trucks}
        />
      </section>
      <section>
        <h1>
          <img
            className="logo"
            src={sheetPiling}
            alt="precision petroleum logo"
          />
        </h1>
      </section>
    </div>
  )
}

export default Home
