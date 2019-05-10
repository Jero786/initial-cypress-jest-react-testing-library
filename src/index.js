import './global.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from '@reach/router'
import App from './app'

if (module.hot) {
  module.hot.accept()
}

function FullApp() {
  return (
    <Router>
      <App path="/"/>
    </Router>
  )
}

ReactDOM.render(<FullApp />, document.getElementById('app'))
