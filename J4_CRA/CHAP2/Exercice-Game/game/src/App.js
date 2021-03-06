import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Multiplications from './components/Multiplications';
import TableMultiplication from './components/TableMultiplication';
import Game from './components/Game';
import Score from './components/Score';

const numberTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends Component {

  render() {

    return (
      <Router >
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/multiplications" component={({ location }) => <Multiplications location={location} numberTable={numberTable} />} />
          <Route path="/multiplications/:id" component={TableMultiplication} />
          <Route path="/game" component={Game} />
          <Route path="/score" component={Score} />
        </Switch>
      </Router>
    )
  }
}
export default App;