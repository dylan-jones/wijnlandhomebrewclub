import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo';
import { Container } from '../styles/GlobalStyles';

const FooterShell = styled.footer`
  background: var(--off-white);
  color: var(--black);
  padding: 2rem 0;
  border-top: 4px solid var(--black);
`;

const FooterInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.25rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  span {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  svg {
    height: 11rem;
    width: 10rem;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1.6rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--black);
    border: 0;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  button:hover {
    background: var(--gold);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
    color: var(--black);
    font-size: 1.2rem;
    transition: color 0.2s;
    font-weight: 500;
  }
  
  a:hover {
    color: var(--gold);
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    a {
      font-size: 1rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterShell>
      <FooterInner>
        <FooterBrand>
          <Logo />

          <span>© 2026 WIJNLAND HOMEBREW club</span>
        </FooterBrand>
        <FooterLinks>
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
        </FooterLinks>
        <FooterSocial>
          <button type="button" aria-label="Facebook" onClick={() => window.open("https://www.facebook.com/wijnlandhomebrewers", "_blank")}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--white)">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </button>
          <button type="button" aria-label="Instagram" onClick={() => window.open("https://www.instagram.com/wijnlandhomebrew/", "_blank")}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="var(--white)" stroke="none" />
            </svg>
          </button>
        </FooterSocial>
      </FooterInner>
    </FooterShell>
  );
}
