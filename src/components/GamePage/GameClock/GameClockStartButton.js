import React, { Component } from 'react';
import { connect } from 'react-redux';

// const ms = require('pretty-ms')

class GameClockStartButton extends Component {

    render() {
        return (
            <div>
                <button>Start</button>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(GameClockStartButton);