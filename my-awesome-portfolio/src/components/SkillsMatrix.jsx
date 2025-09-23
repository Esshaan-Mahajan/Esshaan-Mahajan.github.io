import React from "react";
import { skills } from "../data/skills";
import "./skills.css";

export default function SkillsMatrix() {
  return (
    <section id="skills" className="skills-section-glass">
      <h2>Skills & Technologies</h2>
      <div className="skills-glass-grid">
        {skills.map((s, idx) => (
          <div className="skill-category-glass" key={idx}>
            <h4>{s.category}</h4>
            <div className="skill-list">
              {s.items.map((item, i) => (
                <span className="skill-badge-glass" key={i}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
