import React from 'react';
import { pic } from '../utils/helpers';

export default function Welcome() {
  return (
    <section className="section welcome-section">
      <div className="container welcome-grid">
        <div className="welcome-text">
          <h2>WELCOME TO WIJNLAND<br />HOMEBREW CLUB</h2>
          <p className="lead-text">
            This isn't your grandfather's social club. We aren't here for the sweet
            conversation, or to discuss handshakes, we're here for the chemistry, the brewing.
          </p>
          <p>
            Based in the heart of the Winelands, we are a community of makers starting out and
            some who'd call us slightly famous for the fermentation. While this valley focuses on
            the vine, we focus on the grain, the hop, and the fermenting talent it takes.
          </p>
          <p>
            Whether you're a technical brewer obsessed with yeast profiles or a determined
            hobbyist looking to refine your palate, this is your place.
          </p>
          <p className="tagline"><em>No pretence. Just better beer.</em></p>
          <div className="btn-group">
            <a href="#join" className="btn btn-dark">JOIN THE CLUB</a>
            <a href="#contact" className="btn btn-outline-dark">CONTACT US</a>
          </div>
        </div>
        <div className="welcome-image">
          <img src={pic(600, 480, 'craftbeer7')} alt="Craft brewing" />
        </div>
      </div>
    </section>
  );
}
