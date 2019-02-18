import React, { Component } from 'react';
import { connect } from 'react-redux';
// import GameClockTimer from './GameClockTimer';
// import GameClockTimerInput from './GameClockTimerInput';
// import GameClockStartButton from './GameClockStartButton';

// const ms = require('pretty-ms')

class GameClock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            isOn: false,
            start: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }
    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }
    stopTimer() {
        this.setState({ isOn: false })
        clearInterval(this.timer)
    }
    resetTimer() {
        this.setState({ time: 0, isOn: false })
    }
    render() {
        let start = (this.state.time == 0) ?
            <button onClick={this.startTimer}>start</button> :
            null
        let stop = (this.state.time == 0 || !this.state.isOn) ?
            null :
            <button onClick={this.stopTimer}>stop</button>
        let resume = (this.state.time == 0 || this.state.isOn) ?
            null :
            <button onClick={this.startTimer}>resume</button>
        let reset = (this.state.time == 0 || this.state.isOn) ?
            null :
            <button onClick={this.resetTimer}>reset</button>
        return (
            <div>
                <h3>timer: {(this.state.time)}</h3>
                {start}
                {resume}
                {stop}
                {reset}
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(GameClock);
//     constructor(props) {
//         super(props)
//         this.state = {
//             seconds: '00',
//             minutes: ''
//         }
//         this.secondsRemaining;

//         this.intervalHandle;
//     }

//     changeTime = (event) => {
//         this.setState({
//             minutes: event.target.value
//         })
//     }

//     tick = () => {
//         let min = Math.floor(this.secondsRemaining / 60);
//         let sec = this.secondsRemaining - (min * 60);

//         this.setState({
//             minutes: min,
//             seconds: sec
//         })

//         if (sec < 10) {
//             this.setState({
//                 seconds: "0" + this.state.seconds,
//             })
//         }
//         if (min < 10) {
//             this.setState({
//                 value: "0" + min,
//             })
//         }
//         if (min === 0 & sec === 0) {
//             clearInterval(this.intervalHandle);
//         }
//         this.secondsRemaining--
//     }

//     startCountDown() {
//         this.intervalHandle = setInterval(this.tick, 1000);
//         let time = this.state.minutes;
//         this.secondsRemaining = time * 60;
//     }

//     render() {
//         return (
//             <div>
//                 <GameClockTimerInput minutes={this.state.minutes} changeTime={this.changeTime} />
//                 <GameClockTimer minutes={this.state.minutes} seconds={this.state.seconds} />
//                 <GameClockStartButton startCountDown={this.startCountDown} />

//             </div>
//         )
//     }
// }
// const mapStateToProps = reduxStore => ({
//     reduxStore
// });
// export default connect(mapStateToProps)(GameClock);

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
