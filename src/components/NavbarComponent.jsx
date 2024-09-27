import {useState, useEffect} from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import {navLinks} from '../data/index';
import {NavLink} from "react-router-dom";
import React from "react";


const NavbarComponent = () => {

  const [changeColor, setChangeColor] =useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false)
    };
  };

  useEffect (() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor)
  })

  return (
    <div>
       <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
          <Container>
            <div><img src="/logo.png" alt="" className="custom-img"/></div>
            <Navbar.Brand href="#home" className="fs-4 fw-normal">Vegies Mart</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto text-center">
                {navLinks.map((link) => {
                  return (
                    <div className="nav-link" key={link.id}>
                      <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>{link.text}</NavLink>
                    </div>
                  );
                })}
              </Nav>

              <div className="text-center">
                <Button className="my-custom-button">Sign Up</Button>
              </div>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent