import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import Logo from './Logo.jsx'
import { company, nav, services } from '../data/siteContent.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo variant="light" markSize={70} />
          <p className="footer__desc">
            Software testing &amp; quality assurance partner for startups, SaaS and software
            companies — dedicated QA professionals and project-based testing.
          </p>
          <p className="footer__tagline">{company.tagline}</p>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            {nav.slice(0, 5).map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}><a href="#services">{s.title}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><MapPin size={15} /> {company.location}</li>
            <li><Mail size={15} /> <a href={`mailto:${company.email}`}>{company.email}</a></li>
            {company.phones.map((p) => (
              <li key={p}><Phone size={15} /> <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a></li>
            ))}
            <li>
              <MessageCircle size={15} />{' '}
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {company.name}. All rights reserved.</span>
        <span>Pune, Maharashtra, India</span>
      </div>
    </footer>
  )
}
