import React, { useState } from 'react';
import './App.css';

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
const pic = (w, h, seed) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

/* ─────────────────────────────────────────
   SVG LOGO
───────────────────────────────────────── */
function ClubLogo({ size = 110 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="94" fill="none" stroke="#C4973A" strokeWidth="4" />
      <circle cx="100" cy="100" r="82" fill="none" stroke="#C4973A" strokeWidth="1.5" />
      {/* Hop cone */}
      <g fill="#C4973A">
        <ellipse cx="100" cy="85" rx="12" ry="18" />
        <ellipse cx="83" cy="92" rx="10" ry="15" transform="rotate(-22 83 92)" />
        <ellipse cx="117" cy="92" rx="10" ry="15" transform="rotate(22 117 92)" />
        <rect x="97" y="103" width="6" height="16" rx="3" />
        <ellipse cx="92" cy="120" rx="8" ry="5" transform="rotate(-15 92 120)" />
        <ellipse cx="108" cy="120" rx="8" ry="5" transform="rotate(15 108 120)" />
      </g>
      <text x="100" y="50" textAnchor="middle" fill="#C4973A" fontSize="14"
        fontFamily="Oswald, sans-serif" fontWeight="700" letterSpacing="4">WIJNLAND</text>
      <text x="100" y="163" textAnchor="middle" fill="#C4973A" fontSize="9"
        fontFamily="Oswald, sans-serif" letterSpacing="3">HOMEBREW CLUB</text>
    </svg>
  );
}

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <span className="nav-brand">WIJNLAND HOMEBREW CLUB</span>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {[['HOME', '#home'], ['ABOUT', '#about'], ['EVENTS', '#events'], ['CONTACT', '#contact']].map(
            ([label, href]) => (
              <li key={label}>
                <a href={href} onClick={() => setOpen(false)}>{label}</a>
              </li>
            )
          )}
        </ul>
        <a href="#join" className="btn btn-nav-join">JOIN THE CLUB</a>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${pic(1400, 800, 'friends42')})` }}
    >
      <div className="hero-overlay">
        <ClubLogo size={150} />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WELCOME
───────────────────────────────────────── */
function Welcome() {
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

/* ─────────────────────────────────────────
   WHAT'S BEEN BREWING
───────────────────────────────────────── */
function WhatsBrewing() {
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

/* ─────────────────────────────────────────
   ABOUT US
───────────────────────────────────────── */
function AboutUs() {
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

/* ─────────────────────────────────────────
   COMMITTEE
───────────────────────────────────────── */
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

function Committee() {
  return (
    <section className="committee-section">
      <div className="container">
        <h2 className="section-title">THE COMMITTEE</h2>
        <div className="committee-grid">
          {committeeData.map((m, i) => (
            <div className="committee-card" key={i}>
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

/* ─────────────────────────────────────────
   INTERESTED IN JOINING (inline form)
───────────────────────────────────────── */
function JoinForm() {
  const [form, setForm] = useState({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    alert("Thanks! We'll be in touch.");
    setForm({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  };
  return (
    <section className="section join-section" id="join">
      <div className="container two-col-grid">
        <div className="col-text">
          <h2>INTERESTED IN JOINING?</h2>
          <p>
            Ready to see what's on tap? Whether you're a seasoned pro or a first-timer, we
            welcome you with a warm pint and open arms. Fill in the form to stay updated on
            meetings, events, and everything Wijnland.
          </p>
          <p>
            Come through to our next meeting to see what we're all about, meet the members,
            discuss all things fermented and maybe enjoy a cold one.
          </p>
          <p>Fill out this form and we'll get back to you soon.</p>
        </div>
        <form className="club-form" onSubmit={submit}>
          <div className="form-row">
            <input name="fn" placeholder="First Name" value={form.fn} onChange={set} required />
            <input name="ln" placeholder="Last Name" value={form.ln} onChange={set} required />
          </div>
          <div className="form-row">
            <input name="loc" placeholder="Location" value={form.loc} onChange={set} />
            <input name="tel" placeholder="Contact Number" value={form.tel} onChange={set} />
          </div>
          <textarea name="msg" placeholder="Message" value={form.msg} onChange={set} rows={5} />
          <button type="submit" className="btn btn-dark">JOIN THE CLUB</button>
        </form>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   UPCOMING EVENTS
───────────────────────────────────────── */
const eventsData = [
  { name: 'Brew Day #12', type: 'BREW SESSION', date: '10 MAY', address: '14 Hop Street', city: 'STELLENBOSCH', desc: 'Join us for a full-day brew session. All experience levels welcome. Bring your tasting notes and a good attitude.' },
  { name: 'Pale Ale Tasting', type: 'TASTING EVENT', date: '18 MAY', address: '7 Barrel Lane', city: 'PAARL', desc: 'Side-by-side tasting of six pale ales brewed by our members over the last quarter.' },
  { name: 'HBX Competition', type: 'COMPETITION', date: '02 JUN', address: 'HBX Venue, Main Rd', city: 'CAPE TOWN', desc: 'Annual homebrewing competition. Submit your best brew for judging by industry professionals.' },
  { name: 'Lager Experiment', type: 'BREW SESSION', date: '14 JUN', address: '22 Grain Road', city: 'FRANSCHHOEK', desc: 'A focused session on lagering techniques — cold fermentation, conditioning, and clarity tips.' },
  { name: 'Winter Warmer', type: 'SOCIAL EVENT', date: '28 JUN', address: 'Bloemhof Estate', city: 'WELLINGTON', desc: 'End-of-winter social gathering. Bring a bottle to share and enjoy the fireside with fellow brewers.' },
  { name: 'Pro Collab Brew', type: 'COLLAB BREW', date: '12 JUL', address: 'Stellenbrau Brewery', city: 'STELLENBOSCH', desc: 'Exclusive collaboration brew session with the team at Stellenbrau. Limited spots available.' },
];

function Events() {
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

/* ─────────────────────────────────────────
   GALLERY
───────────────────────────────────────── */
const gallerySeeds = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9'];

function Gallery() {
  return (
    <section className="section gallery-section" id="gallery-section">
      <div className="container">
        <h2 className="section-title">GALLERY</h2>
        <div className="gallery-grid">
          {gallerySeeds.map((s, i) => (
            <div className="gallery-item" key={i}>
              <img src={pic(400, 300, s)} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   RESOURCES
───────────────────────────────────────── */
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

function Resources() {
  return (
    <section className="section resources-section">
      <div className="container">
        <h2 className="section-title">RECOURCES</h2>
        <div className="resources-grid">
          {resourcesData.map((name, i) => (
            <div className="resource-card" key={i}>
              <PdfIcon />
              <p className="resource-name">{name}</p>
              <a href="#" className="resource-link">VIEW / DOWNLOAD</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CONTACT US
───────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    alert("Message sent! We'll get back to you.");
    setForm({ fn: '', ln: '', loc: '', tel: '', msg: '' });
  };
  return (
    <section className="section contact-section" id="contact">
      <div className="container two-col-grid">
        <div className="col-text">
          <h2>CONTACT US</h2>
          <p>
            Have a question, feedback, or just want to say hi? We'd love to hear from you.
            Drop us a message and one of our committee members will get back to you as soon
            as possible.
          </p>
          <p>Fill out this form and we'll get back to you soon.</p>
        </div>
        <form className="club-form" onSubmit={submit}>
          <div className="form-row">
            <input name="fn" placeholder="First Name" value={form.fn} onChange={set} required />
            <input name="ln" placeholder="Last Name" value={form.ln} onChange={set} required />
          </div>
          <div className="form-row">
            <input name="loc" placeholder="Location" value={form.loc} onChange={set} />
            <input name="tel" placeholder="Contact Number" value={form.tel} onChange={set} />
          </div>
          <textarea name="msg" placeholder="Message" value={form.msg} onChange={set} rows={5} />
          <button type="submit" className="btn btn-dark">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <ClubLogo size={50} />
          <span>WIJNLAND HOMEBREW CLUB</span>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Wijnland Homebrew Club. All rights reserved.</p>
        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   APP
───────────────────────────────────────── */
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Welcome />
      <WhatsBrewing />
      <AboutUs />
      <Committee />
      <JoinForm />
      <Events />
      <Gallery />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}
