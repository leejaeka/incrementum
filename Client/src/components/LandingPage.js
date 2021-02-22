import React, {useEffect, useState} from "react";
import {
  MDBAnimation,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBRow,
  MDBView
} from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css'

import '../css/Home.css'
import {createUser} from "../utils/AuthHelper";
import Questionnaire from "./Questionnaire";

const LandingPage = ({setAuth, modal, setModal, user, setUser}) => {


  const toggle = () => {
    setModal(!modal);
  }


  return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                    md="6"
                    className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      Incrementum
                    </h1>
                    <hr className="hr-light"/>
                    <h6 className="mb-4">
                      Regain financial control and achieve your financial goals by growing trees!

                    </h6>
                    <MDBBtn color="white" href="https://youtu.be/8FhLn01oGGU">Learn More</MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                        src={"./img/moose-white.png"}
                        alt=""
                        className="img-fluid"
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>


              <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>Let's get started, {user.name}!</MDBModalHeader>
                <MDBModalBody>
                  <Questionnaire setAuth={setAuth} user={user} setUser={setUser}/>
                </MDBModalBody>
              </MDBModal>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
  )
}

export default LandingPage
