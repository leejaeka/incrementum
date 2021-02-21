import React from "react";
import {MDBContainer} from "mdbreact";
import Questionnaire from "./components/Questionnaire";
import {Redirect} from 'react-router-dom'


const ProfilePage = ({isAuthenticated}) => {
    if (!isAuthenticated)
        return <Redirect to='/'/>

    return (
        <MDBContainer className="profile">
            <Questionnaire/>
        </MDBContainer>

    );
}


export default ProfilePage;
