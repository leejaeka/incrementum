import React, {useState} from 'react';
import {MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBIcon, MDBProgress} from 'mdbreact';

const Overview = ({user, setUser}) => {
    // const [progressPercentage, setProgressPercentage] = useState(user.goal ? Math.floor(user.totalSavings / user.goal * 100) : 0)

    return (
        <div className="overview row">
            <MDBCol className="col-md">
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                        <MDBIcon icon="money-bill-alt" className="primary-color"/>
                        <div className="data">
                            <p>SAVINGS</p>
                            <h4>
                                <strong>${user.totalSavings}</strong>
                            </h4>
                        </div>
                    </div>
                    <MDBCardBody>
                        <MDBProgress value={user.goal ? Math.floor(user.totalSavings / user.goal * 100) : 0} className="my-2"/>
                        <MDBCardText>{user.goal ? Math.floor(user.totalSavings / user.goal * 100) : 0}% to your goal. Keep going!</MDBCardText>
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
                                <strong>{user.totalFriend}</strong>
                            </h4>
                        </div>
                    </div>
                    <MDBCardBody>
                        <MDBCardText>You have {user.totalFriend} friends to plant trees with you!</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default Overview;

