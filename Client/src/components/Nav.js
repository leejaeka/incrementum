import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact"
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css'

const Nav = ({open, handleOpen, isAuthenticated}) => {
    

    return (
        <MDBNavbar color="default-color"  dark expand="md">
            <MDBNavbarBrand>
            <strong className="white-text">Incrementum</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={handleOpen} />
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
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}

export default Nav