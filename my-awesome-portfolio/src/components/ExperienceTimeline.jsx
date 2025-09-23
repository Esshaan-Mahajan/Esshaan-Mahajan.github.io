import React from "react";
import { experiences } from "../data/experience";
import "./timeline.css";

export default function ExperienceTimeline() {
  // Sort experiences in chronological order
  const sortedExp = experiences.slice().sort((a, b) => b.startDate.localeCompare(a.startDate));


  return (
    <section className="timeline-section">
      <h2>Work Experience</h2>
      <div className="timeline-container">
        {sortedExp.map((item, idx) => (
          <div className="timeline-card-glass" key={idx}>
            <div className="timeline-dot" />
            <div className="timeline-line" />
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <div className="timeline-place">{item.company}</div>
              <ul>
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
