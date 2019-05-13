import React, { Component } from 'react'
import api from '../Api'
import '../css/books.css'
import { Link } from 'react-router-dom'

const statuses = {
  'watched': 'Lido',
  'watching': 'Lendo',
  'toWathch': 'Ler'
}

class Books extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      books: []
    }
    this.renderBooks = this.renderBooks.bind(this)
    this.loadData = this.loadData.bind(this)
  }
  componentDidMount () {
    this.loadData()
  }
  loadData () {
    this.setState({ isLoading: true })
    api.loadBooksByGenre(this.props.match.params.genre).then((res) => {
      this.setState({
        isLoading: false,
        books: res.data
      })
    })
  }
  deleteBooks (id) {
    api.deleteBooks(id).then((res) => this.loadData())
  }
  renderBooks (books) {
    return (
      <div key={books.id} className='item  col-xs-4 col-lg-4 back'>
        <div className='thumbnail'>
          <img className='group list-group-image' src='http://placehold.it/400x250/000/fff' alt='' />
          <div className='caption'>
            <h4 className='line'>
              {books.name}
            </h4>

            <div className='line'>
              <p className='lead'>{books.genre} - {statuses[books.status]}</p>
            </div>
            <div className='back'>
              <div class='field has-addons '>
                <p class='control '>
                  <Link className='link' to={'/books-edit/' + books.id}><button class='button is-rounded is-success is-outlined'>Editar</button></Link>
                </p>
                <p class='control '>
                  <button class='button is-rounded is-danger is-outlined link' onClick={() => this.deleteBooks(books.id)}>Excluir</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        <div>

          <div class='line'>
            <label class='subtitle is-2'>Livros de {this.props.match.params.genre}</label>
          </div>

          {this.state.isLoading &&
          <p>Carregando, aguarede...</p>
          }
          {
            !this.state.isLoading && this.state.books.length === 0 &&
            <div class='aviso'>Nenhum livro cadastrada</div>
          }
        </div>
        <div id='books' className='row list-group' >
          {!this.state.isLoading &&
            this.state.books.map(this.renderBooks)}
        </div>
      </div>
    )
  }
}
export default Books
