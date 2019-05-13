import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../Api'
import '../css/books.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      genres: [],
      isLoading: false
    }
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
      <span key={genre}><Link className='link' to={`/books/${genre}`}><a class='dropdown-item'>{genre}</a></Link></span>
    )
  }
  render () {
    return (
      <div>
        <section id='intro' className='field has-addons has-addons-centered'>

          <div className='row'>
            <div className='line'><img src='images/library.png' /></div>
          </div>
        </section>

        <section>
          {
            this.state.isLoading &&
              <span>Aguarde, carregando...</span>
          }
          <br />
          {!this.state.isLoading &&
          <div className='texto' >
            <div className='center' >
              <label>Livros:</label>
              &nbsp; &nbsp;
              <div class='dropdown is-hoverable'>

                <button class='button' aria-haspopup='true' aria-controls='dropdown-menu3'>
                  <span>Gêneros</span>
                  <span class='icon is-small'>
                    <i class='fas fa-angle-down' aria-hidden='true' />
                  </span>
                </button>

                <div class='dropdown-menu' id='dropdown-menu3' role='menu'>
                  { this.state.genres.map(this.renderGenreLink) }
                </div>
              </div>
            </div>
          </div>
          }
          <br />
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>

                <div class='field has-addons has-addons-centered'>
                  <label class='subtitle is-2'>Para assistir</label>
                </div>
                <div className='item  col-xs-4 col-lg-4 back'>
                  <div className='thumbnail'>
                    <img className='group list-group-image' src='http://placehold.it/400x250/000/fff' alt='' />
                    <div className='caption'>
                      <h4 className='line'>
                        Bom livro
                      </h4>

                      <div className='line'>
                        <p className='lead'>Ação - Lido</p>
                      </div>
                      <div className='back'>
                        <div class='field has-addons '>
                          <p class='control '>
                            <Link className='link'><button class='button is-rounded is-success is-outlined'>Editar</button></Link>
                          </p>
                          <p class='control '>
                            <button class='button is-rounded is-danger is-outlined link' >Excluir</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='item  col-xs-4 col-lg-4 back'>
                  <div className='thumbnail'>
                    <img className='group list-group-image' src='http://placehold.it/400x250/000/fff' alt='' />
                    <div className='caption'>
                      <h4 className='line'>
                        Bom livro
                      </h4>

                      <div className='line'>
                        <p className='lead'>Ação - Lido</p>
                      </div>
                      <div className='back'>
                        <div class='field has-addons '>
                          <p class='control '>
                            <Link className='link'><button class='button is-rounded is-success is-outlined'>Editar</button></Link>
                          </p>
                          <p class='control '>
                            <button class='button is-rounded is-danger is-outlined link' >Excluir</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='item  col-xs-4 col-lg-4 back'>
                  <div className='thumbnail'>
                    <img className='group list-group-image' src='http://placehold.it/400x250/000/fff' alt='' />
                    <div className='caption'>
                      <h4 className='line'>
                        Bom livro
                      </h4>

                      <div className='line'>
                        <p className='lead'>Ação - Lido</p>
                      </div>
                      <div className='back'>
                        <div class='field has-addons '>
                          <p class='control '>
                            <Link className='link'><button class='button is-rounded is-success is-outlined'>Editar</button></Link>
                          </p>
                          <p class='control '>
                            <button class='button is-rounded is-danger is-outlined link' >Excluir</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
