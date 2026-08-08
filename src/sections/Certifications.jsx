import { useRef } from "react";
import { Award, Plus } from "lucide-react";
import { certifications } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import "./Certifications.css";

export default function Certifications() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="certifications" className="section certifications" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Certifications</span>
          <h2 className="section-heading">Certifications &amp; training</h2>
        </div>

        {certifications.length === 0 ? (
          <div className="certifications__empty card reveal">
            <Plus size={22} strokeWidth={1.6} />
            <p>
              No certifications added yet. Add entries to <code>src/data/portfolio.js</code> to populate this
              section.
            </p>
          </div>
        ) : (
          <div className="certifications__grid">
            {certifications.map((cert, i) => (
              <div className="certifications__card card reveal" key={cert.id} data-reveal-delay={i * 70}>
                <Award size={20} strokeWidth={1.6} className="certifications__icon" />
                <h3>{cert.title}</h3>
                <p className="certifications__issuer">
                  {cert.issuer} · {cert.date}
                </p>
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="certifications__link">
                    View credential
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
