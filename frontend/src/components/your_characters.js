/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './navbar';
import Characters from './characters';

class Yourcharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-main">
        <Nav />
        <h1>Your Characters</h1>
        <Characters id="chrs" />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   prompts: state.responses.prompts,
// });

export default withRouter(connect(null, null)(Yourcharacters));
