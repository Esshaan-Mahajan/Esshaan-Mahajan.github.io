import React from "react";
import { publications } from "../data/publications";
import "./publications.css";

export default function PublicationsSection() {
  return (
    <section className="publications-section-glass" id="publications">
      <h2>Publications</h2>
      <div className="pubs-glass-list">
        {publications.map((pub, idx) => (
          <div className="pub-glass-card" key={idx}>
            <div className="pub-title">{pub.title}</div>
            <div className="pub-journal">{pub.journal}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
