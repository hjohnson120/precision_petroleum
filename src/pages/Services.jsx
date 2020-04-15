import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={4}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    textAlign: 'left',
    padding: '3%'
  }
}))

const Thing = withStyles({
  root: {
    backgroundColor: '#010247'
  },
  indicator: {
    backgroundColor: '#010247'
  }
})(AppBar)

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Thing position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="none"
          aria-label="services"
        >
          <Tab label="INSTALLATIONS" {...a11yProps(0)} />
          <Tab label="SERVICE" {...a11yProps(1)} />
          <Tab label="TESTING" {...a11yProps(2)} />
          <Tab label="REPAIRS" {...a11yProps(3)} />
        </Tabs>
      </Thing>
      <TabPanel value={value} index={0}>
        {
          <div className="services">
            <h1>INSTALLATION</h1>
            <hr align="left"></hr>
            <h2>Underground Tank Installation</h2>
            <h2>Aboveground Tank Install</h2>
            <h2>Tank Removal</h2>
            <h2>Piping Installation</h2>
            <h2>Complete Fuel System Installation and Tank Design</h2>
            <h2>Overspill Installation</h2>
            <h2>Concrete Repairs</h2>
            <h2>Manuhole Installation / Replacement</h2>
            <h2>Dispenser Installation / Replacement</h2>
            <h2>Canopy Installation</h2>
          </div>
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {
          <div className="services">
            <h1>SERVICE</h1>
            <hr align="left"></hr>
            <h2>Dispenser Repairs</h2>
            <h2>Filter Replacement</h2>
            <h2>Hoses/Nozzels</h2>
            <h2>Tank Monitoring Alarms</h2>
            <h2>Veeder Root Repairs</h2>
            <h2>Monthly Compliance Inspactions</h2>
          </div>
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        {
          <div className="services">
            <h1>TESTING</h1>
            <hr align="left"></hr>
            <h2>Tank Testing</h2>
            <h2>Line Testing</h2>
            <h2>Leak Detector Testing</h2>
            <h2>Overspill Testing</h2>
            <h2>Overfill Testing</h2>
            <h2>Operability Testing</h2>
            <h2>Integrity Testing</h2>
            <h2></h2>
          </div>
        }
      </TabPanel>
      <TabPanel value={value} index={3}>
        {
          <div className="services">
            <h1>REPAIRS</h1>
            <hr align="left"></hr>
            <h2>Bumper Post Repairs</h2>
            <h2>Manhole Repairs</h2>
            <h2>Overspill Repairs</h2>
            <h2>Tank Fuel Island Repairs</h2>
            <h2>Concrete Parking Lot Repairs</h2>
            <h2>Entry Boot Repairs</h2>
            <h2>Sump and Liner Repairs</h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
          </div>
        }
      </TabPanel>
    </div>
  )
}

// import React, { useState } from 'react'
// import '../App.css'

// function Services() {
// const showInstallation = () => {
//   return (
//     <div className="services">
//       <h1>INSTALLATION</h1>
//       <h2>Underground Tank Installation</h2>
//       <h2>Aboveground Tank Install</h2>
//       <h2>Tank Removal</h2>
//       <h2>Piping Installation</h2>
//       <h2>Complete Fuel System Installation and Tank Design</h2>
//       <h2>Overspill Installation</h2>
//       <h2>Concrete Repairs</h2>
//       <h2>Manuhole Installation / Replacement</h2>
//       <h2>Dispenser Installation / Replacement</h2>
//       <h2>Canopy Installation</h2>
//     </div>
//   )
// }

// const showService = () => {
//   var x = document.getElementById('service')
//   if (x.style.display === 'none') {
//     x.style.display = 'block'
//   } else {
//     x.style.display = 'none'
//   }
// }

// const showRepairs = () => {
//   var x = document.getElementById('repairs')
//   if (x.style.display === 'none') {
//     x.style.display = 'block'
//   } else {
//     x.style.display = 'none'
//   }
// }

// const showTesting = () => {
//   var x = document.getElementById('testing')
//   if (x.style.display === 'none') {
//     x.style.display = 'block'
//   } else {
//     x.style.display = 'none'
//   }
// }

// return (
//   <div>
//     <section>
//       <h1 className="main-bullets">SERVICES</h1>
//     </section>
//     <div className="flex-list">
//       <h2 className="service-name" onClick={showService}>
//         SERVICE
//       </h2>
//       <h2 className="service-name" onClick={showInstallation}>
//         INSTALLATION
//       </h2>
//       <h2 className="service-name" onClick={showTesting}>
//         TESTING
//       </h2>
//       <h2 className="service-name" onClick={showRepairs}>
//         REPAIRS
//       </h2>
//     </div>
//     <div className="services" id="installation" style={{ display: 'none' }}>
//       <h1>INSTALLATION</h1>
//       <h2>Underground Tank Installation</h2>
//       <h2>Aboveground Tank Install</h2>
//       <h2>Tank Removal</h2>
//       <h2>Piping Installation</h2>
//       <h2>Complete Fuel System Installation and Tank Design</h2>
//       <h2>Overspill Installation</h2>
//       <h2>Concrete Repairs</h2>
//       <h2>Manuhole Installation / Replacement</h2>
//       <h2>Dispenser Installation / Replacement</h2>
//       <h2>Canopy Installation</h2>
//     </div>
//     <div className="services" id="service" style={{ display: 'none' }}>
//       <h1>SERVICE</h1>
//       <h2>Dispenser Repairs</h2>
//       <h2>Filter Replacement</h2>
//       <h2>Hoses/Nozzels</h2>
//       <h2>Tank Monitoring Alarms</h2>
//       <h2>Veeder Root Repairs</h2>
//       <h2>Monthly Compliance Inspactions</h2>
//     </div>
//     <div className="services" id="testing" style={{ display: 'none' }}>
//      <h1>TESTING</h1>
//       <h2>Tank Testing</h2>
//       <h2>Line Testing</h2>
//       <h2>Leak Detector Testing</h2>
//       <h2>Overspill Testing</h2>
//       <h2>Overfill Testing</h2>
//       <h2>Operability Testing</h2>
//       <h2>Integrity Testing</h2>
//       <h2></h2>
//     </div>
//     <div className="services" id="repairs" style={{ display: 'none' }}>
//       <h1>REPAIRS</h1>
//       <h2>Bumper Post Repairs</h2>
//       <h2>Manhole Repairs</h2>
//       <h2>Overspill Repairs</h2>
//       <h2>Tank Fuel Island Repairs</h2>
//       <h2>Concrete Parking Lot Repairs</h2>
//       <h2>Entry Boot Repairs</h2>
//       <h2>Sump and Liner Repairs</h2>
//       <h2></h2>
//       <h2></h2>
//       <h2></h2>
//     </div>
//   </div>
// )
// }

// export default Services
