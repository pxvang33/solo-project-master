import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
class PlayerHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentDidMount() {
        this.getBoxscore();
        this.getPracticeBoxscore();
    }

    getBoxscore = () => {
        let action = { type: 'FETCH_BOXSCORE_HISTORY' }
        this.props.dispatch(action)
    }
    getPracticeBoxscore = () => {
        let action = { type: 'FETCH_PRACTICE_BOXSCORE_HISTORY' }
        this.props.dispatch(action)
    }
    deleteBoxscore = (id) => {
        const action = { type: 'DELETE_BOXSCORE', payload: id }
        this.props.dispatch(action);
    }
    deletePracticeBoxscore = (id) => {
        const action = { type: 'DELETE_PRACTICE_BOXSCORE', payload: id }
        this.props.dispatch(action);
    }
    getUpdateLiveGameBoxscore = (boxscore) => {
        // set edit player reducer rather than going to saga, will pass entire object
        console.log('in getupdatelivegameboxscore', boxscore);
        
        const action = { type: 'SET_EDIT_LIVE_GAME_BOXSCORE_HISTORY', payload: boxscore}
        this.props.dispatch(action)
        this.props.history.push(`/playerhistory/edit`)
    }
    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div>
                {/* {JSON.stringify(this.props)} */}
                <h2>Player History</h2>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange} variant="fullWidth">
                            <Tab label="Live Game" />
                            <Tab label="Practice" />
                            {/* <Tab label="Item Three" /> */}
                        </Tabs>
                    </AppBar>
                    {value === 0 && <TabContainer>
                        <table className="garden">
                            <thead>
                                <tr>
                                    <th>Edit</th>
                                    <th>Date</th>
                                    <th>Player Name</th>
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
                                {/* plants go here */}
                                {/* {show} */}
                                {this.props.reduxStore.boxscore.boxscoreHistory.map((boxscore) => {
                                    return(
                                        <tr key={boxscore.id} >
                                            <td><button onClick ={ () => {this.deleteBoxscore(boxscore.id)} }>delete</button>
                                                <button onClick={ () => {this.getUpdateLiveGameBoxscore(boxscore)} }>edit</button></td>
                                            <td>{moment(boxscore.date).format('L')}</td>
                                            <td>{boxscore.player_name}</td>
                                            <td>{boxscore.FGM}</td>
                                            <td>{boxscore.FGA}</td>
                                            <td>{boxscore.THREEPM}</td>
                                            <td>{boxscore.THREEPA}</td>
                                            <td>{boxscore.REB}</td>
                                            <td>{boxscore.AST}</td>
                                            <td>{boxscore.TO}</td>
                                            <td>{boxscore.PTS}</td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                        </TabContainer>}
                    {value === 1 && <TabContainer>Item Two
                                                <table className="garden">
                            <thead>
                                <tr>
                                    <th>Edit</th>
                                    <th>Date</th>
                                    <th>Player Name</th>
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
                                {/* plants go here */}
                                {/* {show} */}
                                {this.props.reduxStore.boxscore.practiceBoxscoreHistory.map((practiceBoxscore) => {
                                    return (
                                        <tr key={practiceBoxscore.id} >
                                            <td><button onClick={() => { this.deletePracticeBoxscore(practiceBoxscore.id) }}>delete</button>
                                                <button onClick={() => { this.updatePracticeBoxscore(practiceBoxscore.id) }}>edit</button></td>
                                            <td>{practiceBoxscore.date}</td>
                                            <td>{practiceBoxscore.player_name}</td>
                                            <td>{practiceBoxscore.FGM}</td>
                                            <td>{practiceBoxscore.FGA}</td>
                                            <td>{practiceBoxscore.THREEPM}</td>
                                            <td>{practiceBoxscore.THREEPA}</td>
                                            <td>{practiceBoxscore.REB}</td>
                                            <td>{practiceBoxscore.AST}</td>
                                            <td>{practiceBoxscore.TO}</td>
                                            <td>{practiceBoxscore.PTS}</td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </TabContainer>}
                    {/* {value === 2 && <TabContainer>Item Three</TabContainer>} */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(withStyles(styles)(PlayerHistory));