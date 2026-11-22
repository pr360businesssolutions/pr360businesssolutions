import Icon from './Icon.jsx'
import { approach } from '../data/siteContent.js'

export default function Approach() {
  return (
    <section id="approach" className="section section--alt">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">How we deliver</span>
          <h2>{approach.heading}</h2>
          <p className="section__sub">{approach.subtitle}</p>
        </div>

        <ol className="approach__grid">
          {approach.steps.map((step, i) => (
            <li key={step.title} className="approach-step">
              <span className="approach-step__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="approach-step__icon">
                <Icon name={step.icon} size={22} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
