import React, { Component } from 'react'
import api from '../Api'
import { Redirect, Link } from 'react-router-dom'

const statuses = {
  'watched': 'Lido',
  'watching': 'Lendo',
  'toWathch': 'Ler'
}

class EditBooks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      genres: [],
      isLoading: false,
      redirect: false,
      books: []
    }
    this.saveBooks = this.saveBooks.bind(this)
  }
  componentDidMount () {
    this.setState({ isLoading: true })
    api.loadBooksById(this.props.match.params.id)
      .then((res) => this.setState({ books: res.data }))
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
      id: this.props.match.params.id,
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comments: this.refs.comments.value
    }
    api.updateBooks(newBooks)
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
        <div class='field has-addons has-addons-centered'>
          <label class='subtitle is-2'>Editar série</label>
        </div>
        <div class='field has-addons has-addons-centered'>
          <div class='column is-one-quarter'>

            <label>Nome:</label>
            <div class='control'>
              <input defaultValue={this.state.books.name} type='text' ref='name' class='input' placeholder='Nome' />
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
            <textarea ref='comments' type='text' className='textarea' placeholder='Sinopse' >{this.props.match.params.comments}</textarea> <br />
          </div>
        </div>

        <div class='field is-grouped is-grouped-centered'>
          <div class='column is-one-quarter'>
            <div class='file has-name'>
              <label class='file-label'>
                <input class='file-input' type='file' name='resume' />
                <span class='file-cta'>
                  <span class='file-icon'>
                    <i class='fas fa-upload' />
                  </span>
                  <span class='file-label'>
                    Choose a file…
                  </span>
                </span>
                <span class='file-name'>
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className='back'>
          <div class='field has-addons '>
            <p class='control '>
              <button class='button is-rounded is-success is-outlined' onClick={this.saveBooks}>Salvar</button>
            </p>
            <p class='control '>
              <Link className='link' to={'/'}><button class='button is-rounded is-danger is-outlined' >Excluir</button></Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default EditBooks
