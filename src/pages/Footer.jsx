import React from 'react'
import '../App.css'
import CallIcon from '@material-ui/icons/Call'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-contact">
          <p>
            {/* <CallIcon /> */}
            727-547-0700
          </p>
          <p>Pinellas Park, FL</p>
          <p>Serving FL Since 1994</p>
          <p>
            <a className="mailTo" href="mailto:kevinprepetro@verzion.net">
              prepetro@verizon.net
            </a>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
