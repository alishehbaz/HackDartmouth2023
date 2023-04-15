import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MainImage extends Component {
  render() {
    return (
      <div />
    );
  }
}

export default withRouter(connect(mapStateToProps, { getMarsImages })(MainImage));
