import { useRef } from "react";
import { skillCategories } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

export default function Skills() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Skills</span>
          <h2 className="section-heading">Technical toolkit</h2>
          <p className="section-sub">
            Practical, hands-on capabilities built through coursework, internship work, and independent practice.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div
              className="skills__card card reveal"
              key={cat.id}
              data-reveal-delay={i * 70}
            >
              <h3 className="skills__card-title">{cat.title}</h3>
              <ul className="skills__list">
                {cat.skills.map((skill) => (
                  <li className="skills__pill" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
