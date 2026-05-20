import React from 'react';
import ClubLogo from '../assets/logo.svg';
import { pic } from '../utils/helpers';

export default function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${pic(1400, 800, 'friends42')})` }}
    >
      <div className="hero-overlay">
        <img src={ClubLogo} alt="Wijnland Homebrew Club" />
      </div>
    </section>
  );
}
