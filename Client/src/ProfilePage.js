import React from "react";
import {MDBContainer} from "mdbreact";
import Questionnaire from "./components/Questionnaire";
import {Redirect} from 'react-router-dom'


const ProfilePage = ({isAuthenticated, session}) => {
    if (!isAuthenticated)
        return <Redirect to='/'/>

    return (
        <MDBContainer className="profile">
            <Questionnaire session={session}/>
        </MDBContainer>

    );
}


export default ProfilePage;
