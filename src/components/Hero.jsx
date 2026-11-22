import { ArrowRight } from 'lucide-react'
import Icon from './Icon.jsx'
import { hero, trustStrip } from '../data/siteContent.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Software Testing &amp; Quality Assurance</span>
          <h1 className="hero__title">{hero.heading}</h1>
          <p className="hero__body">{hero.body}</p>
          <div className="hero__actions">
            <a href={hero.primaryCta.href} className="btn btn--primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn--outline">
              {hero.secondaryCta.label} <ArrowRight size={18} />
            </a>
          </div>

          <ul className="hero__trust">
            {trustStrip.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="hero__highlights">
          {hero.highlights.map((h) => (
            <article key={h.title} className="highlight-card">
              <span className="highlight-card__icon">
                <Icon name={h.icon} size={22} strokeWidth={2} />
              </span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
