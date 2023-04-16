import { NavLink, withRouter } from 'react-router-dom';
import React from 'react';

const Nav = (props) => {
  return (
    <li><NavLink exact to="/"><i className="fas fa-home" />Home Page</NavLink></li>
  );
};

export default withRouter(Nav);
