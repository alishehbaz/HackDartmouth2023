/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="story-editor">
        <h1>Story Editor</h1>
        <button type="submit">Publish your changes ✓</button>
        <form>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
          <div>
            <label htmlFor="story">Story:</label>
            <button type="submit" className="suggest">Generate more content +</button>
          </div>
          <textarea id="story" name="story" rows="20" cols="50" />
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   outline: state.outline.list,
// });

export default withRouter(connect(null, null)(Editor));
