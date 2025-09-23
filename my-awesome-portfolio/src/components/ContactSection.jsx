import React, { useState } from "react";
import { contacts } from "../data/contacts";
import "./contact.css";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Normally, you'd also send form data here!
  }

  return (
    <section id="contact" className="contact-section-glass">
      <h2>Contact & Connect</h2>
      <div className="contact-social-row">
        {contacts.map((c, idx) => (
          <a
            href={c.href}
            key={idx}
            className="contact-glass-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={c.text}
          >
            <span className="contact-icon">{c.icon}</span> {c.text}
          </a>
        ))}
      </div>
      <form className="contact-form-glass" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea name="message" rows="5" required />
        <button type="submit" className="contact-form-btn">Send Message</button>
        {submitted && <div className="contact-feedback">Thank you! Message sent ✨</div>}
      </form>
    </section>
  );
}
