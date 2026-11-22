import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { contact, company } from '../data/siteContent.js'

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    company: '',
    service: '',
    requirements: '',
    'bot-field': '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const next = {}
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.'
    if (!form.email.trim()) next.email = 'Please enter your business email.'
    else if (!EMAIL_RE.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.service) next.service = 'Please select a service.'
    if (!form.requirements.trim()) next.requirements = 'Please describe your requirements.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'submitting') return // prevent duplicate submissions
    if (!validate()) return

    setStatus('submitting')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`)
      setStatus('success')
      setForm({ fullName: '', email: '', company: '', service: '', requirements: '', 'bot-field': '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">Get in touch</span>
          <h2>{contact.heading}</h2>
          <p className="section__sub">{contact.description}</p>
        </div>

        <div className="contact__grid">
          {/* Contact details */}
          <aside className="contact__info">
            <h3>Contact Information</h3>
            <ul className="contact__list">
              <li>
                <span className="contact__icon"><MapPin size={18} /></span>
                <div>
                  <span className="contact__label">Office</span>
                  <span>{company.location}</span>
                </div>
              </li>
              <li>
                <span className="contact__icon"><Mail size={18} /></span>
                <div>
                  <span className="contact__label">Email</span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              <li>
                <span className="contact__icon"><Phone size={18} /></span>
                <div>
                  <span className="contact__label">Phone</span>
                  {company.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
                  ))}
                </div>
              </li>
            </ul>
            <a
              className="btn btn--whatsapp"
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </aside>

          {/* Form */}
          <form
            className="contact__form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>Don’t fill this out: <input name="bot-field" onChange={update} /></label>
            </p>

            <div className="field">
              <label htmlFor="fullName">Full Name <span>*</span></label>
              <input
                id="fullName" name="fullName" type="text" value={form.fullName}
                onChange={update} placeholder="Your name"
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && <span className="field__error">{errors.fullName}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Business Email <span>*</span></label>
              <input
                id="email" name="email" type="email" value={form.email}
                onChange={update} placeholder="you@company.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="company">Company Name</label>
              <input
                id="company" name="company" type="text" value={form.company}
                onChange={update} placeholder="Optional"
              />
            </div>

            <div className="field">
              <label htmlFor="service">Service Required <span>*</span></label>
              <select
                id="service" name="service" value={form.service}
                onChange={update} aria-invalid={!!errors.service}
              >
                <option value="">Select a service…</option>
                {contact.serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              {errors.service && <span className="field__error">{errors.service}</span>}
            </div>

            <div className="field">
              <label htmlFor="requirements">Project Requirements <span>*</span></label>
              <textarea
                id="requirements" name="requirements" rows="4" value={form.requirements}
                onChange={update} placeholder="Tell us about your application and what you need tested."
                aria-invalid={!!errors.requirements}
              />
              {errors.requirements && <span className="field__error">{errors.requirements}</span>}
            </div>

            <button type="submit" className="btn btn--primary btn--block" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : (<><Send size={18} /> Send Message</>)}
            </button>

            {status === 'success' && (
              <p className="form-msg form-msg--success">
                <CheckCircle2 size={18} /> Thank you — your enquiry has been sent. We’ll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="form-msg form-msg--error">
                <AlertCircle size={18} /> Something went wrong. Please email us directly at {company.email}.
              </p>
            )}

            <p className="form-privacy">{contact.privacyNote}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
