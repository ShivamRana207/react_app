import './App.css';

import React, { Component } from 'react'
import Navbar from './componet/Navbar';
import Content from './componet/Content';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
          <Route path="/"> <Content PageSize={21} country="in" category=""general/> </Route>
          <Route path="/business"> <Content PageSize={21} country="in" category="business"/> </Route>
          <Route path="/entertainment"> <Content PageSize={21} country="in" category="entertainment"/> </Route>
          <Route path="/health"> <Content PageSize={21} country="in" category="health"/> </Route>
          <Route path="/techogynol"> <Content PageSize={21} country="in" category="techogynol"/> </Route>
          <Route path="/science"> <Content PageSize={21} country="in" category="science"/> </Route>
          <Route path="/sports"> <Content PageSize={21} country="in" category="sports"/> </Route>
            
           
        </Switch>
        </Router>
      </div>

    )
  }
}
