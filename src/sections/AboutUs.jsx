import React from 'react';
import styled from 'styled-components';
import { pic } from '../utils/helpers';
import { Container, Section } from '../styles/GlobalStyles';

const AboutSection = styled(Section)`
  background: var(--white);
`;

const AboutGrid = styled(Container)`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const AboutText = styled.div`
  h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 2rem 0 0.75rem;
    color: var(--text);
  }

  p {
    font-size: 0.93rem;
    line-height: 1.7;
    margin-bottom: 0.75rem;
    color: var(--text);
  }
`;

const ProList = styled.ul`
  margin: 0.5rem 0 1rem 0.5rem;

  li {
    font-style: italic;
    font-size: 0.93rem;
    padding: 0.2rem 0;
    color: var(--text);
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

  p {
    font-size: 0.82rem;
    color: var(--text-muted);
  }
`;

export default function AboutUs() {
  return (
    <AboutSection id="about">
      <AboutGrid>
        <AboutText>
          <h2>ABOUT US</h2>
          <p>
            Established in 2020, our club started just like most great beers — as a shared vision
            that bubbled over into something real. We have homebrewers from the Cape, Winelands
            and enthusiasts from all over Cape Town who gather here.
          </p>
          <h3>Why We Get Together</h3>
          <p>
            At our core, we believe brewing is better when it's shared. Our main goal is simple:
            to provide a social, non-serious environment that invites the focus to meet weekly to
            discuss the brew, refine recipes, and simply enjoy the community.
          </p>
          <h3>Competitions with a Purpose</h3>
          <p>
            Our club competitions aren't about high-stakes pressure — they're a chance to step up,
            experiment with different varieties and, of course, taste the creations without taking
            the fun out of the hobby.
          </p>
          <h3>Pro Connections</h3>
          <p>
            We don't brew in a vacuum. We're proud of our strong relationships with the local
            brewing industry for insights and guidance. We're associated with:
          </p>
          <ProList>
            <li>HBX</li>
            <li>Stellenbrau</li>
            <li>Bloemhof</li>
            <li>Bosman's</li>
          </ProList>
          <p>
            Whether you're looking for professional advice or just want to level up, we bridge
            the gap between homebrewers and the pros.
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
