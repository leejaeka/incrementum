import React from 'react';
import {MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBIcon} from 'mdbreact';

const Stats2 = () => {
    return (
        <div className="row">
            <MDBCol class="col-md">
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
            <MDBCol class="col-md">
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                        <MDBIcon icon="chart-line" className="warning-color"/>
                        <div className="data">
                            <p>TREES</p>
                            <h4>
                                <strong>4</strong>
                            </h4>
                        </div>
                    </div>
                    <MDBCardBody>
                        <div className="progress">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                 className="progress-bar bg grey" role="progressbar"
                                 style={{width: '4%'}}/>
                        </div>
                        <MDBCardText>96 trees to go</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol class="col-md">
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                        <MDBIcon icon="chart-pie" className="light-blue lighten-1"/>
                        <div className="data">
                            <p>FRIENDS</p>
                            <h4>
                                <strong>5</strong>
                            </h4>
                        </div>
                    </div>
                    <MDBCardBody>
                        <div className="progress">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                 className="progress-bar grey darken-2" role="progressbar"
                                 style={{width: '75%'}}/>
                        </div>
                        <MDBCardText>75% of them are actively saving!</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default Stats2;

