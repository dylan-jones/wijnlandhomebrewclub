import React from 'react';
import styled from 'styled-components';
import { ABOUT_IMAGES } from '../constants/images';
import { Container, Section, SectionTitle, BorderImage } from '../styles/GlobalStyles';
import { GiLaurelsTrophy } from "react-icons/gi";

const AboutSection = styled(Section)`
  background: var(--white);
  position: relative;
  z-index: 1;
`;

const AboutGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const AboutText = styled.div`
  h3 {
    font-family: var(--font-space);
    font-size: 2rem;
    text-transform: uppercase;
    margin: 2.4rem 0;
  }
`;

const ProList = styled.ul`
  margin: 2.4rem 0;

  li {
    padding: 0.2rem 0;
    font-weight: 700;
  }

  li::before {
    content: '- ';
    color: var(--gold);
    font-style: normal;
  }
`;

const AboutRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AboutMainImage = styled.img`
  width: 100%;
  height: 300px;
  border: 3px solid var(--mid-gray);
`;

const CupBadge = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 0.8rem;
  border: 2px solid var(--gold);
  padding: 1.6rem;
  background: var(--off-white);

  h4 {
    font-family: var(--font-space);
    font-size: 2rem;
    line-height: 2.4rem;
    text-transform: uppercase;
  }

  p {
    font-family: var(--font-space);
    font-size: 1.4rem;
    color: var(--text);
  }
`;

const CupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.6rem;
  margin-top: 2.4rem;
`;

export default function AboutUs() {
  return (
    <AboutSection id="about">
      <AboutGrid>
        <AboutText>
          <SectionTitle>ABOUT US</SectionTitle>
          <p>
            Established in 20XX, our club started just like most great beers: as a small-scale experiment that bubbled over into something much bigger. While we are firmly rooted in the Winelands, our reach stretches across the Cape, drawing in makers and enthusiasts from all over Cape Town who share a common obsession with the perfect pour.
          </p>
          <h3>Why We Get Together</h3>
          <p>
            At our core, we believe brewing is better when it’s shared. Our main goal is simple: to provide a social, non-serious environment where the focus is on the craft and the community. We aren’t here to lecture; we’re here to swap recipes, share our latest bottles, and trade the tips that save a batch from the drain.
          </p>
          <h3>Competitions with a Purpose</h3>
          <p>
            Our club competitions aren't about high-stakes pressure—they’re about exploration. We use them as an excuse to try out new styles, experiment with different varieties, and, of course, win some great prizes along the way. It’s the ultimate way to push your boundaries without losing the fun of the hobby.
          </p>
          <h3>Pro Connections</h3>
          <p>
            We don’t brew in a vacuum. We’re proud of our strong relationships with the titans of the local industry. Our members enjoy unique access to the insights and expertise of head brewers from world-class local spots, including:
          </p>
          <ProList>
            <li>CBC</li>
            <li>Soul Barrel</li>   
            <li>KCB</li>
            <li>Lilypatrick</li>
            <li>Franschhoek Beer Company</li>
          </ProList>
          <p>
            Whether you're looking for professional advice or just want to see how the big rigs do it, these connections help us bridge the gap between homebrewers and the pros.
          </p>
        </AboutText>
        <AboutRight>
          <BorderImage style={{ marginBottom: '2.4rem' }}>
            <img src={ABOUT_IMAGES[0]} alt="Club gathering" />
          </BorderImage>
          <BorderImage style={{ marginBottom: '2.4rem' }}>
            <img src={ABOUT_IMAGES[1]} alt="Club gathering" />
          </BorderImage>
          <CupContainer>
            <CupBadge>
              <GiLaurelsTrophy size={56} color="var(--gold)" />
                <h4>WF Cup Winners</h4>
                <p>2022, 2023, 2024</p>
            </CupBadge>
          </CupContainer>
        </AboutRight>
      </AboutGrid>
    </AboutSection>
  );
}
