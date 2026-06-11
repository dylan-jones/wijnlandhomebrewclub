import React from 'react';
import styled from 'styled-components';
import ClubLogo from '../assets/logo.svg';
import { HERO_IMAGE } from '../constants/images';

const HeroSection = styled.section`
  height: 88vh;
  background-size: cover;
  background-position: center top;
  position: relative;
  scroll-margin-top: 8rem;

  @media (max-width: 640px) {
    height: 70vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.65) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Hero() {
  return (
    <HeroSection id="home" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
      <Overlay>
        <img src={ClubLogo} alt="Wijnland Homebrew Club" />
      </Overlay>
    </HeroSection>
  );
}
