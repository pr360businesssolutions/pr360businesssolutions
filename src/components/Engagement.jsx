import { Check } from 'lucide-react'
import Icon from './Icon.jsx'
import { engagement } from '../data/siteContent.js'

export default function Engagement() {
  return (
    <section id="engagement" className="section section--alt">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">How we work together</span>
          <h2>{engagement.heading}</h2>
          <p className="section__sub">{engagement.subtitle}</p>
        </div>

        <div className="engagement__grid">
          {engagement.models.map((m) => (
            <article key={m.id} className="engagement-card">
              <span className="engagement-card__icon">
                <Icon name={m.icon} size={26} />
              </span>
              <h3>{m.title}</h3>
              <p className="engagement-card__desc">{m.description}</p>
              <p className="engagement-card__label">{m.suitableLabel}</p>
              <ul className="engagement-card__list">
                {m.suitable.map((item) => (
                  <li key={item}>
                    <Check size={16} /> {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="engagement__cta">
          <a href={engagement.cta.href} className="btn btn--primary">
            {engagement.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
