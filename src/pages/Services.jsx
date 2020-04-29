import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import tank from '../images/IMG_0071.jpeg'
import spillBucket from '../images/two.JPG'
import testing from '../images/testing.JPG'
import shoring from '../images/shoring.JPG'
import image from '../images/IMG_8191.PNG'
import { Helmet } from 'react-helmet'

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
      {value === index && <Box p={5}>{children}</Box>}
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
      <Helmet>
        <title>Precision Petroleum Services Page</title>
        <meta name="services" content="Precision Petroleum Services" />
      </Helmet>
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
          <Tab label="SHORING" {...a11yProps(4)} />
        </Tabs>
      </Thing>
      <TabPanel value={value} index={0}>
        {
          <div className="flex-pic">
            <div className="services">
              <h1 className="title">INSTALLATION</h1>
              <hr className="hr" align="left"></hr>
              <ul>
                <li>
                  <h2>Underground Tank Installation</h2>
                </li>
                <li>
                  <h2>Aboveground Tank Install</h2>
                </li>
                <li>
                  <h2>Tank Removal</h2>
                </li>
                <li>
                  <h2>Piping Installation</h2>
                </li>
                <li>
                  <h2>Complete Fuel System Installation and Tank Design</h2>
                </li>
                <li>
                  <h2>Overspill Installation</h2>
                </li>
                <li>
                  <h2>Concrete Repairs</h2>
                </li>
                <li>
                  <h2>Manhole Installation / Replacement</h2>
                </li>
                <li>
                  <h2>Dispenser Installation / Replacement</h2>
                </li>
                <li>
                  <h2>Canopy Installation</h2>
                </li>
              </ul>
            </div>
            <div>
              <img
                className="tank "
                alt="Precision Petroleum Work Shop"
                src={tank}
              />
            </div>
          </div>
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {
          <div className="flex-pic">
            <div className="services">
              <h1 className="title">SERVICE</h1>
              <hr className="hr" align="left"></hr>
              <ul>
                <li>
                  <h2>Dispenser Repairs</h2>
                </li>
                <li>
                  <h2>Filter Replacement</h2>
                </li>
                <li>
                  <h2>Hoses/Nozzles</h2>
                </li>
                <li>
                  <h2>Tank Monitoring Alarms</h2>
                </li>
                <li>
                  <h2>Veeder Root Repairs</h2>
                </li>
                <li>
                  <h2>Monthly Compliance Inspections</h2>
                </li>
              </ul>
            </div>
            <div>
              <img
                className="testing "
                alt="logo for Precision Petroleum"
                src={image}
              />
            </div>
          </div>
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        {
          <div className="flex-pic">
            <div className="services">
              <h1 className="title">TESTING</h1>
              <hr className="hr" align="left"></hr>
              <ul>
                <li>
                  <h2>Tank Testing</h2>
                </li>
                <li>
                  <h2>Line Testing</h2>
                </li>
                <li>
                  <h2>Leak Detector Testing</h2>
                </li>
                <li>
                  <h2>Overspill Testing</h2>
                </li>
                <li>
                  <h2>Overfill Testing</h2>
                </li>
                <li>
                  <h2>Operability Testing</h2>
                </li>
                <li>
                  <h2>Integrity Testing</h2>
                </li>
              </ul>
            </div>
            <div>
              <img
                className="testing "
                alt="leak detector testing"
                src={testing}
              />
            </div>
          </div>
        }
      </TabPanel>
      <TabPanel value={value} index={3}>
        {
          <div className="flex-pic">
            <div className="services">
              <h1 className="title">REPAIRS</h1>
              <hr className="hr" align="left"></hr>
              <ul>
                <li>
                  <h2>Bumper Post Repairs</h2>
                </li>
                <li>
                  <h2>Manhole Repairs</h2>
                </li>
                <li>
                  <h2>Overspill Repairs</h2>
                </li>
                <li>
                  <h2>Tank Fuel Island Repairs</h2>
                </li>
                <li>
                  <h2>Concrete Parking Lot Repairs</h2>
                </li>
                <li>
                  <h2>Entry Boot Repairs</h2>
                </li>
                <li>
                  <h2>Sump and Liner Repairs</h2>
                </li>
              </ul>
            </div>
            <div>
              <img
                className="tank "
                alt="Precision Petroleum Work Shop"
                src={spillBucket}
              />
            </div>
          </div>
        }
      </TabPanel>
      <TabPanel value={value} index={4}>
        {
          <div className="flex-pic">
            <div className="services">
              <h1 className="title">SHEET PILING / SHORING</h1>
              <hr className="hr" align="left"></hr>
              <ul>
                <li>
                  <h2>Z 65 Sheets</h2>
                </li>
                <li>
                  <h2>S 64 Sheets</h2>
                </li>
                <li>
                  <h2>Xz 95 Sheets</h2>
                </li>
                <li>
                  <h2>6ft to 50 ft Sheets Installed </h2>
                </li>
              </ul>
            </div>
            <div>
              <img
                className="tank "
                alt="Shoring and sheet piling"
                src={shoring}
              />
            </div>
          </div>
        }
      </TabPanel>
    </div>
  )
}
