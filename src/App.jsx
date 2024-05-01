import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container">

        <div className="header">
          <div className="logo">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Installation</li>
              <li>Usage</li>
            </ul>
          </div>
        </div>

        <div className="content">
        
        </div>

        <div className="footer">
          <div className="copyright">
            <p>Copyright © 2021</p>
          </div>
          <div className="social">
            <ul>
              <li><img src="facebook.png" alt="facebook" /></li>
              <li><img src="twitter.png" alt="twitter" /></li>
              <li><img src="instagram.png" alt="instagram" /></li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
