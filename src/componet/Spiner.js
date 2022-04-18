import React, { Component } from 'react'
import loading from './loading.gif'

export class Spiner extends Component {
  render() {
    return (
      <img src={loading} alt="Spiner" />
    )
  }
}

export default Spiner