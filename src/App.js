import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import EditSeries from './EditSeries'
import Series from './Series'
import NewSeries from './NewSeries'

const About = () => <section className='intro-section'><h1>Sobre</h1></section>

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-default navbar-fixed-top' role='navigation'>
            <div className='container'>
              <div className='navbar-header page-scroll'>
                <a className='navbar-brand page-scroll' href='#page-top'>
                  <img src='/images/logo.png' height='30' />
                </a>
              </div>

              <div className='collapse navbar-collapse navbar-ex1-collapse'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/'>Menu item</Link>
                  </li>
                  <li>
                    <Link to='/new'>Nova série</Link>
                  </li>
                  <li>
                    <Link to='/about'>Sobre</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Route exact path='/' component={Home} />
        <Route exact path='/series/:genre' component={Series} />
        <Route path='/series-edit/:id' component={EditSeries} />
        <Route exact path='/about' component={About} />
        <Route exact path='/new' component={NewSeries} />
      </Router>
    )
  }
}

export default App
