import React from 'react';
import ClubLogo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={ClubLogo} alt="" width="50" />
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
