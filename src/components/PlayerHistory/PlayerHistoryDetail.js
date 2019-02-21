import React, { Component } from 'react';
import { connect } from 'react-redux';

// const ms = require('pretty-ms')

class PlayerHistoryDetail extends Component {

    componentDidMount() {
        // this.getLiveGameHistoryDetail();
    }
    // getLiveGameHistoryDetail = () => {
    //     let action = { type: 'FETCH_EDIT_LIVE_GAME_BOXSCORE' }
    //         this.props.dispatch(action)
        
    // }
    render() {
        return (
            <div>
                <h2>Player History Detail </h2>
                {JSON.stringify(this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory)}
                {/* {JSON.stringify(this.props.match.params.id)} */}
                <form>
                    <div>FGM
                    <input type="number" value={this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.FGM}></input> </div>
                    <div>FGA
                    <input type="number" value={this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.FGA}></input></div>
                    <div>3PM
                    <input type="number" value={this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.THREEPM}></input></div>
                    <div>3PA
                    <input type="number" value={this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.THREEPA}></input> </div>
                    <div> REB
                    <input type="number" value={this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.REB}></input></div>
                    <div>AST
                    <input type="number" value={this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.AST}></input></div>
                    <div>TO
                    <input type="number" value={this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.TO}></input> </div>
                    <div>PTS
                    <input type="number" value={this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.PTS}></input></div>

                    <input type="submit" ></input>
                </form>

            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(PlayerHistoryDetail);