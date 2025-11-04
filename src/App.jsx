import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'

import {HashRouter as Router, Routes, Route} from reacter-router-dom;

function App() {


  return (
    <div>
      <Router>
    <Login/>
    </Router>
    </div>
  )
}

export default App
