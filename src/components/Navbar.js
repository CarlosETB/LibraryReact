import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from '../screens/Home'
import EditBooks from '../screens/EditBook'
import Books from '../screens/Books'
import NewBooks from '../screens/NewBooks'
import About from '../screens/About'

import '../css/navbar.css'

class Navbar extends Component {
  render () {
    return (
      <Router>

        <ul>
          <li><p><img src='images/logo2.png' width='50%' height='100%' /></p></li>
          <li><a href='/'>Home</a></li>
          <li><a href='/new'>Adicionar Livro</a></li>
          <li><a href='/about'>Sobre</a></li>
          <li><a class='active' href='/modal'>Login</a></li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route exact path='/books/:genre' component={Books} />
        <Route path='/books-edit/:id' component={EditBooks} />
        <Route exact path='/about' component={About} />
        <Route exact path='/new' component={NewBooks} />
      </Router>
    )
  }
}

export default Navbar
