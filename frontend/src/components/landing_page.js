
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Chip, ChipDelete } from '@mui/joy';
import { fetchResponse } from '../actions';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: [],
      input: '',
    };
  }

  onButtonChange = () => {
    this.props.fetchResponse(this.state.wordList);
  }

  onSubmit = (e) => {
    console.log(this.state.wordList);
    if (e.key === 'Enter' && this.state.wordList < 3) {
      this.setState((perv) => { return { wordList: [...perv.wordList, perv.input] }; });
    }
  }

  onDelete1 = (e) => {
    this.setState((perv) => {
      return { wordList: perv.wordList.splice(0, 1) };
    });
  }

  onDelete2 = (e) => {
    this.setState((perv) => {
      return { wordList: perv.wordList.splice(1, 1) };
    });
  }

  onDelete3 = (e) => {
    this.setState((perv) => {
      return { wordList: perv.wordList.splice(2, 1) };
    });
  }

  onTextChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  renderChips() {
    return (
      <div>
        <Chip style={{ display: this.state.wordList.length > 0 ? 'inline' : 'none' }}
          endDecorator={
            <ChipDelete onDelete={this.onDelete1} />
          }
        >
          {this.state.wordList[0]}
        </Chip>
        <Chip style={{ display: this.state.wordList.length > 1 ? 'inline' : 'none' }} endDecorator={<ChipDelete onDelete={this.onDelete2} />}>{this.state.wordList[1]}</Chip>
        <Chip style={{ display: this.state.wordList.length > 2 ? 'inline' : 'none' }} endDecorator={<ChipDelete onDelete={this.onDelete3} />}>{this.state.wordList[2]}</Chip>
      </div>
    );
  }

  render() {
    return (
      <div className="home_page">
        <img className="logo" src={logo} alt="logo" />
        <p>Your ideas. Your saga. Your creativity. Our power.</p>
        <p>Try giving our tool a one-liner initial story prompt, or if you don’t have one, write keywords that interest you.</p>
        <input type="text" onKeyDown={this.onSubmit} onChange={this.onTextChange} value={this.state.input} />
        <button type="button" onClick={this.onButtonChange}>test</button>
        {this.renderChips()}
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchResponse })(LandingPage));
