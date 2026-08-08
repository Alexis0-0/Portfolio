import { useRef } from "react";
import { Download, FileText } from "lucide-react";
import { personal } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import "./ResumeCta.css";

export default function ResumeCta() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="section resume-cta" ref={ref}>
      <div className="container">
        <div className="resume-cta__panel card reveal">
          <div className="resume-cta__text">
            <h2 className="section-heading">Let's work together</h2>
            <p className="section-sub">
              Interested in working with me? Download my resume to learn more about my experience, skills, and
              qualifications.
            </p>
          </div>
          <div className="resume-cta__actions">
            <a href={personal.resumePath} download className="btn btn-primary">
              <Download size={16} /> Download Resume
            </a>
            <a href={personal.resumePath} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <FileText size={16} /> View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
