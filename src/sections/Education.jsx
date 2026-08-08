import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import "./Education.css";

export default function Education() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Education</span>
          <h2 className="section-heading">Academic background</h2>
        </div>

        <div className="education__card card reveal">
          <div className="education__icon">
            <GraduationCap size={26} strokeWidth={1.6} />
          </div>
          <div className="education__body">
            <h3 className="education__degree">{education.degree}</h3>
            <p className="education__school">{education.school}</p>
            <div className="education__meta">
              <span className="education__status">{education.statusLabel}</span>
              {education.honor && <span className="education__honor">{education.honor}</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
