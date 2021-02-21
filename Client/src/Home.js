import React, {useEffect} from "react";
import {MDBBox, MDBBtn, MDBContainer, MDBIcon} from "mdbreact";
import Overview from "./components/Overview";
import Garden from "./components/Garden";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const Home = ({user, setUser, setAuth}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        window.setTimeout(setOpen, 5*1000, true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <MDBContainer>
            <Overview user={user} setUser={setUser}/>
            <Garden  user={user} setUser={setUser} setAuth={setAuth}/>


            {/*<Stats/>*/}
            {/*<Questionnaire/>*/}

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Friend reminder :)"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Don't forget to put aside ${user.saveEachTime} from their paycheck this week into their emergency fund!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Got it!
                    </Button>
                </DialogActions>
            </Dialog>
        </MDBContainer>
    );
}


export default Home;
