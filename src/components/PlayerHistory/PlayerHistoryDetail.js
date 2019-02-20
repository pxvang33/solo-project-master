import React, { Component } from 'react';
import { connect } from 'react-redux';

// const ms = require('pretty-ms')

class PlayerHistoryDetail extends Component {

    render() {
        return (
            <div>
                <h2>Player History Detail </h2>

            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(PlayerHistoryDetail);