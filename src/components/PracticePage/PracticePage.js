import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import GameClock from './GameClock/GameClock';
import GameClock from '../GamePage/GameClock/GameClock';

const styles = {
    card: {
        maxWidth: 230,
    },
    media: {
        height: 140,
    },
};


class PracticePage extends Component {
    twoPointMake = () => {
        let action = { type: 'TWO_POINT_MAKE' };
        this.props.dispatch(action)
    }

    twoPointMiss = () => {
        let action = { type: 'TWO_POINT_MISS' };
        this.props.dispatch(action)
    }
    threePointMake = () => {
        let action = { type: 'THREE_POINT_MAKE' };
        this.props.dispatch(action)
    }

    threePointMiss = () => {
        let action = { type: 'THREE_POINT_MISS' };
        this.props.dispatch(action)
    }
    addBoxscore = () => {
        let boxscoreFromReduxStore = this.props.reduxStore.boxscore.game_mode
        let action = { type: 'ADD_BOXSCORE', payload: boxscoreFromReduxStore }
        this.props.dispatch(action);
        this.props.history.push('/home');
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <h2>{this.props.reduxStore.boxscore.game_mode.playerName}</h2>
                    {/* {JSON.stringify(this.props.reduxStore.boxscore)} */}
                </div>
                <div>
                    <table className="garden">
                        <thead>
                            <tr>
                                <th>FGM</th>
                                <th>FGA</th>
                                <th>3PM</th>
                                <th>3PA</th>
                                <th>PTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.reduxStore.boxscore.game_mode.FGM}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.FGA}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.THREEPM}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.THREEPA}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.PTS}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <GameClock />
                </div>
                <br />
                <br />
                <div>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography >
                                <b>2 point</b>
                                </Typography>
                            <CardActions>
                                <Button onClick={this.twoPointMake} variant="outlined" color="primary" className="make">
                                    Make</Button>
                                <Button onClick={this.twoPointMiss} variant="outlined" color="primary" className="miss">
                                    Miss</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography >
                                <b>3 point </b>
                            </Typography>
                            <CardActions>
                                <Button onClick={this.threePointMake} variant="outlined" color="primary" className="make">
                                    Make</Button>
                                <Button onClick={this.threePointMiss} variant="outlined" color="primary" className="miss">
                                    Miss</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                    <br />

                    <Button onClick={this.addBoxscore} variant="outlined" color="primary" >Submit game</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(withStyles(styles)(PracticePage));