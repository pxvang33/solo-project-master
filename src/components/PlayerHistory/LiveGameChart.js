import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Bar, Line, Pie } from 'react-chartjs-2';


class LiveGameChart extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            chartData: {
                labels: ['[PLACEHOLDER]', 'St.Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park'],
                datasets: [
                    {
                        label: 'Points',
                        data: [411452, 300820, 112683, 86066, 85417, 79462],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                        ],
                    },
                    
                ]
                
            }
        }
        console.log('state', this.props.reduxStore);

    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'left'
    }
    componentDidMount() {
        this.getBoxscore();
        console.log('this.props', this.props.reduxStore);

        // this.getPracticeBoxscore();
    }

    getBoxscore = () => {
        let action = { type: 'FETCH_BOXSCORE_HISTORY' }
        this.props.dispatch(action)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.reduxStore.boxscore.boxscoreHistory !== this.props.reduxStore.boxscore.boxscoreHistory) {
            
            const playerNameArray = this.props.reduxStore.boxscore.boxscoreHistory.map((name)=>{
                return name.player_name
            });
            const ptsArray = this.props.reduxStore.boxscore.boxscoreHistory.map((total)=>{
                return total.PTS
            });
            this.setState({
                ...this.state,
                chartData: {
                    ...this.state.chartData,
                    // labels: [this.props.reduxStore.boxscore.boxscoreHistory[0].player_name, this.props.reduxStore.boxscore.boxscoreHistory[1].player_name, 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park'],
                    labels: playerNameArray,
                    datasets: [{
                        label: 'points',
                        // data: [this.props.reduxStore.boxscore.boxscoreHistory[0].PTS, this.props.reduxStore.boxscore.boxscoreHistory[1].PTS, 33],
                        data: ptsArray,
                        // backgroundColor: [
                        //     'rgba(255, 99, 132, 0.6)',], 
                    }]
                }
            });
        }
    }

    render(){
        console.log('this.props', this.props.reduxStore);
        
    //     let chart = {
    //         labels: [this.props.reduxStore.boxscore.boxscoreHistory[0].player_name, 'St.Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park'],
    //         datasets: [
    //             {
    //                 label: 'Population',
    //                 data: [411452, 300820, 112683, 86066, 85417, 79462]
    //             }
    //         ],
    //         backgroundColor: [
    //             'rgba(255, 99, 132, 0.6)',
    //             'rgba(54, 162, 235, 0.6)',
    //             'rgba(255, 206, 86, 0.6)',
    //             'rgba(75, 192, 192, 0.6)',
    //             'rgba(153, 102, 255, 0.6)',
    //             'rgba(255, 159, 64, 0.6)',
    //             'rgba(255, 99, 132, 0.6)'
    //         ]
        
    // }
        return (

            
            <div className="chart">
                CHART 
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={200}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display:true,
                            text: 'Largest Points'
                        },
                        legend: {
                            display: true,
                            position: this.props.legendPosition
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

export default connect(mapStateToProps)(LiveGameChart);