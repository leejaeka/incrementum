import React from "react";
import {MDBContainer} from "mdbreact";
import Chart from "./components/Chart";
import {Redirect} from 'react-router-dom'

const SavingsPage = ({isAuthenticated}) => {
    if (!isAuthenticated)
        return <Redirect to='/'/>

    return (
        <MDBContainer>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Earning</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Insert Date</th>
                    <td>$Insert amount</td>
                    <td><strong>Pending for friends confirm</strong></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>$10</td>
                    <td>3 trees</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>$1</td>
                    <td>not eligible</td>
                </tr>
                </tbody>
            </table>

            <Chart/>
        </MDBContainer>
    );
}


export default SavingsPage;
