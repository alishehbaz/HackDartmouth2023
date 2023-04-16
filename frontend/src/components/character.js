/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="char-box">
          <img src={this.props.avatar} className="av" alt="" />
          <p>Name: {this.props.name}</p>
          <p>Social Group: {this.props.socialGroup}</p>
          <p>Moto: {this.props.belief}</p>
          <p>Relationship 1: {this.props.r1}</p>
          <p>Relationship 2: {this.props.r2}</p>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   outline: state.outline.list,
// });

export default withRouter(connect(null, null)(Character));
