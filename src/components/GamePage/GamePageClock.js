import React, { Component } from 'react';
import { connect } from 'react-redux';


class GamePageClock extends Component {
    render() {
        return(
            <div>
                <h2>Clock:</h2>
            </div>
        )
    }

}

const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(GamePageClock);