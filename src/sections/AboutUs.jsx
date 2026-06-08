import React from 'react';
import styled from 'styled-components';
import { pic } from '../utils/helpers';
import { Container, Section, SectionTitle } from '../styles/GlobalStyles';

const AboutSection = styled(Section)`
  background: var(--white);
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
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 2px solid var(--gold);
  padding: 1.25rem 1.5rem;
  background: var(--off-white);

  strong {
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 0.2rem;
  }
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
          <AboutMainImage src={pic(450, 320, 'festival8')} alt="Club gathering" />
          <CupBadge>
            <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="#C4973A" strokeWidth="2">
              <path d="M12 4h16v18a8 8 0 01-16 0V4z" />
              <path d="M8 8H4a4 4 0 004 4M32 8h4a4 4 0 01-4 4M20 30v6M14 36h12" />
            </svg>
            <div>
              <strong>WF Cup Winners</strong>
              <p>2022, 2023, 2024</p>
            </div>
          </CupBadge>
        </AboutRight>
      </AboutGrid>
    </AboutSection>
  );
}
