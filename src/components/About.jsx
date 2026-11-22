import { Target, Eye } from 'lucide-react'
import { about } from '../data/siteContent.js'

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Who we are</span>
          <h2>{about.heading}</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about__cards">
            <article className="info-card">
              <span className="info-card__icon">
                <Target size={22} />
              </span>
              <h3>Our Mission</h3>
              <p>{about.mission}</p>
            </article>
            <article className="info-card">
              <span className="info-card__icon">
                <Eye size={22} />
              </span>
              <h3>Our Vision</h3>
              <p>{about.vision}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
