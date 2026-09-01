import React from 'react';
import styled from 'styled-components';
import { Container, Section, SectionTitle, DeviderLine } from '../styles/GlobalStyles';
import { RiExternalLinkLine, RiFile4Fill } from "react-icons/ri";

const ResourcesSection = styled(Section)`
  background: var(--white);
  position: relative;
  z-index: 1;
  padding-top: 0;
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

  svg {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`;

const ResourceName = styled.p`
  font-family: var(--font-space);
  font-size: 2.4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--text);

  @media (max-width: 640px) {
    font-size: 1.8rem;
  }
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
    color: var(--black);
  }
`;

const resourcesData = [
  {
    name: 'Club Constitution',
    fileSize: '860 KB',
    url: '/resources/club-constitution.pdf',
  },
  {
    name: '2026 Brew League',
    url: 'https://drive.google.com/file/d/1c1AIiAufzq5DKJvYIpqAfCGJrpfYKwnM/view',
  },
  {
    name: 'Google Calendar',
    url: 'https://calendar.google.com/calendar/u/0/r?cid=ZmE3NDA4MzY3ZDE4ODI3NzhlNGIxZmYxOGQ1YTFkNDk4YzNjMzllNDc0M2I5MWM5NDQ4YjQxYzI1NDc1ODMyZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
  }
];

const isServerHostedPdf = (url) => url.startsWith('/') && url.toLowerCase().endsWith('.pdf');

export default function Resources() {
  return (
    <ResourcesSection id="resources">
      <Container>
        <DeviderLine />
        <SectionTitle>RESOURCES</SectionTitle>
        <ResourcesGrid>
          {resourcesData.map((resource) => (
            <ResourceCard key={resource.name}>
              {isServerHostedPdf(resource.url) ? <RiFile4Fill /> : <RiExternalLinkLine />}
              <ResourceName>{resource.name}</ResourceName>
              <ResourceSize>{resource.fileSize}</ResourceSize>
              <ResourceButton href={resource.url} target="_blank" rel="noopener noreferrer">
                {isServerHostedPdf(resource.url) ? 'DOWNLOAD' : 'OPEN'}
              </ResourceButton>
            </ResourceCard>
          ))}
        </ResourcesGrid>
      </Container>
    </ResourcesSection>
  );
}
