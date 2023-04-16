/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const prompts = ['bruh', 'bruh', 'bruh', 'bruh'];

class Yourprompts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Previously Generated Prompts</h1>
        <div className="genprompts">{prompts.map((prompt) => (
          <div key={prompt.title} id="option-box">
            <span style={{ fontWeight: '600', color: '#ED586A' }}>
              {prompt.title}
            </span>
            <p>{prompt.description}</p>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Yourprompts));
