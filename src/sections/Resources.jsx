import React from 'react';

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
    <section className="section resources-section" id="resources">
      <div className="container">
        <h2 className="section-title">RESOURCES</h2>
        <div className="resources-grid">
          {resourcesData.map((name) => (
            <div className="resource-card" key={name}>
              <PdfIcon />
              <p className="resource-name">{name}</p>
              <button type="button" className="resource-link">VIEW / DOWNLOAD</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
