import React from "react";
import { stats } from "../data/stats";
import "./stats.css";

export default function StatsHighlights() {
  return (
    <section className="stats-section">
      <h2>Esshaan in Numbers</h2>
      <div className="stats-glass-grid">
        {stats.map((item, i) => (
          <div className="stat-glass-card" key={i}>
            <div className="stat-icon">{item.icon}</div>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
