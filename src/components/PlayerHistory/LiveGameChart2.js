import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';


class LiveGameChart2 extends Component {

    constructor(props) {
        super(props)


    }
    // static defaultProps = {
    //     displayTitle: true,
    //     displayLegend: true,
    //     legendPosition: 'top'
        
    // }
    componentDidMount() {
        this.getBoxscore();
        console.log('this.props', this.props.reduxStore);

    }

    getBoxscore = () => {
        let action = { type: 'FETCH_BOXSCORE_HISTORY' }
        this.props.dispatch(action)
    }


    render() {
        console.log('this.props', this.props.reduxStore);
        const playerNameArray = this.props.reduxStore.boxscore.boxscoreHistory.map((name) => {
            return name.player_name
        });
        const ptsArray = this.props.reduxStore.boxscore.boxscoreHistory.map((total) => {
            return total.PTS
        });

            let chart = {
                labels: playerNameArray,
                datasets: [
                    {
                        label: ['points'],
                        data: ptsArray,
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56'
                        ],
                    }
                ],
        }
        return (


            <div className="chart">
                CHART
                <Bar
                    data={chart}
                    width={100}
                    height={350}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Largest Points'
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Points'
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(LiveGameChart2);