import React from "react";
import {Line} from "react-chartjs-2";
import {MDBContainer} from "mdbreact";
import Questionnaire from "./Questionnaire";
import Stats from "./Stats";
import Overview from "./Overview";
import Garden from "./Garden";

const Home = () => {
    return (
        <MDBContainer>
            <Overview/>
            <Garden/>
            <Stats/>
            <Questionnaire/>
        </MDBContainer>
    );
}


export default Home;
