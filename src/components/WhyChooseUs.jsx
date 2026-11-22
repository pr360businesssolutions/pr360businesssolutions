import Icon from './Icon.jsx'
import { whyChooseUs } from '../data/siteContent.js'

export default function WhyChooseUs() {
  return (
    <section id="why" className="section">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">Why PR 360°</span>
          <h2>{whyChooseUs.heading}</h2>
          <p className="section__sub">{whyChooseUs.subtitle}</p>
        </div>

        <div className="why__grid">
          {whyChooseUs.reasons.map((r) => (
            <article key={r.title} className="why-card">
              <span className="why-card__icon">
                <Icon name={r.icon} size={22} />
              </span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
