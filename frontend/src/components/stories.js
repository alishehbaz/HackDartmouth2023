/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './navbar';
import Story from './story';

const st = [1, 2, 3];

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-main">
        <Nav />
        <h1>Stories</h1>
        <div className="story-container">
          {st.map((s) => {
            return (
              <Story />
            );
          })}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   prompts: state.responses.prompts,
// });

export default withRouter(connect(null, null)(Stories));
