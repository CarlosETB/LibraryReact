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
      <span key={genre} >&nbsp;<Link to={`/books/${genre}`}>{genre},</Link>&nbsp;</span>
    )
  }
  render () {
    return (
      <div>
        <section id='intro' className='field has-addons has-addons-centered'>

          <div className='row'>
            <h1><img src='images/logo.png' /></h1>
            <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>

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
              Ver séries do genêro:
            { this.state.genres.map(this.renderGenreLink) }
          </div>
          }
          <br />
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>

                <div class='field has-addons has-addons-centered'>
                  <label class='subtitle is-2'>Para assistir</label>
                </div>
                <div id='books' className='row list-group'>
                  <div className='item  col-xs-4 col-lg-4'>
                    <div className='thumbnail'>
                      <img className='group list-group-image' src='http://placehold.it/400x250/000/fff' alt='' />
                      <div className='caption'>
                        <h4 className='group inner list-group-item-heading'>How I met your mother</h4>
                        <div className='row'>
                          <div className='col-xs-12 col-md-6'>
                            <p className='lead'>AÇÃO</p>
                          </div>
                          <div className='col-xs-12 col-md-6'>
                            <a className='btn btn-success' href=''>Gerenciar</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='item  col-xs-4 col-lg-4'>
                    <div className='thumbnail'>
                      <img className='group list-group-image' src='http://placehold.it/400x250/000/fff' alt='' />
                      <div className='caption'>
                        <h4 className='group inner list-group-item-heading'>How I met your mother</h4>
                        <div className='row'>
                          <div className='col-xs-12 col-md-6'>
                            <p className='lead'>AÇÃO</p>
                          </div>
                          <div className='col-xs-12 col-md-6'>
                            <a className='btn btn-success' href='http://www.jquery2dotnet.com'>Gerenciar</a>
                          </div>
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
