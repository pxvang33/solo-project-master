import React, { Component } from 'react';
import { connect } from 'react-redux';


class PlayerHistory extends Component {
    componentDidMount() {
        this.getBoxscore();
    }

    getBoxscore = () => {
        let action = { type: 'FETCH_BOXSCORE_HISTORY' }
        this.props.dispatch(action)
    }

    render() {

        return (
            <div>
                {JSON.stringify(this.props)}
                <h2>Player History</h2>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(PlayerHistory);