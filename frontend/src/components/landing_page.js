/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Stack, Chip } from '@mui/joy';
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
    this.props.fetchResponse(this.state.wordList, this.props.history);
  }

  onSubmit = (e) => {
    console.log(this.state.wordList);
    if (e.key === 'Enter' && this.state.wordList.length < 3 && !this.state.wordList.includes(this.state.input)) {
      this.setState((perv) => { return { wordList: [...perv.wordList, perv.input] }; });
    }
  }

  handleDelete = (chip) => {
    console.log(this.state.wordList);
    this.setState((perv) => (
      { wordList: perv.filter((currentChip) => currentChip !== chip) }
    ));
    console.log(this.state.wordList);
  }

  onTextChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  renderChips() {
    return (
      <Stack direction="row" spacing={1}>
        {this.state.wordList.map((chip) => (
          <Chip key={chip} label={chip} onDelete={() => this.handleDelete(chip)} />
        ))}
      </Stack>
    );
  }

  render() {
    return (
      <div className="home_page">
        <div className="logo" alt="logo" />
        <p>Your ideas. Your saga. Your creativity. Our power.</p>
        <p>  Try giving our tool a one-liner initial story prompt, or if you don’t have one, write keywords that interest you.</p>
        <input type="text" placeholder="eg: dartmouthians from different multiverses meet" className="landinginput" onKeyDown={this.onSubmit} onChange={this.onTextChange} value={this.state.input} />
        <button type="button" className="landingbutton" onClick={this.onButtonChange}>Start writing your Saga →</button>
        {this.renderChips()}
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchResponse })(LandingPage));
