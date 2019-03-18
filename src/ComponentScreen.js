import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import SidebarContent from './SidebarContent'
import ComponentBody from './ComponentBody'

const rootStyles = {}

const ComponentScreen = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%'
      }}
    >
      <Sidebar />
      <SidebarContent />
      <ComponentBody />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <ComponentScreen />
    </Router>
  )
}

export default App
