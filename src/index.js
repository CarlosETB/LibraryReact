import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import 'bulma'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Navbar />, document.getElementById('root'))

serviceWorker.unregister()
