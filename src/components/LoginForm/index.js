// Write your JS code here
import './index.css'

import {Component} from 'react'
class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', isErrorShowing: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace("/")
  }

  onSubmitFailure = errorMsg => {
    this.setState({isErrorShowing: true, errorMsg})
  }

  onSubmittingForm = async event => {
    event.preventDefault()
    const {history} = this.props
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangingUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangingPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg, isErrorShowing} = this.state
    return (
      <div className="login-route-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-image"
        />
        <form className="form-container" onSubmit={this.onSubmittingForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-image"
          />
          <label htmlFor="username">USERNAME</label>
          <input
            id="username"
            type="text"
            className="input-styles"
            onChange={this.onChangingUsername}
            value={username}
            placeholder="Username"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            id="password"
            type="password"
            className="input-styles"
            onChange={this.onChangingPassword}
            value={password}
            placeholder="Password"
          />
          <button className="login-button-style" type="submit">
            Login
          </button>
          {isErrorShowing && <p>*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
