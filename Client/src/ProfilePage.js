import React from "react";
import {MDBContainer} from "mdbreact";
import Questionnaire from "./components/Questionnaire";
import {Redirect} from 'react-router-dom'


const ProfilePage = ({isAuthenticated, user, setUser, setAuth}) => {
    if (!isAuthenticated)
        return <Redirect to='/'/>

    return (
        <MDBContainer className="profile">
            <Questionnaire setAuth={setAuth} user={user} setUser={setUser}/>
        </MDBContainer>

    );
}


export default ProfilePage;
