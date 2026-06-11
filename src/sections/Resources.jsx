import React from 'react';
import styled from 'styled-components';
import { Container, Section, SectionTitle } from '../styles/GlobalStyles';

const ResourcesSection = styled(Section)`
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
  background: var(--off-white);
  border: 3px solid var(--black);
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const ResourceName = styled.p`
  font-family: var(--font-space);
  font-size: 2.4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--text);
`;

const ResourceSize = styled.p`
  font-size: 1.6rem;
`;

const ResourceButton = styled.a`
  display: inline-block;
  font-size: 1.6rem;
  color: var(--gold);
  text-transform: uppercase;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--gold-light);
    border-color: var(--gold-light);
  }
`;

const resourcesData = [
  {
    name: 'Brew Day Guide',
    fileSize: '1.2 MB',
    url: '/resources/brew-day-guide.pdf',
  },
  {
    name: 'Competition Rules',
    fileSize: '860 KB',
    url: '/resources/competition-rules.pdf',
  },
  {
    name: 'Style Guidelines',
    fileSize: '2.1 MB',
    url: '/resources/style-guidelines.pdf',
  },
  {
    name: 'Membership Form',
    fileSize: '540 KB',
    url: '/resources/membership-form.pdf',
  },
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
          {resourcesData.map((resource) => (
            <ResourceCard key={resource.name}>
              <PdfIcon />
              <ResourceName>{resource.name}</ResourceName>
              <ResourceSize>{resource.fileSize}</ResourceSize>
              <ResourceButton href={resource.url} target="_blank" rel="noopener noreferrer">
                DOWNLOAD
              </ResourceButton>
            </ResourceCard>
          ))}
        </ResourcesGrid>
      </Container>
    </ResourcesSection>
  );
}
