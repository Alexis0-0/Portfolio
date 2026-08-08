import { useRef } from "react";
import { experience } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import "./Experience.css";

export default function Experience() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Experience</span>
          <h2 className="section-heading">Where I've applied it</h2>
          <p className="section-sub">
            Hands-on technical support experience gained through an internship handling real infrastructure and end
            users.
          </p>
        </div>

        <ol className="timeline">
          {experience.map((job, i) => (
            <li className="timeline__item reveal" key={job.id} data-reveal-delay={i * 90}>
              <div className="timeline__marker">
                <span className="timeline__marker-dot" />
                {i < experience.length - 1 && <span className="timeline__marker-line" />}
              </div>

              <div className="timeline__content card">
                <p className="timeline__period">{job.period}</p>
                <h3 className="timeline__role">{job.role}</h3>
                <p className="timeline__org">{job.org}</p>

                <ul className="timeline__responsibilities">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
