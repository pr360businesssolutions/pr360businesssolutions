import { useEffect } from 'react'
import { X, Github, Check } from 'lucide-react'

// Expandable project details view, rendered as an accessible modal dialog.
export default function ProjectModal({ project, onClose }) {
  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" aria-label="Close project details" onClick={onClose}>
          <X size={22} />
        </button>

        <div className="modal__header">
          <span className="badge">{project.badge}</span>
          <h3 id="modal-title">{project.title}</h3>
          <ul className="tech-badges">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="modal__body">
          <Block title="Project Overview">
            <p>{project.overview}</p>
          </Block>

          <Block title="Objective">
            <p>{project.objective}</p>
          </Block>

          <Block title="Testing Scope">
            <ul className="check-list">
              {project.scope.map((s) => (
                <li key={s}>
                  <Check size={16} /> {s}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Key Features">
            <ul className="check-list check-list--2col">
              {project.features.map((f) => (
                <li key={f}>
                  <Check size={16} /> {f}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Folder Structure">
            <pre className="code-block code-block--plain">{project.structure}</pre>
          </Block>

          <Block title="Selected Code Samples">
            {project.codeSamples.map((c) => (
              <div key={c.label} className="code-sample">
                <div className="code-sample__label">
                  {c.label} <span>{c.language}</span>
                </div>
                <pre className="code-block">
                  <code>{c.code}</code>
                </pre>
              </div>
            ))}
          </Block>

          <Block title="Test Scenarios">
            <ul className="check-list">
              {project.scenarios.map((s) => (
                <li key={s}>
                  <Check size={16} /> {s}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Execution Evidence & Sample Reports">
            <ul className="check-list">
              {project.evidence.map((e) => (
                <li key={e}>
                  <Check size={16} /> {e}
                </li>
              ))}
            </ul>
            <p className="modal__disclaimer">
              Evidence items describe the deliverables produced for this demonstration.
              Real screenshots and report files are added as each repository is published.
            </p>
          </Block>

          <Block title="GitHub Repository">
            {project.repo ? (
              <a className="btn btn--ghost btn--sm" href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github size={16} /> View Source Code
              </a>
            ) : (
              <span className="repo-pending">
                <Github size={16} /> Repository coming soon — a public link will be added here.
              </span>
            )}
          </Block>
        </div>
      </div>
    </div>
  )
}

function Block({ title, children }) {
  return (
    <section className="modal__section">
      <h4>{title}</h4>
      {children}
    </section>
  )
}
