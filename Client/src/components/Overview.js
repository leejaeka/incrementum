import React from 'react';
import {MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBIcon} from 'mdbreact';

const Overview = () => {
    return (
        <div className="overview row">
            <MDBCol className="col-md">
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                        <MDBIcon icon="money-bill-alt" className="primary-color"/>
                        <div className="data">
                            <p>SAVINGS</p>
                            <h4>
                                <strong>$99</strong>
                            </h4>
                        </div>
                    </div>
                    <MDBCardBody>
                        <div className="progress">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                 className="progress-bar bg-primary" role="progressbar"
                                 style={{width: '25%'}}/>
                        </div>
                        <MDBCardText>25% to your goal</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol className="col-md">
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                        <MDBIcon icon="tree" className="warning-color"/>
                        <div className="data">
                            <p>TREES</p>
                            <h4>
                                <strong>19</strong>
                            </h4>
                        </div>
                    </div>
                    <MDBCardBody>
                        <MDBCardText>That's impressive!</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol className="col-md">
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                        <MDBIcon icon="users" className="light-blue lighten-1"/>
                        <div className="data">
                            <p>FRIENDS</p>
                            <h4>
                                <strong>5</strong>
                            </h4>
                        </div>
                    </div>
                    <MDBCardBody>
                        <MDBCardText>You have 5 friends to plant trees with you!</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default Overview;

