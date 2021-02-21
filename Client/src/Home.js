import React from "react";
import {MDBContainer} from "mdbreact";
import Overview from "./components/Overview";
import Garden from "./components/Garden";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Popper from '@material-ui/core/Popper';
import TextField from '@material-ui/core/TextField';


const Home = ({user, setUser, setAuth}) => {
    const [openSavingDialog, setOpenSavingDialog] = React.useState(false);

    const [savingAmount, setSavingAmount] = React.useState(0);
    const [save, setSave] = React.useState(false);

    const handleClose = () => {
        setOpenSavingDialog(false);
    };

    const handleSave = () => {
        setSave(true)
        handleClose();
    };

    return (
        <MDBContainer>
            <Overview user={user} setUser={setUser}/>
            <Garden user={user} setUser={setUser} setAuth={setAuth} setOpenSavingDialog={setOpenSavingDialog}
                    savingAmount={savingAmount} setSavingAmount={setSavingAmount} save={save} setSave={setSave}/>

            <Popper
                open={openSavingDialog}
                placement="top"
                disablePortal={false}
                modifiers={{
                    flip: {
                        enabled: true,
                    },
                    preventOverflow: {
                        enabled: true,
                        boundariesElement: 'scrollParent',
                    },
                }}
            />

            <Dialog open={openSavingDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">How much are you saving?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To plant a tree, please enter the amount here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="amount"
                        label="Amount"
                        type="number"
                        fullWidth
                        onChange={(e) => setSavingAmount(parseInt(e.target.value))}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>


            {/*<Dialog*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    aria-labelledby="alert-dialog-title"*/}
            {/*    aria-describedby="alert-dialog-description"*/}
            {/*>*/}
            {/*    <DialogTitle id="alert-dialog-title">{"Friend reminder :)"}</DialogTitle>*/}
            {/*    <DialogContent>*/}
            {/*        <DialogContentText id="alert-dialog-description">*/}
            {/*            Don't forget to put aside ${user.saveEachTime} from their paycheck this week into their emergency fund!*/}
            {/*        </DialogContentText>*/}
            {/*    </DialogContent>*/}
            {/*    <DialogActions>*/}
            {/*        <Button onClick={handleClose} color="primary" autoFocus>*/}
            {/*            Got it!*/}
            {/*        </Button>*/}
            {/*    </DialogActions>*/}
            {/*</Dialog>*/}
        </MDBContainer>
    );
}


export default Home;
