import React from 'react';
import styled from 'styled-components';
import { Container, Section, SectionTitle } from '../styles/GlobalStyles';
import { COMMITTEE_IMAGES } from '../constants/images';

const CommitteeSection = styled(Section)`
  background: var(--off-white);
  position: relative;
  z-index: 1;
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
  background: var(--mid-gray);
  border: 3px solid var(--black);
  padding: 2.4rem;

  h4 {
    font-family: var(--font-space);
    font-size: 2.4rem;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }
`;

const MemberAvatar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.6rem;
  background: var(--white);
  border: 1px solid var(--black);
  height: 26rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberMeta = styled.p`
  text-transform: uppercase;
  margin-bottom: 0.8rem;

  span {
    color: var(--text);
    font-weight: 600;
  }
`;

const committeeData = [
  { name: 'NAME SURNAME', image: COMMITTEE_IMAGES[0], style: 'IPA', arc: '234' },
  { name: 'NAME SURNAME', image: COMMITTEE_IMAGES[1], style: 'Stout', arc: '456' },
  { name: 'NAME SURNAME', image: COMMITTEE_IMAGES[2], style: 'Lager', arc: '789' },
];

export default function Committee() {
  return (
    <CommitteeSection id="committee">
      <Container>
        <SectionTitle>THE COMMITTEE</SectionTitle>
        <CommitteeGrid>
          {committeeData.map((m) => ( 
            <CommitteeCard key={`${m.name}-${m.style}-${m.arc}`}>
              <MemberAvatar>
                <img src={m.image} alt={m.name} />
              </MemberAvatar>
              <h4>{m.name}</h4>
              <MemberMeta>Role</MemberMeta>
              <MemberMeta>FAV. STYLE &nbsp;<span>{m.style}</span></MemberMeta>
            </CommitteeCard>
          ))}
        </CommitteeGrid>
      </Container>
    </CommitteeSection>
  );
}
