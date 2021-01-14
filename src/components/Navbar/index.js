import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NanMenu>
            <NavItem>
              <NavLinks to="about" />
            </NavItem>
          </NanMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
