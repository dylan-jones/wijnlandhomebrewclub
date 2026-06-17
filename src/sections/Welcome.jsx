import React from 'react';
import { WELCOME_IMAGE } from '../constants/images';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';
import { Container, Section, SectionTitle, BorderImage } from '../styles/GlobalStyles';

const WelcomeSection = styled(Section)`
  background: var(--white);
  position: relative;
  z-index: 1;
  margin-top: -8rem;
  border-top: 4px solid var(--black);
  box-shadow: 0 -1.2rem 0 var(--black);

  @media (max-width: 640px) {
    margin-top: -4rem;
  }
`;

const WelcomeGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const WelcomeText = styled.div`
  position: relative;
  z-index: 1;

  p {
    margin-bottom: 1.6rem;
  }

  @media (max-width: 640px) {
    h2 {
      font-size: 3rem;
      line-height: 3.4rem;
    }
  }
`;

const Caption = styled.figcaption`
  font-family: var(--font-space);
  font-size: var(--caption-font-size);
  text-transform: uppercase;
  margin-top: 0.8rem;
  text-align: center;
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 2rem;
  margin: 0 auto;
  white-space: nowrap;
  background-color: var(--white);
  border: 4px solid var(--black);
  display: inline-block;
  padding: 0.8rem 1.6rem;
  transform: rotate(3deg) translateX(-50%) translateY(4rem);

  @media (max-width: 640px) {
    position: static;
    transform: rotate(2deg);
    margin-top: 1.2rem;
    white-space: normal;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 2.4rem;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;

export default function Welcome() {
  return (
    <WelcomeSection>
      <WelcomeGrid>
        <WelcomeText>
          <SectionTitle>WELCOME TO WIJNLAND<br />HOMEBREW CLUB</SectionTitle>
          <p>
            <strong>This isn't your grandfather's social club.</strong> We aren't here for the sweet
            conversation, or to discuss handshakes, we're here for the chemistry, the brewing.
          </p>
          <p>
            Based in the heart of the Winelands, we are a community of makers starting out and
            some who'd call us slightly famous for the fermentation. While this valley focuses on
            the vine, we focus on the grain, the hop, and the fermenting talent it takes.
          </p>
          <p>
            Whether you're a technical brewer obsessed with yeast profiles or a determined
            hobbyist looking to refine your palate, this is your place.
          </p>
          <p><strong>No pretence. Just better beer.</strong></p>
          <ButtonGroup>
            <PrimaryButton href="#join">
              Join the club
            </PrimaryButton>
            <PrimaryButton href="#contact" outline>
              Contact us
            </PrimaryButton>
          </ButtonGroup>
        </WelcomeText>
        <BorderImage>
          <img src={WELCOME_IMAGE} alt="Craft brewing" />
          <Caption>"He was a wise man who invented beer." - PLATO</Caption>
        </BorderImage>
      </WelcomeGrid>
    </WelcomeSection>
  );
}
