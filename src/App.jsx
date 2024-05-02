import { useState } from 'react'
import './App.css'
import { Link, useLocation, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Installation from './pages/Installation.jsx'
import Usage from './pages/Usage.jsx'
import logo from './assets/icon.png'

function App() {
  const location = useLocation()

  return (
    <>
      <div className="container">

        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1 className="header-title">CouchDB</h1>
          </div>
          <div className="menu">
            <ul>
              <li id="homeNav">
                <Link className={`navButton ${location.pathname === '/' ? 'activeNavButton' : ''}`} to="/">Home</Link>
              </li>
              <li id="installNav">
                <Link className={`navButton ${location.pathname === '/installation' ? 'activeNavButton' : ''}`} to="/installation">Installation</Link>
              </li>
              <li id="usageNav">
                <Link className={`navButton ${location.pathname === '/usage' ? 'activeNavButton' : ''}`} to="/usage">Usage</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/installation" element={<Installation />} />
                <Route path="/usage" element={<Usage />} />
              </Routes>
        </div>
      </div>
    </>
  )
}

export default App
