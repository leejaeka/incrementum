import React from 'react';
import {MDBBox} from 'mdbreact';
import '../App.css';

const Stats = () => {
    const statFact = (number, text) => <>
        <MDBBox tag="h2" mb={1}><strong>{number}</strong></MDBBox>
        <MDBBox tag="p" mb={3} >{text}</MDBBox>
    </>;

    return (
        <div className="stats">
            <h2>Forest Stats</h2>
            {statFact('$99.5', 'Savings')}
            {statFact('4', 'Trees')}
            {statFact('5', 'Friends saving with you')}
            <hr/>
        </div>
    );
};

export default Stats;
