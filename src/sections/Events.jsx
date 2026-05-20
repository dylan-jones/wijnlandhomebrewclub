import React from 'react';
import { pic } from '../utils/helpers';

const eventsData = [
  { name: 'Brew Day #12', type: 'BREW SESSION', date: '10 MAY', address: '14 Hop Street', city: 'STELLENBOSCH', desc: 'Join us for a full-day brew session. All experience levels welcome. Bring your tasting notes and a good attitude.' },
  { name: 'Pale Ale Tasting', type: 'TASTING EVENT', date: '18 MAY', address: '7 Barrel Lane', city: 'PAARL', desc: 'Side-by-side tasting of six pale ales brewed by our members over the last quarter.' },
  { name: 'HBX Competition', type: 'COMPETITION', date: '02 JUN', address: 'HBX Venue, Main Rd', city: 'CAPE TOWN', desc: 'Annual homebrewing competition. Submit your best brew for judging by industry professionals.' },
  { name: 'Lager Experiment', type: 'BREW SESSION', date: '14 JUN', address: '22 Grain Road', city: 'FRANSCHHOEK', desc: 'A focused session on lagering techniques — cold fermentation, conditioning, and clarity tips.' },
  { name: 'Winter Warmer', type: 'SOCIAL EVENT', date: '28 JUN', address: 'Bloemhof Estate', city: 'WELLINGTON', desc: 'End-of-winter social gathering. Bring a bottle to share and enjoy the fireside with fellow brewers.' },
  { name: 'Pro Collab Brew', type: 'COLLAB BREW', date: '12 JUL', address: 'Stellenbrau Brewery', city: 'STELLENBOSCH', desc: 'Exclusive collaboration brew session with the team at Stellenbrau. Limited spots available.' },
];

export default function Events() {
  return (
    <section className="section events-section" id="events">
      <div className="container">
        <h2 className="section-title">UPCOMING EVENTS</h2>
        <div className="events-grid">
          {eventsData.map((ev, i) => (
            <div className="event-card" key={i}>
              <img src={pic(150, 160, `ev${i + 1}`)} alt={ev.name} className="event-img" />
              <div className="event-details">
                <h4>{ev.name}</h4>
                <p className="event-meta">{ev.type}</p>
                <p className="event-meta">{ev.date}</p>
                <p className="event-meta">{ev.address}</p>
                <p className="event-meta">{ev.city}</p>
                <p className="event-desc">{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
