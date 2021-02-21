import React from "react";
import {MDBContainer} from "mdbreact";
import Questionnaire from "./components/Questionnaire";

const ProfilePage = () => {
    return (
        <MDBContainer className="profile">
            <Questionnaire/>
        </MDBContainer>

    );
}


export default ProfilePage;
