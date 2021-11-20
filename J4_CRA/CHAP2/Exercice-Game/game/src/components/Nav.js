import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";

import './Nav.css';

class Nav extends Component {

  render() {

    return (
      <ul>
        <li>
          <NavLink exact activeClassName="selected" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="selected" to="/multiplications">Multiplications</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="selected" to="/game">Game</NavLink>
        </li>
      </ul>
    )
  }
}
export default Nav;