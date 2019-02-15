import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
    }

    getBoxscore = () => {
        let action = { type: 'FETCH_BOXSCORE_HISTORY' }
        this.props.dispatch(action)
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
                                {this.props.reduxStore.boxscore.boxscoreHistory.map((boxscore) => {
                                    return(
                                        <tr key={boxscore.id} >
                                            <td>{boxscore.date}</td>
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
                    {value === 1 && <TabContainer>Item Two</TabContainer>}
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