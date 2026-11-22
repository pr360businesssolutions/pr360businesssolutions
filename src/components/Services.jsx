import { Check } from 'lucide-react'
import Icon from './Icon.jsx'
import { services } from '../data/siteContent.js'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">What we do</span>
          <h2>Our Services</h2>
          <p className="section__sub">
            Focused software testing services, delivered the way your team needs them.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article key={s.id} className="service-card">
              <span className="service-card__icon">
                <Icon name={s.icon} size={24} />
              </span>
              <h3>{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
              <ul className="service-card__list">
                {s.items.map((item) => (
                  <li key={item}>
                    <Check size={16} /> {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
