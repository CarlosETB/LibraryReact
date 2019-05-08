import React, { Component } from 'react'
import api from './Api'
import { Redirect } from 'react-router-dom'

const statuses = {
  'watched': 'Assistido',
  'watching': 'Assistindo',
  'toWathch': 'Assistir'
}

class EditSeries extends Component {
  constructor (props) {
    super(props)
    this.state = {
      genres: [],
      isLoading: false,
      redirect: false,
      series: {}
    }
    this.saveSeries = this.saveSeries.bind(this)
  }
  componentDidMount () {
    this.setState({ isLoading: true })
    api.loadSeriesById(this.props.match.params.id)
      .then((res) => this.setState({ series: res.data }))
    api.loadGenres()
      .then((res) => {
        this.setState({
          isLoading: false,
          genres: res.data
        })
      })
  }
  saveSeries () {
    const newSeries = {
      id: this.props.match.params.id,
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comments: this.refs.comments.value
    }
    api.updateSeries(newSeries)
      .then((res) => {
        this.setState({
          redirect: '/series/' + this.refs.genre.value
        })
      })
  }
  render () {
    return (
      <section className='intro-section'>
        {this.state.redirect &&
          <Redirect to={this.state.redirect} />
        }
        <h1>Editar série</h1>
        <form>
            Nome: <input type='text' defaultValue={this.state.series.name} ref='name' className='form-control' /><br />
            Status:
          <select ref='status'>
            {Object
              .keys(statuses)
              .map(key => <option key={key} value={key}>{statuses[key]}</option>)
            }
          </select><br />
            Genero:
          <select ref='genre'>
            {this.state.genres
              .map(key => <option key={key} value={key}>{key}</option>)
            }
          </select><br />
          Comentários: <textarea ref='comments' type='text' className='form-control' /><br />
          <button type='button' onClick={this.saveSeries}>Salvar</button>
        </form>
      </section>
    )
  }
}
export default EditSeries
