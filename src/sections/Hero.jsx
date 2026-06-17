import React from 'react';
import styled from 'styled-components';
import ClubLogo from '../assets/logo.svg';
import { HERO_IMAGE } from '../constants/images';

const HeroSection = styled.section`
  min-height: calc(100vh - 8rem);
  position: sticky;
  top: 8rem;
  overflow: hidden;
  scroll-margin-top: 8rem;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(--hero-image);
    background-size: cover;
    background-position: center top;
    filter: blur(4px);
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    min-height: 60vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.65) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export default function Hero() {
  return (
    <HeroSection id="home" style={{ '--hero-image': `url(${HERO_IMAGE})` }}>
      <Overlay>
        <img src={ClubLogo} alt="Wijnland Homebrew Club" />
      </Overlay>
    </HeroSection>
  );
}
