import React from 'react'
import {MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink} from "mdbreact"
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css'

const Nav = ({open, handleOpen, isAuthenticated}) => {


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
                    <MDBNavItem>
                        <MDBNavLink to="/home">Home</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>

                <MDBNavbarNav right>

                    <MDBNavItem>
                        <MDBNavLink to="/login">Login</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink to="/signup">Sign Up</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink to="/savings">Savings</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink to="/leaderboard">Leaderboard</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink to="/profile">Profile</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}

export default Nav
