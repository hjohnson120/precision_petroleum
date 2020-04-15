import React from 'react'
import './App.css'
import AppRouter from './AppRouter'
import TopNav from './pages/TopNav'
import Footer from './pages/Footer'

function App() {
  return (
    <div className="App">
      <TopNav />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
