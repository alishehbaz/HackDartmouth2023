import { NavLink, withRouter } from 'react-router-dom';
import React from 'react';

const Nav = (props) => {
  return (
    <div className="navbar">
      <li><img src="https://i.imgur.com/h1bPfXu.png" alt="" /></li>
      <li><NavLink exact to="/storyboard"><i className="fas fa-home" />Editor</NavLink></li>
      <li><NavLink exact to="/stories"><i className="fas fa-home" />Your Stories</NavLink></li>
      <li><NavLink exact to="/yourprompts"><i className="fas fa-home" />Prompts</NavLink></li>
      <li><NavLink exact to="/yourcharacters"><i className="fas fa-home" />Characters</NavLink></li>
    </div>
  );
};

export default withRouter(Nav);
