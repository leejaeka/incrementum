import React from "react";
import {MDBContainer} from "mdbreact";
import {Redirect} from 'react-router-dom'


const LeaderboardPage = ({isAuthenticated, user}) => {
    if (!isAuthenticated)
        return <Redirect to='/'/>

    return (
        <MDBContainer>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Friend</th>
                    <th scope="col">Trees</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>55</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>13</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Truman</td>
                    <td>1</td>
                </tr>
                </tbody>
            </table>
        </MDBContainer>

    );
}


export default LeaderboardPage;
