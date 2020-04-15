import React from 'react'
import '../App.css'
import trucks from '../images/trucks.JPG'

function Home() {
  return (
    <div>
      <section>
        <img
          className="precisionMain "
          alt="Precision Petroleum Work Shop"
          src={trucks}
        />
      </section>
      <section>
        <h1 className="main-bullets">
          COMPLETE FUEL SYSTEM INSTALLATION AND TANK DESIGN - TANK REMOVAL -
          SHEET PILE INSTALLATION
        </h1>
      </section>
    </div>
  )
}

export default Home
