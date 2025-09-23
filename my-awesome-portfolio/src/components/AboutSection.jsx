import React, { useState } from "react";
import { about } from "../data/about";
import "./about.css";

export default function AboutSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about" className="about-section-advanced">
      <h2>About Me</h2>
      <div className="about-glass-card" onClick={() => setShowModal(true)} tabIndex={0}>
        <div className="about-headline">
          👋 <span className="animated-headline">I'm Esshaan, creative coder & AI engineer.</span>
        </div>
        <blockquote className="about-quote">
          “I build intelligent systems—blending ML, NLP and human-centered design—to make technology more positive and accessible.”
        </blockquote>
        <div className="about-short">
          {about.summary.slice(0, 110)}... <span className="about-readmore">Read more</span>
        </div>
      </div>

      {/* Modal for full biography */}
      {showModal && (
        <div className="about-modal-bg" onClick={() => setShowModal(false)}>
          <div className="about-modal-card" onClick={e => e.stopPropagation()}>
            <h3>Meet Esshaan</h3>
            <p>{about.summary}</p>
            <button className="about-close" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
