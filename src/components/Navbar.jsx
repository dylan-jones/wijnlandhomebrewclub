import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  flex: 1;
  border-bottom: 4px solid var(--black);
`;

const NavInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;

    li {
        a {
            text-decoration: none;
            color: var(--black);
            font-size: var(--btn-font-size);
            transition: color 0.3s;
            font-family: var(--font-space);

            &:hover {
                color: var(--primary);
                font-weight: 700;
            }
        }
    }
`;

const Hamburger = styled.button`
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
`;

const LogoText = styled.span`
  font-family: var(--font-bebas);
  font-size: var(--header-font-size-lg);
  color: var(--black);
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Nav className="navbar">
      <NavInner className="container ">
        <LogoText className="nav-brand">WIJNLAND HOMEBREW CLUB</LogoText>
        <Hamburger
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <NavLinks className={`nav-links${open ? " open" : ""}`}>
          {[
            ["HOME", "#home"],
            ["ABOUT", "#about"],
            ["EVENTS", "#events"],
            ["CONTACT", "#contact"],
          ].map(([label, href]) => (
            <li key={label}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </NavLinks>
        <a href="#join" className="btn btn-nav-join">
          JOIN THE CLUB
        </a>
      </NavInner>
    </Nav>
  );
}
