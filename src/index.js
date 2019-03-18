import React from 'react'
import ReactDOM from 'react-dom'
import ComponentScreen from './ComponentScreen'

import './styles.css'

function App() {
  return <ComponentScreen />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
