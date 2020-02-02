import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Reducer Todo App</NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#!">Home</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
