import React from 'react';
import { Line } from 'react-chartjs';
import { connect } from 'react-redux';
import './style/Chart.css';

const Chart = props => {
    //checks if the data is fetch, else the array length is 0
    if(props.state.chart.length > 1){
        const dates = props.state.chart.map(info => info.date);
        const closePrices = props.state.chart.map(info => info.close);
        const data = {
            labels: dates,
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "transparent",
                    strokeColor: "green",
                    pointColor: "green",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: closePrices
                }
            ]
        };
        const options = {
            responsive: true,
            maintainAspectRatio: true,
            scaleGridLineColor: '#474B4F',
            scaleGridLineWidth: 0,
            datasetStrokeWidth: 10,
            scaleShowGridLines: false

        }
        return (
            <Line className='mobile' data={data} options={options} width='1100' height='500'/>
        )    
    }
    return <div>No Chart</div>
    
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(Chart);