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
                {JSON.stringify(this.props)}
                <h2>Player History</h2>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange} variant="fullWidth">
                            <Tab label="Live Game" />
                            <Tab label="Practice" />
                            {/* <Tab label="Item Three" /> */}
                        </Tabs>
                    </AppBar>
                    {value === 0 && <TabContainer>Item One</TabContainer>}
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