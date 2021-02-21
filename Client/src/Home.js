import React from "react";
import {MDBBox, MDBBtn, MDBContainer, MDBIcon} from "mdbreact";
import Overview from "./components/Overview";
import Garden from "./components/Garden";
import Chart from "./components/Chart";

const Home = () => {
    return (
        <MDBContainer>
            <Overview/>
            <Garden/>

            <MDBBox display="flex" justifyContent="center">
                <MDBBtn tag="a" size="lg" floating className="aqua-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1">
                    <MDBIcon icon="bolt" />
                </MDBBtn>

            </MDBBox>

            {/*<Stats/>*/}
            {/*<Questionnaire/>*/}
        </MDBContainer>
    );
}


export default Home;
