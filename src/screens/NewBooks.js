import React, { Component } from 'react'
import api from '../Api'
import { Redirect, Link } from 'react-router-dom'
import '../css/books.css'

const statuses = {
  'watched': 'Lido',
  'watching': 'Lendo',
  'toWathch': 'Ler'
}

class NewBooks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      genres: [],
      isLoading: false,
      redirect: false
    }
    this.saveBooks = this.saveBooks.bind(this)
  }
  componentDidMount () {
    this.setState({ isLoading: true })
    api.loadBooksById(this.props.match.params.id)
      .then((res) => console.log(res))
    api.loadGenres()
      .then((res) => {
        this.setState({
          isLoading: false,
          genres: res.data
        })
      })
  }
  saveBooks () {
    const newBooks = {
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comments: this.refs.comments.value,
      lig: 'tres'
    }
    api.saveBooks(newBooks)
      .then((res) => {
        this.setState({
          redirect: '/books/' + this.refs.genre.value
        })
      })
  }
  render () {
    return (
      <div className='field '>
        {this.state.redirect &&
          <Redirect to={this.state.redirect} />
        }
        <div style={{ padding: '20px 0 20px 0' }} class='field has-addons has-addons-centered'>
          <label class='subtitle is-2'>Nova série</label>
        </div>
        <div class='field has-addons has-addons-centered'>
          <div class='column is-one-quarter'>

            <label>Nome:</label>
            <div class='control'>
              <input type='text' ref='name' class='input' placeholder='Nome' />
            </div>
          </div>
        </div>
        <div class='line'>
          <div class='column is-one-quarter'>
            <div class='line '>

              <div class='lineIn'>
                <label>Status:</label>
                <p class='control has-icons-left'>
                  <span class='select'>
                    <select ref='status'>
                      {Object
                        .keys(statuses)
                        .map(key => <option key={key} value={key}>{statuses[key]}</option>)
                      }
                    </select>
                  </span>
                </p>
              </div>

              <div class='lineIn'>
                <label>Género:</label>
                <p class='control has-icons-left'>
                  <span class='select'>
                    <select ref='genre'>
                      {this.state.genres
                        .map(key => <option key={key} value={key}>{key}</option>)
                      }
                    </select>
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>

        <div class='field is-grouped is-grouped-centered'>
          <div class='column is-one-quarter'>
            <label> Sinopse: </label>
            <textarea ref='comments' type='text' className='textarea' placeholder='Sinopse' /><br />
          </div>
        </div>

        <div className='back'>
          <div class='field has-addons '>
            <p class='control '>
              <button class='button is-rounded is-success is-outlined' onClick={this.saveBooks}>Salvar</button>
            </p>
            <p class='control '>
              <Link className='link' to={'/books'}><button class='button is-rounded is-danger is-outlined'>Cancelar</button></Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default NewBooks
