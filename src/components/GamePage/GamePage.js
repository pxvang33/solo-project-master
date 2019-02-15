import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';

const styles = {
    card: {
        maxWidth: 230,
    },
    media: {
        height: 140,
    },
};


class GamePage extends Component {
    twoPointMake = () => {
        let action = {type: 'TWO_POINT_MAKE'};
        this.props.dispatch(action)
    }

    twoPointMiss = () => {
        let action = {type: 'TWO_POINT_MISS'};
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
    addRebound = () => {
        let action = { type: 'ADD_REBOUND' };
        this.props.dispatch(action)
    }

    addAssist = () => {
        let action = { type: 'ADD_ASSIST' };
        this.props.dispatch(action)
    }
    addTurnover = () => {
        let action = { type: 'ADD_TURNOVER' };
        this.props.dispatch(action)
    }
    addBoxscore = () => {
        let boxscoreFromReduxStore = this.props.reduxStore.boxscore.game_mode
        let action = { type: 'ADD_BOXSCORE', payload: boxscoreFromReduxStore}
        this.props.dispatch(action);
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
                                <th>REB</th>
                                <th>AST</th>
                                <th>TO</th>
                                <th>PTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.reduxStore.boxscore.game_mode.FGM}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.FGA}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.THREEPM}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.THREEPA}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.REB}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.AST}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.TO}</td>
                                <td>{this.props.reduxStore.boxscore.game_mode.PTS}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography >
                                2 point
                                </Typography>
                                <CardActions>
                                    <Button  onClick={this.twoPointMake} variant="outlined" color="primary" className="make">
                                        Make</Button>
                                    <Button onClick={this.twoPointMiss} variant="outlined" color="primary" className="miss">
                                        Miss</Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography >
                                3 point
                            </Typography>
                            <CardActions>
                                <Button onClick={this.threePointMake} variant="outlined" color="primary" className="make">
                                    Make</Button>
                                <Button onClick={this.threePointMiss} variant="outlined" color="primary" className="miss">
                                    Miss</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography >
                                Rebound
                            </Typography>
                            <CardActions>
                                <Button onClick={this.addRebound} variant="outlined" color="primary" className="make">
                                    Rebound</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography >
                                Assist/Turnover
                            </Typography>
                            <CardActions>
                                <Button onClick={this.addAssist} variant="outlined" color="primary" className="make">
                                    Assist</Button>
                                <Button onClick={this.addTurnover} variant="outlined" color="primary" className="miss">
                                    Turnover</Button>
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

export default connect(mapStateToProps)(withStyles(styles)(GamePage));