import React from "react";
import {MDBBtn, MDBContainer, MDBModalFooter} from "mdbreact";
import Questionnaire from "./components/Questionnaire";
import {Redirect} from 'react-router-dom'
import {deleteUser, updateUser} from "./utils/AuthHelper";


const ProfilePage = ({isAuthenticated, user, setUser, setAuth}) => {
    if (!isAuthenticated)
        return <Redirect to='/'/>

    return (
        <><MDBContainer className="profile">
            <Questionnaire setAuth={setAuth} user={user} setUser={setUser}/>
            <MDBModalFooter>
                <MDBBtn color="dark" size={"sm"} onClick={() => deleteUser(user, setUser, setAuth)}>Delete account</MDBBtn>
            </MDBModalFooter>
        </MDBContainer>

            </>

    );
}


export default ProfilePage;
