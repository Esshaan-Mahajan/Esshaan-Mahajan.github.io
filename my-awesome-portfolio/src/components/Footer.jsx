import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo" onClick={scrollToTop}>
              <span className="footer__logo-text">EM</span>
            </a>
            <p className="footer__tagline">
              Building intelligent solutions with passion and precision.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__links-group">
              <h4 className="footer__links-title">Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__links-title">Connect</h4>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/esshaan-mahajan" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Esshaan-Mahajan" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:esshaan.mahajan@gmail.com">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="19" x2="12" y2="5"/>
              <polyline points="5 12 12 5 19 12"/>
            </svg>
          </button>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Esshaan Mahajan. All rights reserved.
          </p>
          <p className="footer__credit">
            Designed & Built with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
