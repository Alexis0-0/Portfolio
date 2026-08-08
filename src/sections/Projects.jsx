import { useMemo, useRef, useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { projectCategories, projects } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  useReveal(ref, [activeFilter]);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Projects</span>
          <h2 className="section-heading">Selected work</h2>
          <p className="section-sub">A closer look at what I've built and supported.</p>
        </div>

        <div className="projects__filters reveal" role="group" aria-label="Filter projects by category">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`projects__filter ${activeFilter === cat ? "is-active" : ""}`}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="projects__empty">No projects in this category yet.</p>
        ) : (
          <div className="projects__grid">
            {filtered.map((project, i) => (
              <article className="project-card card reveal" key={project.id} data-reveal-delay={i * 90}>
                <div className="project-card__image-wrap">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-card__image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.add("is-visible");
                    }}
                  />
                  <div className="project-card__image-fallback">{project.title}</div>
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>

                  {project.features?.length > 0 && (
                    <ul className="project-card__features">
                      {project.features.slice(0, 6).map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  )}

                  {project.tags?.length > 0 && (
                    <div className="project-card__tags">
                      {project.tags.map((tag) => (
                        <span className="project-card__tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {(project.liveUrl || project.githubUrl) && (
                    <div className="project-card__actions">
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
                          <ExternalLink size={15} /> View Project
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
                          <Code2 size={15} /> View GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
