import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameClockTimer from './GameClockTimer';
import GameClockTimerInput from './GameClockTimerInput';
import GameClockStartButton from './GameClockStartButton';

// const ms = require('pretty-ms')

class GameClock extends Component {
    constructor(props) {
    super(props)
    this.state = {
        seconds: 5,
        isOn: false,
        start: 0
        }
    }
    countDown = () => {
        this.setState ({
            timer: this.state.timer--
        })
    }
    render() {
        return(
            <div>
                <GameClockTimerInput />
                <GameClockTimer />
                <GameClockStartButton />

            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(GameClock);

// constructor(props) {
//     super(props)
//     this.state = {
//         time: 0,
//         isOn: false,
//         start: 0
//     }
// }
// startTimer = () => {
//     this.setState({
//         isOn: true,
//         time: this.state.time,
//         start: Date.now() - this.state.time
//     })
//     this.timer = setInterval(() => this.setState({
//         time: Date.now() - this.state.start
//     }), 1);
// }
// stopTimer() {
//     this.setState({ isOn: false })
//     clearInterval(this.timer)
// }
// resetTimer() {
//     this.setState({ time: 0, isOn: false })
// }
// render() {
//     let start = (this.state.time == 0) ?
//         <button onClick={this.state.startTimer}>start</button> : null

//     let stop = (this.state.time == 0 || !this.state.isOn) ?
//         null :
//         <button onClick={this.stopTimer}>stop</button>

//     let resume = (this.state.time == 0 || this.state.isOn) ?
//         null :
//         <button onClick={this.startTimer}>resume</button>

//     let reset = (this.state.time == 0 || this.state.isOn) ?
//         null :
//         <button onClick={this.resetTimer}>reset</button>
//     return (
//         <div>
//             <h2>Clock: {ms(this.state.time)}</h2>
//             {start}
//             {resume}
//             {stop}
//             {reset}
//         </div>
//     )
// }

// }
