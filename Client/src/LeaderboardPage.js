import React, {useEffect, useState} from 'react';
import {MDBContainer} from "mdbreact";
import {Redirect} from 'react-router-dom'
import {getTopUsers, updateUser} from "./utils/AuthHelper";
import Button from '@material-ui/core/Button'

const LeaderboardPage = ({isAuthenticated, user, setUser, setAuth}) => {
    const [topUsers, setTopUsers] = useState([]);

    useEffect(() => {
        getTopUsers(setTopUsers)
    }, []);

    const addFriend = (entry) => {
        user.totalFriend += 1;
        user.friends.push(entry.uid);
        setUser({...user})

        updateUser(setAuth, user, setUser, {totalTrees: user.totalTrees, totalSavings: user.totalSavings})
    };

    const action = (entry) => {
        console.log(entry.uid)
        console.log(user.friends)
        if (user.friends.includes(entry.uid)) {
            return <Button disabled>Already friend</Button>
        } else if (entry.uid !== user.uid) {
            return <Button color="primary" onClick={() => addFriend(entry)}>Add friend</Button>;
        }
    };

    const leaderboard = topUsers.map((entry, i) =>
        <tr>
            <th scope="row">{i + 1}</th>
            <td>{entry.name}</td>
            <td>{entry.totalTrees}</td>
            <td>{action(entry)}</td>
        </tr>
    );




    if (!isAuthenticated) {

        return <Redirect to='/'/>

    }


    return (
        <MDBContainer>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Friend</th>
                    <th scope="col">Trees</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {leaderboard}
                {/*<tr>*/}
                {/*    <th scope="row">1</th>*/}
                {/*    <td>Mark</td>*/}
                {/*    <td>55</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <th scope="row">2</th>*/}
                {/*    <td>Jacob</td>*/}
                {/*    <td>13</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <th scope="row">3</th>*/}
                {/*    <td>Truman</td>*/}
                {/*    <td>1</td>*/}
                {/*</tr>*/}
                </tbody>
            </table>
        </MDBContainer>

    );
}


export default LeaderboardPage;
