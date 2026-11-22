import { technologies } from '../data/siteContent.js'

export default function Technologies() {
  return (
    <section id="technologies" className="section section--alt">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">Our toolkit</span>
          <h2>{technologies.heading}</h2>
          <p className="section__sub">{technologies.subtitle}</p>
        </div>

        <ul className="tech-wall">
          {technologies.tools.map((t) => (
            <li key={t} className="tech-chip">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
