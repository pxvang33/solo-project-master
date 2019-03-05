import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import swal from 'sweetalert';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';


// import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';

const styles = theme => ({
  button: {
    margin: 30,
    width: 350,
    alignContent: "center",
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: "#f3961d",
    '&:hover': {
      backgroundColor: "#120064",
    },
  },
  playerHistory: {
    margin: 40,
    width: 350,
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: "#f3961d",
    '&:hover': {
      backgroundColor: "#120064",
    },
  },
  game: {
    margin: 40,
    alignContent: 'center',
    width: 350,
    height: 100,
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: "#f3961d",
    '&:hover': {
      backgroundColor: "#120064",
    },
  },
  input: {
    display: 'none',
  },
  addPlayer: {
    width: 300,
    height: 50,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 400,
  },
  textField: {
    marginLeft: 40,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

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
    console.log('in playerIDChange name', event.target);

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
    if (event === 'live_game') {
      let boxscoreInfo =
      {
        playerName: this.state.newPlayer.playerName,
        person_id: this.props.reduxStore.user.id,
        player_id: parseInt(this.state.newPlayer.player_id),
        game_mode: event
      }
      // declare action and have another dispatch
      let clearBoxscore = { type: 'CLEAR_BOXSCORE' }
      this.props.dispatch(clearBoxscore);
      let action = { type: 'UPDATE_BOXSCORE', payload: boxscoreInfo }
      this.props.dispatch(action);
      this.props.history.push('/livegame');
      console.log('in action.payload', action.payload);

    } else if (event === 'practice') {
      let boxscoreInfo =
      {
        playerName: this.state.newPlayer.playerName,
        person_id: this.props.reduxStore.user.id,
        player_id: parseInt(this.state.newPlayer.player_id),
        game_mode: event
      }
      let clearBoxscore = { type: 'CLEAR_BOXSCORE' }
      this.props.dispatch(clearBoxscore);
      let action = { type: 'UPDATE_BOXSCORE', payload: boxscoreInfo }
      this.props.dispatch(action);
      this.props.history.push('/practice');

      console.log('in action.payload', action.payload);
    }

  }
  render() {
    const { classes } = this.props;
    return (
      <div className = "user-page">
        {/* {JSON.stringify(this.props.reduxStore.player)} */}

        {/* <h1 id="welcome">
          Welcome, {this.props.reduxStore.user.username}!
        </h1> */}
        {/* {JSON.stringify(this.state)} */}
        <TextField
          id="add-player"
          label="Add Player"
          className={classes.textField}
          margin="normal"
          display='center'
          variant="outlined"
          onChange={this.playerNameChange}
          className={classes.addPlayer}
        />
        {/* <input onChange={this.playerNameChange} placeholder="Add Player" /> */}
        <Button className="add-player" onClick={this.addPlayer} variant="contained" size="small" className={classes.button}>
          Add Player
      </Button>
        {/* <button onClick={this.addPlayer}>Add Player</button> */}
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple"></InputLabel>
          <Select
            native
            // value={this.state.newPlayer.playerName}
            onChange={this.playerIdChange}
          // inputProps={{
          //   name: 'age',
          //   id: 'age-native-simple',
          // }}
          >
            <option value="">Select player </option>
            {this.props.reduxStore.player.map((name, i) => {
              return <option key={i} value={name.id} name={name.player_name} > {name.player_name} </option>
            })}
          </Select>
        </FormControl>

        {/* <select onChange={this.playerIdChange} className="select-player">
          <option value="">Select player </option>
          {this.props.reduxStore.player.map((name, i) => {
            return <option key={i} value={name.id} name={name.player_name}> {name.player_name} </option>
          })}
        </select> */}
        <br />
        {/* <button onClick={this.submitGameMode} value="live_game">Live Game</button> */}
        <Button onClick={ () => this.submitGameMode('live_game')} value="live_game" variant="contained" size="small" className={classes.game}>
          Live Game
      </Button>
        <Button onClick={ () => this.submitGameMode('practice')} value="practice" variant="contained" size="small" className={classes.game}>
          Practice
      </Button>
        {/* <button onClick={this.submitGameMode} value="practice">Practice</button> */}
        <br />
        <br />
        <Button onClick={this.viewHistory} value="player_history" variant="contained" size="small" className={classes.playerHistory}>
          Player History
      </Button>
        {/* <button onClick={this.viewHistory} value="player_history">Player History</button> */}
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
export default connect(mapStateToProps)(withStyles(styles)(UserPage));
