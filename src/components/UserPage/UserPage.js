import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      person_id: this.props.reduxStore.user.id
    } // end state
  } // end constructor

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_PLAYER'});
  }
  
  playerNameChange = (event) => {
    this.setState ({
      playerName: event.target.value,
    })
    console.log('IN STATE', this.state);
    
  } // end playerNameChange

  addPlayer = () => {
    let playerToAdd = this.state;
    let action = { type: 'ADD_PLAYER_NAME', payload: playerToAdd};
    this.props.dispatch(action);

  } // end addPlayer
  render() {
    return(
      <div>
        {JSON.stringify(this.props.reduxStore.player)}

        <h1 id="welcome">
          Welcome, {this.props.reduxStore.user.username}!
        </h1> 
          <input onChange={this.playerNameChange} placeholder="Add Player" />
          <button onClick={this.addPlayer}>Add Player</button>
        {/* <LogOutButton className="log-in" /> */}
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
