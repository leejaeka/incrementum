import React, {useState} from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact"
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css'

const Nav = () => {
    const [ open, setOpen ] = useState(false)
    const [isAuthenticated, setAuth] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <MDBNavbar color="default-color" dark expand="md">
            <MDBNavbarBrand>
            <strong className="white-text">Incrementum</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={handleOpen} />
            <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
            <MDBNavbarNav left>
                <MDBNavItem>
                    <MDBNavLink to="/home">Home</MDBNavLink>
                </MDBNavItem>
                {isAuthenticated ? 
                    <MDBNavItem>
                        <MDBNavLink to="/uploadSublet">Upload Sublet</MDBNavLink>
                    </MDBNavItem> 
                : null}
                {isAuthenticated ? 
                    <MDBNavItem>
                        <MDBNavLink to="/listSublet">Sublet List</MDBNavLink>
                    </MDBNavItem>
                : null}
            </MDBNavbarNav>

            <MDBNavbarNav right>
                <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="twitter" />
                </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="google-plus-g" />
                </MDBNavLink>
                </MDBNavItem>
                {isAuthenticated ? 
                <MDBDropdown>
                <MDBDropdownToggle nav caret color="primary">
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right={true} basic>
                  <MDBDropdownItem >Log out</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem><MDBNavLink to="/profile" ><MDBIcon icon="user-circle" />  My Profile</MDBNavLink></MDBDropdownItem>
                  <MDBDropdownItem><MDBNavLink to="/contact" ><MDBIcon icon="phone-alt" />  Contact Us</MDBNavLink></MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                :
                <MDBNavItem>
                    <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBNavItem>
                 }
                {isAuthenticated ? null :
                
                <MDBNavItem>
                    <MDBNavLink to="/signup">Sign Up</MDBNavLink>
                </MDBNavItem>
                }
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}

export default Nav