import React from 'react';
import { pic } from '../utils/helpers';
import styled, { keyframes } from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';

const BREW_IMAGES = [
  { seed: 'beer11', orientation: 'portrait' },
  { seed: 'beer22', orientation: 'landscape' },
  { seed: 'beer33', orientation: 'portrait' },
  { seed: 'beer44', orientation: 'landscape' },
  { seed: 'beer55', orientation: 'portrait' },
  { seed: 'beer66', orientation: 'landscape' },
  { seed: 'beer77', orientation: 'portrait' },
  { seed: 'beer88', orientation: 'landscape' },
];

const BrewingSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  background-color: var(--black);
  color: var(--white);
  overflow: hidden;
  min-height: 700px;

  @media (max-width: 900px) {
    min-height: 620px;
  }

  @media (max-width: 640px) {
    min-height: 540px;
    padding: 3.5rem 0;
  }
`;

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const BrewingViewport = styled.div`
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 10%,
    #000 90%,
    transparent
  );
`;

const BrewingTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
  width: max-content;
  padding: 4rem 2rem;
  animation: ${scroll} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  img {
    object-fit: cover;
    border: 4px solid var(--white);
    flex-shrink: 0;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  }

  img:nth-child(odd) {
    transform: rotate(-3deg);
  }

  img:nth-child(even) {
    transform: rotate(3deg);
  }

  @media (max-width: 900px) {
    gap: 5rem;
  }

  @media (max-width: 640px) {
    gap: 3.2rem;
    padding: 2rem 1.2rem;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const BrewingImage = styled.img`
  object-fit: cover;
  border: 4px solid var(--white);
  flex-shrink: 0;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  min-height: ${({ $orientation }) => ($orientation === 'landscape' ? '350px' : 'auto')};
  height: ${({ $orientation }) => ($orientation === 'landscape' ? '350px' : 'auto')};
  min-width: ${({ $orientation }) => ($orientation === 'portrait' ? '350px' : 'auto')};
  width: ${({ $orientation }) => ($orientation === 'portrait' ? '350px' : 'auto')};

  @media (max-width: 900px) {
    min-height: ${({ $orientation }) => ($orientation === 'landscape' ? '300px' : 'auto')};
    height: ${({ $orientation }) => ($orientation === 'landscape' ? '300px' : 'auto')};
    min-width: ${({ $orientation }) => ($orientation === 'portrait' ? '280px' : 'auto')};
    width: ${({ $orientation }) => ($orientation === 'portrait' ? '280px' : 'auto')};
  }

  @media (max-width: 640px) {
    min-height: ${({ $orientation }) => ($orientation === 'landscape' ? '240px' : 'auto')};
    height: ${({ $orientation }) => ($orientation === 'landscape' ? '240px' : 'auto')};
    min-width: ${({ $orientation }) => ($orientation === 'portrait' ? '210px' : 'auto')};
    width: ${({ $orientation }) => ($orientation === 'portrait' ? '210px' : 'auto')};
  }
`;

const BrewingCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  max-width: 460px;
  color: var(--black);
  background-color: var(--white);
  padding: 2.4rem;
  border: 4px solid var(--black);
  text-align: center;

  h3 {
    font-family: var(--font-space);
    font-size: var(--header-font-size-lg);
    text-transform: uppercase;
    line-height: 4.2rem;
  }

  p {
    font-size: var(--body-font-size);
  }

  a, button {
    align-self: center;
  }

  @media (max-width: 640px) {
    max-width: 340px;
    padding: 1.8rem;

    h3 {
      font-size: 2.8rem;
      line-height: 3.1rem;
    }
  }
`;

export default function WhatsBrewing() {
  const loop = [...BREW_IMAGES, ...BREW_IMAGES];

  return (
    <BrewingSection id="whats-brewing">
      <BrewingCard>
        <h3>what’s been <br />brewing?</h3>
        <p>A snapshot of our recent meetups, brew days, and tasting sessions around the valley.</p>
        <PrimaryButton href="#gallery-section">VIEW GALLERY</PrimaryButton>
      </BrewingCard>
      <BrewingViewport>
        <BrewingTrack>
          {loop.map((img, i) => {
            const [w, h] = img.orientation === 'landscape' ? [500, 350] : [350, 500];
            return (
              <BrewingImage
                key={`${img.seed}-${i}`}
                src={pic(w, h, img.seed)}
                alt=""
                $orientation={img.orientation}
                aria-hidden={i >= BREW_IMAGES.length}
              />
            );
          })}
        </BrewingTrack>
      </BrewingViewport>
    </BrewingSection>
  );
}
