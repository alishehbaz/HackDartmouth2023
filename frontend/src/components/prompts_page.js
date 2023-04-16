import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './logo.png';
import './landing_page.css';

const text = "";
const options = [
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
];

class PromptsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  render() {
    return (
      <div className="main-container">
        <img src={logo} alt="logo" />
        <div className="prompts-container">
          <p>{this.props.prompts}</p>
          <h1>writing a story about</h1>
          <div>
            {options.map((option) => (
              <div key={option.title} id="option-box">
                <label htmlFor={option}>
                  <input
                    type="radio"
                    id="option-choice"
                    value={option.title}
                    checked={this.state.selectedOption === option.title}
                    onChange={this.handleOptionChange}
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
              <label htmlFor={text}>Enter some text:</label>
                  <input
                    id="text-input"
                    type="text"
                  />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  prompts: state.responses.prompts,
});

export default withRouter(connect(mapStateToProps, null)(PromptsPage));
