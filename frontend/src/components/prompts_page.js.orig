/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { sendPrompt } from '../actions';

class PromptsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked_body: '',
      checked_title: '',
      checked_id: '',
      input: '',
    };
  }

  onRadioPress = (e) => {
    this.setState({ checked_body: e.target.value.description });
    this.setState({ checked_title: e.target.value.title });
    this.setState({ checked_id: e.target.value._id });
  }

  onTextChange = (e) => {
    this.setState({
      input: e.target.value,
      checked_title: '',
      checked_body: e.target.value,
    });
  }

  onInputPress = (e) => {
    const promptID = uuidv4();
    this.setState({
      checked_title: e.target.value.title,
      checked_body: e.target.value.body,
      checked_id: promptID,
    });
  }

  onButtonChange = (e) => {
    const temp = {
      title: this.state.checked_title,
      body: this.state.checked_body,
      id: this.state.checked_id,
    };
    console.log(temp);
    this.props.sendPrompt(temp);
  }

  render() {
    return (
      <div className="main-container">
        <div className="logo" alt="logo" />
        <div className="prompts-container">
          <p>{this.props.prompts}</p>
          <h1>writing a story about</h1>
          <div>
            {this.props.prompts.map((option) => (
              <div key={option.title} id="option-box">
                <label htmlFor={option}>
                  <input
                    type="radio"
                    id="option-choice"
                    value={option}
                    checked={this.state.checked.title === option.title}
                    onChange={this.onRadioPress}
                  />
                  <span style={{ fontWeight: '600', color: '#ED586A' }}>
                    {option.title}
                  </span>
                </label>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
          or...
          <div>
            <div className="prompt-text-input">
              <input
                id="text-input"
                type="text"
                value={this.state.input}
                onChange={this.onTextChange}
                onClick={this.onInputPress}
                placeholder="Enter your own prompt:"
              />
            </div>
          </div>
          <button type="button" className="promptinput" onClick={this.onButtonChange}>Continue</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  prompts: state.responses.prompts,
});

export default withRouter(connect(mapStateToProps, { sendPrompt })(PromptsPage));
