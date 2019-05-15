import React, { Component } from 'react'
import '../css/modal.css'

class Modal extends Component {
  render () {
    return (
      <body>

        <h2>Responsive Social Login Form</h2>
        <p>Resize the browser window to see the responsive effect. When the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other.</p>

        <div class='container'>
          <form action='/action_page.php'>
            <div class='row'>
              <h2 style='text-align:center'>Login with Social Media or Manually</h2>
              <div class='vl'>
                <span class='vl-innertext'>or</span>
              </div>

              <div class='col'>
                <a href='#' class='fb btn'>
                  <i class='fa fa-facebook fa-fw' /> Login with Facebook
                </a>
                <a href='#' class='twitter btn'>
                  <i class='fa fa-twitter fa-fw' /> Login with Twitter
                </a>
                <a href='#' class='google btn'><i class='fa fa-google fa-fw' /> Login with Google+
                </a>
              </div>

              <div class='col'>
                <div class='hide-md-lg'>
                  <p>Or sign in manually:</p>
                </div>

                <input type='text' name='username' placeholder='Username' required />
                <input type='password' name='password' placeholder='Password' required />
                <input type='submit' value='Login' />
              </div>

            </div>
          </form>
        </div>

        <div class='bottom-container'>
          <div class='row'>
            <div class='col'>
              <a href='#' style='color:white' class='btn'>Sign up</a>
            </div>
            <div class='col'>
              <a href='#' style='color:white' class='btn'>Forgot password?</a>
            </div>
          </div>
        </div>

      </body>
    )
  }
}

export default Modal
