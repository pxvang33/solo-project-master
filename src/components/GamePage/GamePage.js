import React, {Component} from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';

class GamePage extends Component {

    render() {
        return (
            <div>
                <h2>Game Page</h2>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(GamePage);