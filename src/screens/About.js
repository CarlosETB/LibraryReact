import React, { Component } from 'react'
import '../css/about.css'

class About extends Component {
  render () {
    return (
      <div className='divAbout'>
        <h1 className='h1About'>Sobre</h1>
        <p className='pAbout'>This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties.
          The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored
          "Try it Yourself" link.</p>
      </div>

    )
  }
}

export default About
