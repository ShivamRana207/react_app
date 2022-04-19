import './App.css';

import React, { Component } from 'react'
import Navbar from './componet/Navbar';
import Content from './componet/Content';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
          <Route exact path="/"> <Content PageSize={21} key="general" country="in" category="general"/> </Route>
          <Route exact path="/business"> <Content PageSize={21} key="business" country="in" category="business"/> </Route>
          <Route exact path="/entertainment"> <Content PageSize={21} key="entertainment" country="in" category="entertainment"/> </Route>
          <Route exact path="/health"> <Content PageSize={21} key="health" country="in" category="health"/> </Route>
          <Route exact path="/techogynol"> <Content PageSize={21} key="techogynol" country="in" category="techogynol"/> </Route>
          <Route exact path="/science"> <Content PageSize={21} key="science" country="in" category="science"/> </Route>
          <Route exact path="/sports"> <Content PageSize={21} key="sports" country="in" category="sports"/> </Route>
            
           
        </Switch>
        </Router>
      </div>

    )
  }
}
