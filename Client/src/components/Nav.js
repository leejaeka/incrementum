import React from 'react'
import {MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink} from "mdbreact"
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css'
import {signIn, signOut} from "../utils/AuthHelper";

const Nav = ({open, handleOpen, isAuthenticated, setAuth}) => {


    return (
        <MDBNavbar color="default-color" dark expand="md">
            <MDBNavLink to="/">
                <MDBNavbarBrand>
                    <strong className="white-text">Incrementum</strong>
                </MDBNavbarBrand>
            </MDBNavLink>
            <MDBNavbarToggler onClick={handleOpen}/>
            <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
                <MDBNavbarNav left>
                    {isAuthenticated && <>
                        <MDBNavItem>
                            <MDBNavLink to="/savings">Savings</MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink to="/leaderboard">Leaderboard</MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink to="/profile">Profile</MDBNavLink>
                        </MDBNavItem>


                    </>}
                </MDBNavbarNav>

                <MDBNavbarNav right>

                    {!isAuthenticated ?
                        <MDBNavItem>
                            <MDBNavLink to="#" onClick={() => signIn(setAuth)}>Login</MDBNavLink>
                        </MDBNavItem> :
                        <>
                            <MDBNavItem>
                                <MDBNavLink to="#" onClick={() => signOut(setAuth)}>Logout</MDBNavLink>
                            </MDBNavItem>

                        </>}


                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}

export default Nav
