import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div><nav className="navbar navbar-expand-lg navbar-lightblue bg-green">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">News Letter</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="/">Forntent</a>
            <a className="nav-link" href="/">Backend</a>
            <a className="nav-link" href="/">Devops</a>
            
          </div>
        </div>
      </div>
    </nav></div>
    )
  }
}

export default Navbar