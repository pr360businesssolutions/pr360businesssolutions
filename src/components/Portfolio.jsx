import { useState } from 'react'
import { ArrowRight, Github } from 'lucide-react'
import ProjectModal from './ProjectModal.jsx'
import { portfolio } from '../data/portfolioData.js'

export default function Portfolio() {
  const [activeId, setActiveId] = useState(null)
  const activeProject = portfolio.find((p) => p.id === activeId) || null

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">Our Work &amp; QA Capabilities</span>
          <h2>Practical QA Demonstrations</h2>
          <p className="section__sub">
            Explore our practical QA demonstrations, automation frameworks and testing
            deliverables to understand how we approach software quality.
          </p>
        </div>

        <div className="portfolio__grid">
          {portfolio.map((p) => (
            <article key={p.id} className="project-card">
              <div className="project-card__top">
                <span className="badge">{p.badge}</span>
                <span className="project-card__type">{p.type}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="project-card__short">{p.short}</p>

              <ul className="tech-badges">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="project-card__actions">
                <button className="btn btn--text" onClick={() => setActiveId(p.id)}>
                  View Project Details <ArrowRight size={16} />
                </button>
                {p.repo ? (
                  <a
                    className="btn btn--ghost btn--sm"
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> View Source Code
                  </a>
                ) : (
                  <span className="repo-pending" title="A public repository will be linked here soon.">
                    <Github size={16} /> Repository coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="portfolio__note">
          All projects shown are independently built QA demonstrations created by PR 360° to
          illustrate our capabilities. They are not client deliverables and contain no
          confidential information.
        </p>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveId(null)} />
    </section>
  )
}
