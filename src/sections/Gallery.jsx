import React from 'react';
import styled from 'styled-components';
import { pic } from '../utils/helpers';
import { Container, Section, SectionTitle } from '../styles/GlobalStyles';

const GallerySection = styled(Section)`
  background: var(--white);
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryItem = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: 210px;
    transition: transform 0.35s ease, opacity 0.25s;
  }

  &:hover img {
    transform: scale(1.04);
    opacity: 0.9;
  }
`;

const gallerySeeds = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9'];

export default function Gallery() {
  return (
    <GallerySection id="gallery-section">
      <Container>
        <SectionTitle>GALLERY</SectionTitle>
        <GalleryGrid>
          {gallerySeeds.map((s, i) => (
            <GalleryItem key={s}>
              <img src={pic(400, 300, s)} alt={`Brew club moment ${i + 1}`} loading="lazy" />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>
    </GallerySection>
  );
}
