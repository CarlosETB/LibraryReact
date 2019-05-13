import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './screens/Home'
import EditBooks from './screens/EditBook'
import Books from './screens/Books'
import NewBooks from './screens/NewBooks'

const About = () => <section className='intro-section'><h1>Sobre</h1></section>

class App extends Component {
  render () {
    return (
      <Router>

        <nav class='navbar is-light' role='navigation' aria-label='main navigation'>
          <div class='navbar-brand'>
            <a class='navbar-item' href='https://bulma.io'>
              <img src='https://bulma.io/images/bulma-logo.png' width='112' height='28' />
            </a>
          </div>

          <div id='navbarBasicExample' class='navbar-menu'>
            <div class='navbar-start'>
              <a class='navbar-item' href='/'>
                  Menu item
              </a>

              <a class='navbar-item' href='/new'>
                  Nova série
              </a>

              <a class='navbar-item' href='/about'>
                  Sobre
              </a>
            </div>
          </div>
        </nav>

        <Route exact path='/' component={Home} />
        <Route exact path='/books/:genre' component={Books} />
        <Route path='/books-edit/:id' component={EditBooks} />
        <Route exact path='/about' component={About} />
        <Route exact path='/new' component={NewBooks} />
      </Router>
    )
  }
}

export default App
