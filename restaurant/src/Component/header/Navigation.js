import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {

        return (
            <Navbar color="dark" dark expand="sm">
                <div className="container">
                    <NavbarBrand href="/">Project</NavbarBrand>
                    <NavbarToggler onClick={this.navToggle} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>


                        <Nav className="mr-auto" Navbar>
                            <NavItem>
                                <Link to="/" className="nav-link active">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/Menu" className="nav-link ">Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/About" className="nav-link">About</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/Contact" className="nav-link">Contact</Link>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }

}

export default Navigation;