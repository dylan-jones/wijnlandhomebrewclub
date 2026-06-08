import React from 'react';
import { pic } from '../utils/helpers';

const gallerySeeds = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9'];

export default function Gallery() {
  return (
    <section className="section gallery-section" id="gallery-section">
      <div className="container">
        <h2 className="section-title">GALLERY</h2>
        <div className="gallery-grid">
          {gallerySeeds.map((s, i) => (
            <div className="gallery-item" key={s}>
              <img src={pic(400, 300, s)} alt={`Brew club moment ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
