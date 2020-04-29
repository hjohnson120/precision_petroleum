import React from 'react'
import '../App.css'
import trucks from '../images/trucks.JPG'
import sheetPiling from '../images/newlogo.jpeg'

function Home() {
  return (
    <div className="home-div">
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
