import React from "react";
import {MDBContainer} from "mdbreact";
import Chart from "./components/Chart";
import {Redirect} from 'react-router-dom'

const SavingsPage = ({user, isAuthenticated}) => {
    if (!isAuthenticated)
        return <Redirect to='/'/>


    const savingHistory = user.savings.slice(0).reverse().map((entry, i) => {
        return <tr>
            <td scope="row">{user.savings.length - i}</td>
            <td>{new Date(entry.time.seconds * 1000).toLocaleDateString("en-US")}</td>
            <td>${entry.amount}</td>
            <td><strong>{entry.reward}</strong></td>
        </tr>
    });

    return (
        <MDBContainer>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Entry</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Reward</th>
                </tr>
                </thead>
                <tbody>
                {savingHistory}
                </tbody>
            </table>

            <Chart user={user}/>
        </MDBContainer>
    );
}


export default SavingsPage;
