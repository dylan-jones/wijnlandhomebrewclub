import React from 'react';
import { pic } from '../utils/helpers';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';

const WelcomeSection = styled.section`
  background: var(--white);
`;

const WelcomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
`;

const WelcomeText = styled.div`
  position: relative;
  z-index: 1;

  h2 {
    font-family: var(--font-space);
    font-size: var(--header-font-size-lg);
    text-transform: uppercase;
    line-height: 4.2rem;
    margin-bottom: 2.4rem;
  }

  p {
    margin-bottom: 1.6rem;
  }
`;

const WelcomeImage = styled.div`
  border: 4px solid var(--black);
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    object-fit: contain;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-color: var(--black);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: translate(0.8rem, 0.8rem);
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
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 2.4rem;
`;

export default function Welcome() {
  return (
    <WelcomeSection className="section">
      <WelcomeGrid className="container">
        <WelcomeText>
          <h2>WELCOME TO WIJNLAND<br />HOMEBREW CLUB</h2>
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
            <PrimaryButton onClick={() => alert("Join the club!")}>
              Join the club
            </PrimaryButton>
            <PrimaryButton onClick={() => alert("Contact us!")} outline>
              Contact us
            </PrimaryButton>
          </ButtonGroup>
        </WelcomeText>
        <WelcomeImage>
          <img src={pic(600, 480, 'craftbeer7')} alt="Craft brewing" />
          <Caption>"He was a wise man who invented beer." - PLATO</Caption>
        </WelcomeImage>
      </WelcomeGrid>
    </WelcomeSection>
  );
}
