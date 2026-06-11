import React from 'react';
import styled from 'styled-components';
import { GALLERY_IMAGES } from '../constants/images';
import { Container, Section, SectionTitle } from '../styles/GlobalStyles';

const GallerySection = styled(Section)`
  background: var(--white);
`;

const GalleryGrid = styled.div`
  column-count: 3;
  column-gap: 0.75rem;
  gap: 0.75rem;

  @media (max-width: 1100px) {
    column-count: 2;
  }

  @media (max-width: 640px) {
    column-count: 1;
  }

  @supports not (column-count: 3) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
`;

const GalleryItem = styled.div`
  break-inside: avoid;
  margin-bottom: 0.75rem;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    transition: transform 0.35s ease, opacity 0.25s;
  }

  &:hover img {
    transform: scale(1.04);
    opacity: 0.9;
  }
`;

export default function Gallery() {
  return (
    <GallerySection id="gallery-section">
      <Container>
        <SectionTitle>GALLERY</SectionTitle>
        <GalleryGrid>
          {GALLERY_IMAGES.map((url) => (
            <GalleryItem key={url.slice(-20)}>
              <img
                src={url}
                alt={`Brew club moment`}
                loading="lazy"
              />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>
    </GallerySection>
  );
}
