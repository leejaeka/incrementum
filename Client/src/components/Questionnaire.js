import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBInputGroup} from 'mdbreact'

import '../App.css';

const Questionnaire = () => {
    const handleSubmit = () => {

    };

    const handleForm = () => {

    };

    const message = "Great. You will save $105 in 5 months";

    return (
            <MDBCard>
                <MDBCardBody>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="questionnaire" className="grey-text font-weight-light">
                            What is your saving goal?
                        </label>
                        <MDBInputGroup
                            required
                            id="questionnaire"
                            name="name"
                            onChange={handleForm}
                            material
                            containerClassName="mb-3"
                            prepend="$"
                            append=".00"
                        />
                        <br/>
                        <label htmlFor="questionnaire" className="grey-text font-weight-light">
                            Good choice! How frequently do you want to save?
                        </label>
                        <div className="my-5">
                            <input type="range" className="custom-range" id="amountRange"/>
                        </div>
                        <select className="browser-default custom-select">
                            <option value="1">per day</option>
                            <option value="2">per week</option>
                            <option value="3">per month</option>
                        </select>
                        <br/>
                        <div className="text-center py-4 mt-3">
                            <MDBBtn className="btn btn-outline-green" type="submit">
                                Submit
                            </MDBBtn>
                        </div>
                        {message
                            ? <p className="h4 text-center py-4">{message}</p>
                            : null}
                    </form>
                </MDBCardBody>
            </MDBCard>
    );
};

export default Questionnaire;
