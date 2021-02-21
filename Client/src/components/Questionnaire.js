import React, {useState} from 'react';
import {MDBBtn, MDBInputGroup, MDBModalFooter} from 'mdbreact'

import '../App.css';
import {submitGoal} from "../utils/AuthHelper";

const Questionnaire = ({setAuth, user, setUser}) => {
    const [goal, setGoal] = useState(user.goal);
    const [saveEachTime, setSaveEachTime] = useState(user.saveEachTime);

    const handleSubmit = () => {

    };

    const handleForm = () => {

    };

    const handleChange = (e) => {
        const id = e.target.id;
        if (id === "goal") {
            setGoal(parseInt(e.target.value));
            if (saveEachTime > goal) {
                setSaveEachTime(goal)
            }
        } else {
            setSaveEachTime(parseInt(e.target.value))
        }
    };

    const message = `You will save $${goal} in ${Math.floor(goal / saveEachTime)} weeks`;

    return (
        <form onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="questionnaire">What is your saving goal?</label>
            <span className={"response"}>${goal}</span>
            <MDBInputGroup
                required
                id="goal"
                name="name"
                onChange={handleForm}
                material
                containerClassName="mb-3"
                prepend="$"
                type="number"
                append=""
                onChange={handleChange}
            />
            <br/>
            <label className="form-label" htmlFor="questionnaire">How much do you want to save per
                week?</label> <span className={"response"}>${saveEachTime}</span>
            <div className="range">
                <input type="range" className="form-range" min="1" max={goal} id="saveEachTime"
                       onChange={handleChange}/>
            </div>
            <br/>
            {message
                ? <p className="h5 text-center py-3">{message}</p>
                : null}
            <MDBModalFooter>
                <MDBBtn color="secondary" onClick={() => submitGoal(setAuth, user, setUser, {goal, saveEachTime})}>Start
                    saving
                    now!</MDBBtn>
            </MDBModalFooter>

        </form>
    );
};

export default Questionnaire;
