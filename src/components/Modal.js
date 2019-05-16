import React, { Component } from 'react'

class Modal extends Component {
  closeNav () {
    document.getElementById('myNav').style.height = '0%'
  }
  render () {
    return (
      <body style={{ borderRadius: '4px', backgroundColor: 'white', width: '50%', margin: '0 auto' }}>
        <div class='content'>

          <form action='/action_page.php'>
            <header class='header'>
              <a style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                width: '35px',
                height: '35px',
                borderRadius: '100%'
              }} href='javascript:void(0)' class='header-right social' onClick={this.closeNav} title='Close Modal'>
                <i class='glyphicon glyphicon-remove' />
              </a>
            </header>
            <div class='row'>
              <div class='vl'>
                <span class='vl-innertext'>or</span>
              </div>

              <div class='col'>
                <a href='#' class='fb btn'>
                  <i class='fa fa-facebook fa-fw social' />
                  <label style={{ marginLeft: '5px' }} class='social'>Login with Facebook</label>
                </a>
                <a href='#' class='twitter btn'>
                  <i class='fa fa-twitter fa-fw social' />
                  <label style={{ marginLeft: '5px' }} class='social'>Login with Twitter</label>
                </a>
                <a href='#' class='google btn'>
                  <i class='fa fa-google fa-fw social' />
                  <label style={{ marginLeft: '5px' }} class='social'>Login with Google+</label>
                </a>
              </div>

              <div class='col'>
                <input class='btn' type='text' name='username' placeholder='Username' required />
                <input class='btn' type='password' name='password' placeholder='Password' required />
                <input class='btn' type='submit' value='Login' />
              </div>

            </div>
          </form>
        </div>

        <div class='bottom-container'>
          <div class='row'>
            <div class='col'>
              <a href='#' style={{ color: 'white', fontSize: '17px' }} class='btn'>Sign up</a>
            </div>
            <div class='col'>
              <a href='#' style={{ color: 'white', fontSize: '17px' }} class='btn'>Forgot password?</a>
            </div>
          </div>
        </div>
      </body>
    )
  }
}

export default Modal
