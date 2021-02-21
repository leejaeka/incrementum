import React from "react";
import {MDBBox, MDBBtn, MDBContainer, MDBIcon} from "mdbreact";
import Overview from "./components/Overview";
import Garden from "./components/Garden";

const Home = ({user, setUser}) => {

    return (
        <MDBContainer>
            <Overview user={user} setUser={setUser}/>
            <Garden/>



            {/*<Stats/>*/}
            {/*<Questionnaire/>*/}
        </MDBContainer>
    );
}


export default Home;
