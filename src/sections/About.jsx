import { useRef } from "react";
import { personal, quickFacts } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          <div className="about__text reveal">
            <span className="eyebrow">About Me</span>
            <h2 className="section-heading">Grounded in fundamentals, ready for real problems.</h2>
            <p className="about__intro">{personal.intro}</p>
            <p className="about__goal">{personal.careerGoal}</p>
          </div>

          <div className="about__visual reveal" data-reveal-delay="120">
            <div className="about__frame">
              <div className="about__frame-glow" />
              <img
                src={personal.profileImage}
                alt={`Portrait of ${personal.name}`}
                className="about__photo"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.add("is-visible");
                }}
              />
              <div className="about__photo-fallback">{personal.initials}</div>
            </div>

            <div className="about__facts card">
              <h3 className="about__facts-title">Quick Facts</h3>
              <dl className="about__facts-list">
                {quickFacts.map((fact) => (
                  <div className="about__fact" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
