import React from 'react';
import { pic } from '../utils/helpers';

export default function AboutUs() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-text">
          <h2>ABOUT US</h2>
          <p>
            Established in 2020, our club started just like most great beers — as a shared vision
            that bubbled over into something real. We have homebrewers from the Cape, Winelands
            and enthusiasts from all over Cape Town who gather here.
          </p>
          <h3>Why We Get Together</h3>
          <p>
            At our core, we believe brewing is better when it's shared. Our main goal is simple:
            to provide a social, non-serious environment that invites the focus to meet weekly to
            discuss the brew, refine recipes, and simply enjoy the community.
          </p>
          <h3>Competitions with a Purpose</h3>
          <p>
            Our club competitions aren't about high-stakes pressure — they're a chance to step up,
            experiment with different varieties and, of course, taste the creations without taking
            the fun out of the hobby.
          </p>
          <h3>Pro Connections</h3>
          <p>
            We don't brew in a vacuum. We're proud of our strong relationships with the local
            brewing industry for insights and guidance. We're associated with:
          </p>
          <ul className="pro-list">
            <li>HBX</li>
            <li>Stellenbrau</li>
            <li>Bloemhof</li>
            <li>Bosman's</li>
          </ul>
          <p>
            Whether you're looking for professional advice or just want to level up, we bridge
            the gap between homebrewers and the pros.
          </p>
        </div>
        <div className="about-right">
          <img src={pic(450, 320, 'festival8')} alt="Club gathering" className="about-main-img" />
          <div className="cup-badge">
            <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="#C4973A" strokeWidth="2">
              <path d="M12 4h16v18a8 8 0 01-16 0V4z" />
              <path d="M8 8H4a4 4 0 004 4M32 8h4a4 4 0 01-4 4M20 30v6M14 36h12" />
            </svg>
            <div>
              <strong>WF Cup Winners</strong>
              <p>2022, 2023, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
