import React, {useEffect} from 'react';
import {MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBIcon, MDBProgress} from 'mdbreact';

const Overview = ({user, setUser}) => {
    let progress_percentage = Math.floor(user.totalSavings / user.goal * 100)

    return (
        <div className="overview row">
            <MDBCol className="col-md">
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                        <MDBIcon icon="money-bill-alt" className="primary-color"/>
                        <div className="data">
                            <p>SAVINGS</p>
                            <h4>
                                <strong>{user.totalSavings}</strong>
                            </h4>
                        </div>
                    </div>
                    <MDBCardBody>
                        <MDBProgress value={progress_percentage} className="my-2" />
                        <MDBCardText>{progress_percentage}% to your goal. Keep going!</MDBCardText>
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
                                <strong>{user.totalTrees}</strong>
                            </h4>
                        </div>
                    </div>
                    <MDBCardBody>
                        <MDBCardText>{user.totalTrees} trees planted. That's impressive!</MDBCardText>
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
                                <strong>{user.friends}</strong>
                            </h4>
                        </div>
                    </div>
                    <MDBCardBody>
                        <MDBCardText>You have {user.friends} friends to plant trees with you!</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default Overview;

