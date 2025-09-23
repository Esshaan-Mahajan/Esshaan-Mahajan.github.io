import React from "react";
import { education } from "../data/education";
import "./education.css";

export default function EducationSection() {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-glass-grid">
        {education
          .sort((a, b) => b.startDate.localeCompare(a.startDate))
          .map((item, idx) => (
            <div className="education-glass-card" key={idx}>
              <div className="education-icon">
                🎓
              </div>
              <span className="edu-period">{item.period}</span>
              <h3>{item.degree}</h3>
              <div className="edu-place">{item.place}</div>
              <ul>
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
        ))}
      </div>
    </section>
  );
}
