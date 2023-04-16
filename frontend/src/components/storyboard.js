/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Characters from './characters';
import Outline from './outline';
import Editor from './editor';
import Nav from './navbar';

class PromptsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main-main">
        <Nav />
        <div className="main">
          <Outline />
          <Editor />
          <Characters />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   prompts: state.responses.prompts,
// });

export default withRouter(connect(null, null)(PromptsPage));
