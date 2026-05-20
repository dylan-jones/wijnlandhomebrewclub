import React from 'react';
import { pic } from '../utils/helpers';

export default function WhatsBrewing() {
  return (
    <section className="whats-brewing-section" id="whats-brewing">
      <div className="brewing-side brewing-left">
        <img src={pic(220, 300, 'beer11')} alt="" className="brew-img-top" />
        <img src={pic(220, 200, 'beer22')} alt="" className="brew-img-bottom" />
      </div>
      <div className="brewing-card">
        <p className="brewing-subtitle">
          A snapshot of our recent meetups, brew days<br />and tasting sessions around the valley.
        </p>
        <h2>WHAT'S BEEN<br />BREWING?</h2>
        <a href="#gallery-section" className="btn btn-outline-white">VIEW GALLERY</a>
      </div>
      <div className="brewing-side brewing-right">
        <img src={pic(220, 200, 'beer33')} alt="" className="brew-img-top" />
        <img src={pic(220, 300, 'beer44')} alt="" className="brew-img-bottom" />
      </div>
    </section>
  );
}
