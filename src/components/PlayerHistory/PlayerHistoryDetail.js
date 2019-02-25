import React, { Component } from 'react';
import { connect } from 'react-redux';

// const ms = require('pretty-ms')

class PlayerHistoryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.id,
            date: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.date,
            FGA: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.FGA,
            FGM: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.FGM,
            THREEPA: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.THREEPA,
            THREEPM: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.THREEPM,
            REB: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.REB,
            AST: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.AST,
            TO: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.TO,
            PTS: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.PTS,
            game_mode: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.game_mode,
            player_id: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.player_id,
            player_name: this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.player_name
        }
    }

    changeInput = (event) => {
        console.log('event', this.state);
        
        const attributeName = event.target.name;
        const changeValue = event.target.value;
        this.setState({
            ...this.state,
            [attributeName]: parseInt(changeValue),
        })
    }
    submit = (event) => {
        event.preventDefault();
        const action = {
            type: 'UPDATE_LIVE_GAME_BOXSCORE',
            payload: this.state,
        }
        this.props.dispatch(action);
        this.props.history.push('/playerhistory')

    }
    render() {
        return (
            <div>
                <h2> {this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory.player_name} Player History Detail </h2>
                {/* {JSON.stringify(this.props.reduxStore.boxscore.editLiveGameBoxscoreHistory)} */}
                {/* {JSON.stringify(this.props.match.params.id)} */}
                <form onSubmit={this.submit}>
                    <div>FGM
                    <input type="number" onChange={this.changeInput} name="FGM"
                            value={this.state.FGM} />
                    </div>
                    <div>FGA
                    <input type="number" onChange={this.changeInput} name="FGA"
                            value={this.state.FGA} />
                    </div>
                    <div>3PM
                    <input type="number" onChange={this.changeInput} name="THREEPM"
                            value={this.state.THREEPM} />
                    </div>
                    <div>3PA
                    <input type="number" onChange={this.changeInput} name="THREEPA"
                            value={this.state.THREEPA} />
                    </div>
                    <div> REB
                    <input type="number" onChange={this.changeInput} name="REB"
                            value={this.state.REB} />
                    </div>
                    <div>AST
                    <input type="number" onChange={this.changeInput} name="AST"
                            value={this.state.AST} />
                    </div>
                    <div>TO
                    <input type="number" onChange={this.changeInput} name="TO"
                            value={this.state.TO} />
                    </div>
                    <div>PTS
                    <input type="number" onChange={this.changeInput} name="PTS"
                            value={this.state.PTS} />
                    </div>

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