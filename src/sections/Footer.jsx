import React from 'react';
import styled from 'styled-components';
import ClubLogo from '../assets/logo.svg';
import { Container } from '../styles/GlobalStyles';

const FooterShell = styled.footer`
  background: var(--black);
  color: var(--white);
  padding: 2rem 0;
  border-top: 1px solid rgba(196, 151, 58, 0.25);
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
  align-items: center;
  gap: 0.85rem;
  font-family: 'Oswald', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.9);
`;

const FooterCopy = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    border: 0;
    cursor: pointer;
    transition: background 0.2s;
  }

  button:hover {
    background: var(--gold);
  }
`;

export default function Footer() {
  return (
    <FooterShell>
      <FooterInner>
        <FooterBrand>
          <img src={ClubLogo} alt="Wijnland Homebrew Club logo" width="50" />
          <span>WIJNLAND HOMEBREW CLUB</span>
        </FooterBrand>
        <FooterCopy>© {new Date().getFullYear()} Wijnland Homebrew Club. All rights reserved.</FooterCopy>
        <FooterSocial>
          <button type="button" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </button>
          <button type="button" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
            </svg>
          </button>
        </FooterSocial>
      </FooterInner>
    </FooterShell>
  );
}
