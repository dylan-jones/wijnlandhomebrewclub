import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { Container } from "../styles/GlobalStyles";
import Logo from "../assets/logo";

const Nav = styled.nav`
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  flex: 1;
  height: 8rem;
  border-bottom: 4px solid var(--black);
`;

const NavInner = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;

    @media (max-width: 640px) {
      display: ${({ $open }) => ($open ? "flex" : "none")};
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--black);
      flex-direction: column;
      padding: 1.5rem 2rem;
      gap: 1.25rem;
      border-top: 1px solid rgba(196, 151, 58, 0.2);
    }

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

            @media (max-width: 640px) {
              color: var(--white);
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

    span {
      width: 20px;
      height: 2px;
      background: var(--black);
      display: block;
    }

    @media (max-width: 640px) {
      display: flex;
    }
`;

const LogoText = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    display: flex;
    margin-top: 0.8rem;
    font-family: var(--font-bebas);
    font-size: var(--header-font-size-lg);
    color: var(--black);
    line-height: 1;
  }
`;

const LogoSvg = styled.div`
  display: flex;
  width: 5rem;
  height: auto;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateX(0)' : 'translateX(-30px)')};
  transition: opacity 0.6s ease, transform 0.6s ease;

  svg {
    width: 100%;
    height: auto;
  }
`;

const JoinCtaWrap = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setLogoVisible(true);
      } else {
        setLogoVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Nav>
      <NavInner>
        <LogoText>
          <LogoSvg $isVisible={logoVisible}>
            <Logo />
          </LogoSvg>
          <span>WIJNLAND HOMEBREW CLUB</span>
        </LogoText>
        <Hamburger
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <NavLinks $open={open}>
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
        <JoinCtaWrap>
          <PrimaryButton href="#join">Join the club</PrimaryButton>
        </JoinCtaWrap>
      </NavInner>
    </Nav>
  );
}
