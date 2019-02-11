import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
    } // end state
  } // end constructor

  playerNameChange = (event) => {
    this.setState ({
      playerName: event.target.value,
    })
    console.log('IN STATE', this.state);
    
  } // end playerNameChange
  render() {
    return(
      <div>
        {JSON.stringify(this.props)}

        <h1 id="welcome">
          Welcome, {this.props.reduxStore.user.username}!
        </h1> 
          <input onChange={this.playerNameChange} placeholder="Add Player" />
          <button >Add Player</button>
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
