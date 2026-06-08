import React from 'react';
import styled from 'styled-components';
import { Container, Section, SectionTitle } from '../styles/GlobalStyles';

const ResourcesSection = styled(Section)`
  background: var(--light-gray);
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.75rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ResourceCard = styled.div`
  background: var(--white);
  border: 1px solid var(--mid-gray);
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const ResourceName = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text);
`;

const ResourceButton = styled.button`
  font-size: 0.75rem;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 1px;
  background: transparent;
  border: 0;
  cursor: pointer;
  border-bottom: 1px solid var(--gold);
  padding-bottom: 1px;
  transition: color 0.2s;

  &:hover {
    color: var(--gold-light);
    border-color: var(--gold-light);
  }
`;

const resourcesData = [
  'Brew Day Guide',
  'Competition Rules',
  'Style Guidelines',
  'Membership Form',
];

function PdfIcon() {
  return (
    <svg viewBox="0 0 56 72" width="48" height="62">
      <rect x="0" y="0" width="56" height="72" rx="4" fill="#f0f0f0" />
      <polygon points="36,0 56,20 36,20" fill="#d0d0d0" />
      <rect x="0" y="28" width="56" height="24" rx="0" fill="#D32F2F" />
      <text x="28" y="45" textAnchor="middle" fill="white" fontSize="13" fontFamily="Oswald, sans-serif" fontWeight="700">PDF</text>
    </svg>
  );
}

export default function Resources() {
  return (
    <ResourcesSection id="resources">
      <Container>
        <SectionTitle>RESOURCES</SectionTitle>
        <ResourcesGrid>
          {resourcesData.map((name) => (
            <ResourceCard key={name}>
              <PdfIcon />
              <ResourceName>{name}</ResourceName>
              <ResourceButton type="button">VIEW / DOWNLOAD</ResourceButton>
            </ResourceCard>
          ))}
        </ResourcesGrid>
      </Container>
    </ResourcesSection>
  );
}
