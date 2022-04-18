import './App.css';

import React, { Component } from 'react'
import Navbar from './componet/Navbar';
import Content from './componet/Content';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Content PageSize={21}/>
        </div>

    )
  }
}
