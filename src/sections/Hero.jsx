import { Suspense, lazy } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { personal } from "../data/portfolio";
import "./Hero.css";

// Three.js is a heavy dependency — load it only when the hero visual is needed,
// keeping it out of the initial JS bundle for a faster first paint.
const Hero3D = lazy(() => import("../components/Hero3D"));

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            {personal.status}
          </span>

          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">
            {(() => {
              const words = personal.name.trim().split(" ");
              const firstLine = words.slice(0, 2).join(" ");
              const secondLine = words.slice(2).join(" ");
              return secondLine ? (
                <>
                  {firstLine}
                  <br />
                  {secondLine}
                </>
              ) : (
                personal.name
              );
            })()}
          </h1>

          <p className="hero__role">
            {personal.role}
            <span className="hero__role-divider" aria-hidden="true" />
            <span className="hero__role-sub">{personal.tagline}</span>
          </p>

          <p className="hero__intro">{personal.intro}</p>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href={personal.resumePath} download className="btn btn-secondary">
              <Download size={16} /> Download Resume
            </a>
          </div>

          <a href="#contact" className="hero__contact-link">
            <Mail size={14} /> Or reach out directly
          </a>
        </div>

        <div className="hero__visual">
          <Suspense fallback={<div className="hero3d-placeholder" aria-hidden="true" />}>
            <Hero3D />
          </Suspense>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
