import React from 'react';

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
    <section className="committee-section" id="committee">
      <div className="container">
        <h2 className="section-title">THE COMMITTEE</h2>
        <div className="committee-grid">
          {committeeData.map((m) => (
            <div className="committee-card" key={`${m.name}-${m.style}-${m.arc}`}>
              <div className="member-avatar"><SilhouetteAvatar /></div>
              <h4>{m.name}</h4>
              <p className="member-meta">FAV. STYLE &nbsp;<span>{m.style}</span></p>
              <p className="member-meta">ARC &nbsp;<span>{m.arc}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
