import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Character from './character';

const txt = '';
class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [1, 2, 3, 4, 5, 5, 5, 5],
      showAddForm: false,
      newCharacter: {},
    };
  }

  // handleInputChange = (event) => {
  //   const target = event.target;
  //   const name = target.name;
  //   const value = target.value;

  //   this.setState({
  //     newCharacter: {
  //       ...this.state.newCharacter,
  //       [name]: value,
  //     },
  //   });
  // };

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const characters = this.state.characters;
  //   characters.push(this.state.newCharacter);
  //   this.setState({
  //     characters: characters,
  //     showAddForm: false,
  //     newCharacter: {},
  //   });
  // };

  render() {
    return (
      <div className="characters">
        <h1>Characters</h1>
        <button type="button" className="" onClick={() => this.setState({ showAddForm: true })}>
          Add a new character +
        </button>
        <button type="button" className="suggest">
          Suggest new characters +
        </button>
        {this.state.showAddForm && (
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor={txt}>
              Name:
              <input type="text" name="name" value={this.state.newCharacter.name || ''} onChange={this.handleInputChange} />
            </label>
            <label htmlFor={txt}>
              Social Group:
              <input
                type="text"
                name="socialGroup"
                value={this.state.newCharacter.socialGroup || ''}
                onChange={this.handleInputChange}
              />
            </label>
            <label htmlFor={txt}>
              Belief:
              <input type="text" name="belief" value={this.state.newCharacter.belief || ''} onChange={this.handleInputChange} />
            </label>
            <label htmlFor={txt}>
              R1:
              <input type="text" name="r1" value={this.state.newCharacter.r1 || ''} onChange={this.handleInputChange} />
            </label>
            <label htmlFor={txt}>
              R2:
              <input type="text" name="r2" value={this.state.newCharacter.r2 || ''} onChange={this.handleInputChange} />
            </label>
            <button type="submit">Add Character</button>
          </form>
        )}
        {this.state.characters.map((header) => {
          return (
            <li key={header} style={{ listStyle: 'none', margin: 'none', padding: 'none' }}>
              <Character
                avatar="https://www.w3schools.com/w3images/avatar6.png"
                socialGroup="small child"
                name="Peter Pan"
                belief="Children hood adventuring is cool"
                r1="Caption Hook"
                r2="Someone Else"
              />
            </li>
          );
        })}
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Characters));
