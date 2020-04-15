import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
        </Switch>
      </div>
    </Router>
  )
}
