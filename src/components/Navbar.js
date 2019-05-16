import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../screens/Home'
import EditBooks from '../screens/EditBook'
import Books from '../screens/Books'
import NewBooks from '../screens/NewBooks'
import About from '../screens/About'
import Modal from '../components/Modal'
import api from '../Api'

import '../css/navbar.css'
import '../css/modal.css'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      genres: [],
      isLoading: false
    }
  }
  openNav () {
    document.getElementById('myNav').style.height = '100%'
  }

  componentDidMount () {
    this.setState({ isLoading: true })
    api.loadGenres()
      .then((res) => {
        this.setState({
          isLoading: false,
          genres: res.data
        })
      })
  }
  renderGenreLink (genre) {
    return (
      <span key={genre} ><Link to={`/books/${genre}`}>{genre}</Link></span>
    )
  }
  render () {
    return (
      <Router>
        <div id='myNav' class='overlay'>
          <div class='overlay-content'>
            <Modal />
          </div>
        </div>
        <ul>
          <li><p><img src='images/logo2.png' width='50%' height='100%' /></p></li>
          <li><a href='/'><i class='fa fa-fw fa-home' /> Home</a></li>
          <li>
            <div class='subnav'>
              <button class='subnavbtn'>Gênero <i class='fa fa-caret-down' /></button>
              <div class='subnav-content'>
                { this.state.genres.map(this.renderGenreLink) }
              </div>
            </div>
          </li>
          <li><a href='/new'>Adicionar Livro</a></li>
          <li><a href='/about'>Sobre</a></li>
          <li><a onClick={this.openNav}><i class='fa fa-fw fa-user' /> Login</a></li>
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
