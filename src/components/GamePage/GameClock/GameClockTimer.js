import React, { Component } from 'react';
import { connect } from 'react-redux';

// const ms = require('pretty-ms')

class GameClockTimer extends Component {

    render() {
        return (
            <div>
                <h2>Clock: {this.props.minutes}:{this.props.seconds} </h2>

            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(GameClockTimer);