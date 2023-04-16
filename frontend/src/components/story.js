/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="story-box">
          <h1>heading</h1>
          <p>truncated text</p>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   outline: state.outline.list,
// });

export default withRouter(connect(null, null)(Story));
