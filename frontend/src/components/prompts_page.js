import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PromptsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>{this.props.prompts}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  prompts: state.responses.prompts,
});

export default withRouter(connect(mapStateToProps, null)(PromptsPage));
