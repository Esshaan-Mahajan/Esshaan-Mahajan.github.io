import React, { useState } from "react";
import { projects } from "../data/projects"; // Edit your projects in data file
import "./projects.css"; // We'll create this for special glassy styles

const ProjectsShowcase = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-glass-grid">
        {projects.map((proj, idx) => (
          <div
            className="project-glass-card"
            key={idx}
            onClick={() => setActiveIdx(idx)}
            tabIndex={0}
            aria-label={`Open details for ${proj.title}`}
          >
            {/* Replace with an animated GIF or video for even more wow: */}
            {proj.cover && (
              <img src={proj.cover} className="project-cover" alt={proj.title} />
            )}
            <h3>{proj.title}</h3>
            <span className="project-period">{proj.period}</span>
            <p className="project-short">{proj.description.slice(0, 85)}...</p>
            <span className="see-more">See Details →</span>
          </div>
        ))}
      </div>
      {/* Modal */}
      {activeIdx !== null && (
        <div className="project-modal-bg" onClick={() => setActiveIdx(null)}>
          <div className="project-modal-card" onClick={e => e.stopPropagation()}>
            <h2>{projects[activeIdx].title}</h2>
            {projects[activeIdx].cover && (
              <img src={projects[activeIdx].cover} className="modal-cover" alt="" />
            )}
            <p>{projects[activeIdx].description}</p>
            {projects[activeIdx].link && (
              <a href={projects[activeIdx].link} target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            )}
            <button onClick={() => setActiveIdx(null)} className="close-modal">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsShowcase;
