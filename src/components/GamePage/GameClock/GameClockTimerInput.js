import React, { Component } from 'react';
import { connect } from 'react-redux';

// const ms = require('pretty-ms')

class GameClockTimerInput extends Component {

    render() {
        return (
            <div>
                <h3>Input your desired time</h3>
                <input type="number"  />
            </div>
        );
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(GameClockTimerInput);