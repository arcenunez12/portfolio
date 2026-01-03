import React from "react";
import {Nav, NavItem, NavLink} from 'reactstrap';
import '../CSS/header.css';
function Header() {
    return (
        <div className="header">
        <Nav>
            <NavItem>
                <NavLink href="#mission" >
                Mission
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#skills" >
                Skills
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#contact-section" >
                Contact
                </NavLink>
            </NavItem>
        </Nav>
        </div>
        
    );
}

export default Header;