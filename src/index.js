import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Nutshell } from './components/Nutshell.js'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Nutshell />
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
)