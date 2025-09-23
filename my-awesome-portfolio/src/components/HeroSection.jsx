import React from "react";
import "./hero.css"; // Make sure your CSS matches the finalized version!

export default function HeroSection() {
  return (
    <section className="hero-glow-bg">
      {/* Glass overlay for better clarity around text/buttons */}
      <div className="hero-center">
        <div className="hero-main-fade-in">
          <h1>
            <span className="fade-h1-line">Esshaan Mahajan</span>
            <span className="fade-job-role">AI Engineer & Creative Coder</span>
          </h1>
          <p className="tagline">
            I design intelligent systems,<span className="tag-gradient"> blending ML, NLP, and design</span>, to make tech more human.
          </p>
          <div className="hero-btns">
  <button
    className="btn-primary-glass"
    onClick={() => {
      const target = document.querySelector(".timeline-section");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Explore Work ↓
  </button>
  <a href="#contact" className="btn-glow">Let’s collaborate</a>
</div>

        </div>
      </div>

      {/* Background video stays behind everything for parallax clarity */}
      <video className="hero-bg-video" autoPlay loop muted poster="">
        <source src="/images/background.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
