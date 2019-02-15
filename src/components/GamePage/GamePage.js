import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';

class GamePage extends Component {
    twoPointMake = () => {
        let action = {type: 'TWO_POINT_MAKE'};
        this.props.dispatch(action)
    }

    twoPointMiss = () => {
        let action = {type: 'TWO_POINT_MISS'};
        this.props.dispatch(action)
    }
    render() {
        return (
            <div>
                <div>
                    <h2>{this.props.reduxStore.boxscore.game_mode.playerName}</h2>
                    {JSON.stringify(this.props.reduxStore.boxscore)}
                </div>
                <div>
                        <Card className="">
                            <CardContent>
                                <Typography >
                                <h3>2 point</h3>
                                </Typography>
                                <CardActions>
                                    <Button  onClick={this.twoPointMake} variant="outlined" color="primary" className="make">
                                        Make</Button>
                                    <Button onClick={this.twoPointMiss} variant="outlined" color="primary" className="miss">
                                        Miss</Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    <Card className="">
                        <CardContent>
                            <Typography >
                                <h3>3 point</h3>
                            </Typography>
                            <CardActions>
                                <Button variant="outlined" color="primary" className="make">
                                    Make</Button>
                                <Button variant="outlined" color="primary" className="miss">
                                    Miss</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                    <Card className="">
                        <CardContent>
                            <Typography >
                                <h3>Rebound</h3>
                            </Typography>
                            <CardActions>
                                <Button variant="outlined" color="primary" className="make">
                                    Rebound</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                    <Card className="">
                        <CardContent>
                            <Typography >
                                <h3>Assist/Turnover</h3>
                            </Typography>
                            <CardActions>
                                <Button variant="outlined" color="primary" className="make">
                                    Assist</Button>
                                <Button variant="outlined" color="primary" className="miss">
                                    Turnover</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(GamePage);