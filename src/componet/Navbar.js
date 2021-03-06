import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export class Navbar extends Component {


  render() {
    return (
      <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News Letter</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/business">Business</Link>
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
              <Link className="nav-link" to="/health">Health</Link>
              <Link className="nav-link" to="/techogynol">Techogynol</Link>
              <Link className="nav-link" to="/science">Science</Link>
              <Link className="nav-link" to="/sports">Sports</Link>


            </div>
          </div>
        </div>
      </nav></div>
    )
  }
}

export default Navbar
