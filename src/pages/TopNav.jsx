import React from 'react'
import '../App.css'
import CallIcon from '@material-ui/icons/Call'

function TopNav() {
  return (
    <div className="nav">
      <div className="topNav">
        <div>
          <a
            className="navBtn"
            href="https://serene-keller-f79a3c.netlify.app/services"
            target="_blank"
          >
            CONTACT
          </a>
          <a className="navBtn" href="html_images.asp">
            ABOUT
          </a>
          <a className="navBtn" href="services">
            SERVICES
          </a>
        </div>
        <div className="number">
          <CallIcon />
          727-547-0700
        </div>
      </div>
    </div>
  )
}

export default TopNav
