import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { menueData } from "../data/MenuData";
import { Button } from "./Button";
import Bars from "../images/bars.svg";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  // background: #cd853f;
`;

const Navlink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${Navlink}
  font-family: 'Audiowide', cursive;
  font-size: 20px;
  // font-style: italic;

  @media screen and (max-width: 768px) {
    margin-left: -25px;
  }
`;
const MenueBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenue = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenueLinks = styled(Link)`
  ${Navlink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "#CD853F" : "transparent",
    transition: "0.4s",
  };
  return (
    <Nav style={style}>
      <Logo to="/">B7BRUTALISM</Logo>
      <MenueBars onClick={toggle} />
      <NavMenue>
        {menueData.map((item, index) => (
          <NavMenueLinks to={item.link} key={index}>
            {item.title}
          </NavMenueLinks>
        ))}
      </NavMenue>
      <NavBtn>
        <Button to="/contact" primary="true">
          {" "}
          Contact Us{" "}
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
