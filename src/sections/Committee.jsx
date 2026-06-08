import React from 'react';
import styled from 'styled-components';
import { Container, Section, SectionTitle } from '../styles/GlobalStyles';

const CommitteeSection = styled(Section)`
  background: var(--light-gray);
`;

const CommitteeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CommitteeCard = styled.div`
  background: var(--white);
  border: 1px solid var(--mid-gray);
  padding: 2.5rem 2rem;
  text-align: center;

  h4 {
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }
`;

const MemberAvatar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

const MemberMeta = styled.p`
  font-size: 0.78rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.3rem;

  span {
    color: var(--text);
    font-weight: 600;
  }
`;

const committeeData = [
  { name: 'NAME SURNAME', style: 'IPA', arc: '234' },
  { name: 'NAME SURNAME', style: 'Stout', arc: '456' },
  { name: 'NAME SURNAME', style: 'Lager', arc: '789' },
];

function SilhouetteAvatar() {
  return (
    <svg viewBox="0 0 100 120" width="90" height="110">
      <ellipse cx="50" cy="35" rx="22" ry="26" fill="#2a2a2a" />
      <path d="M10 120 Q10 75 50 75 Q90 75 90 120Z" fill="#2a2a2a" />
    </svg>
  );
}

export default function Committee() {
  return (
    <CommitteeSection id="committee">
      <Container>
        <SectionTitle>THE COMMITTEE</SectionTitle>
        <CommitteeGrid>
          {committeeData.map((m) => (
            <CommitteeCard key={`${m.name}-${m.style}-${m.arc}`}>
              <MemberAvatar><SilhouetteAvatar /></MemberAvatar>
              <h4>{m.name}</h4>
              <MemberMeta>FAV. STYLE &nbsp;<span>{m.style}</span></MemberMeta>
              <MemberMeta>ARC &nbsp;<span>{m.arc}</span></MemberMeta>
            </CommitteeCard>
          ))}
        </CommitteeGrid>
      </Container>
    </CommitteeSection>
  );
}
