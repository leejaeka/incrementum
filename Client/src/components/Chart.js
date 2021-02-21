import React from "react";
import {Line} from "react-chartjs-2";
import {MDBContainer} from "mdbreact";

const ChartsPage = ({user}) => {


    const state = {
        dataLine: {
            labels: user.savings.map((entry, i) => `#${i+1}: ` + new Date(entry.time.seconds * 1000).toLocaleDateString("en-US")),
            datasets: [
                {
                    label: "My Savings ($)",
                    fill: false,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: user.savings.map((acc => val => acc += val.amount)(0))
                },
            ]
        }
    };


    return (
        <MDBContainer>
            <Line data={state.dataLine} options={{responsive: true}}/>
        </MDBContainer>
    );
}

function pastSevenDays() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // const yyyy = today.getFullYear();

    return [...Array(7).keys()].map((i) => mm + '/' + (dd - 7 + i));

}

export default ChartsPage;
