/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PromptsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          title: 'Infinite Horizons',
          description: 'Dartmouth students from different universes team up to uncover the truth behind the mysterious Infinity Horizon that connects their worlds.',
        },
        {
          title: 'The Time Machine',
          description: 'A scientist builds a time machine and travels to the distant future, where he finds an idyllic society threatened by dark forces.',
        },
        {
          title: 'Brave New World',
          description: 'In a dystopian society, people are genetically engineered and conditioned to be content',
        },
      ],
      checked: '',
      input: '',
    };
  }

  onRadioPress = (e) => {
    this.setState({ checked: e.target.value });
  }

  onTextChange = (e) => {
    this.setState({
      input: e.target.value,
      checked: e.target.value,
    });
  }

  onInputPress = (e) => {
    this.setState({
      checked: e.target.value,
    });
  }

  onButtonChange = (e) => {
    this.props.navigate();
  }

  render() {
    return (
      <div className="main-container">
        <div className="logo" alt="logo" />
        <div className="prompts-container">
          <p>{this.props.prompts}</p>
          <h1>writing a story about</h1>
          <div>
            {this.state.options.map((option) => (
              <div key={option.title} id="option-box">
                <label htmlFor={option}>
                  <input
                    type="radio"
                    id="option-choice"
                    value={option.title}
                    checked={this.state.checked === option.title}
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

export default withRouter(connect(mapStateToProps, null)(PromptsPage));
