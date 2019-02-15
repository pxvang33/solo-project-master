import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // need to create new state object for player name, so it doesnt take the player ID untill select player
      newPlayer: {
        playerName: null,
        person_id: this.props.reduxStore.user.id,
        player_id: null,
        game_mode: null,
      } // end newPlayer
    } // end state
  } // end constructor

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PLAYER' });
  }

  playerNameChange = (event) => {
    this.setState({
      newPlayer: {
        ...this.state.newPlayer,
        playerName: event.target.value,
      }
    });
    console.log('IN STATE', this.state);
  } // end playerNameChange

  addPlayer = () => {
    let playerToAdd = this.state.newPlayer;
    let action = { type: 'ADD_PLAYER_NAME', payload: playerToAdd };
    this.props.dispatch(action);
  } // end addPlayer

  playerIdChange = (event) => {
    console.log('in playerIdchange', event.target.value);
    this.setState({
      newPlayer: {
        ...this.state.newPlayer,
        player_id: event.target.value,
        playerName: event.target.options[event.target.selectedIndex].text
      }
    })
  }
  viewHistory = () => {
    this.props.history.push('/playerhistory');

  }
  submitGameMode = (event) => {
    console.log('submitgamemode works');
    // Either pass player as a route param OR store in redux, constatnly update redux store to show 
    // up to date stats
    if (event.target.value === 'live_game') {
      let boxscoreInfo =
      {
        playerName: this.state.newPlayer.playerName,
        person_id: this.props.reduxStore.user.id,
        player_id: parseInt(this.state.newPlayer.player_id),
        game_mode: event.target.value
      }
      let action = { type: 'UPDATE_BOXSCORE', payload: boxscoreInfo }
      this.props.dispatch(action);
      this.props.history.push('/livegame');
      console.log('in action.payload', action.payload);
    } else if (event.target.value === 'practice') {
      let boxscoreInfo =
      {
        playerName: this.state.newPlayer.playerName,
        person_id: this.props.reduxStore.user.id,
        player_id: parseInt(this.state.newPlayer.player_id),
        game_mode: event.target.value
      }
      let action = { type: 'UPDATE_BOXSCORE', payload: boxscoreInfo }
      this.props.dispatch(action);
      console.log('in action.payload', action.payload);
    }

  }
  render() {

    return (
      <div>
        {JSON.stringify(this.props.reduxStore.player)}

        <h1 id="welcome">
          Welcome, {this.props.reduxStore.user.username}!
        </h1>
        {JSON.stringify(this.state)}

        <input onChange={this.playerNameChange} placeholder="Add Player" />
        <button onClick={this.addPlayer}>Add Player</button>
        <br />

        <select onChange={this.playerIdChange} >
          <option value="">Select player </option>
          {this.props.reduxStore.player.map((name, i) => {
            return <option key={i} value={name.id} name={name.player_name}> {name.player_name} </option>
          })}
        </select>
        <br />
        <button onClick={this.submitGameMode} value="live_game">Live Game</button>
        <button onClick={this.submitGameMode} value="practice">Practice</button>
        <br />
        <br />
        <button onClick={this.viewHistory} value="player_history">Player History</button>

      </div>
    ) // end return
  } // ends render
} // ends component


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxStore => ({
  reduxStore
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
