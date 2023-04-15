/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchResponse } from '../actions';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onButtonPress

  render() {
    return (
      <div className="post_container">
        <button type="button" onChange={this.onTagsChange}>test</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchResponse })(LandingPage));
