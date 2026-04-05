import { useState, type FormEvent } from 'react'
import { Seo } from '../components/Seo'
import { TITLE_SUFFIX } from '../config/seo'
import { site, whatsappUrl } from '../config/site'
import { SocialIcons } from '../components/SocialIcons'

const interests = [
  'New tractor',
  'Used tractor',
  'Trade-in / appraisal',
  'Service appointment',
  'Parts quote',
  'Other',
] as const

export function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState<string>(interests[0])
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const lines = [
      site.facebookPageTitle,
      `Name: ${name || '(not provided)'}`,
      `Phone: ${phone || '(not provided)'}`,
      `Interest: ${interest}`,
      message.trim() ? `Message: ${message.trim()}` : '',
    ].filter(Boolean)
    const url = whatsappUrl(lines.join('\n'))
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Seo
        title={`Contact Tractor Dealership Jangaon | ${TITLE_SUFFIX}`}
        description="Visit our Mahindra tractor showroom in Jangaon or WhatsApp KS Tractors. Tractor dealership on Suryapet Road — directions, hours Mon–Sat, email and social links."
        path="/contact"
      />
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-base-content md:text-4xl">
            Contact
          </h1>
          <div className="space-y-2 text-base-content/85">
            <p>
              <a href={`tel:${site.phoneTel}`} className="link link-primary font-medium">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="link link-primary font-medium">
                {site.email}
              </a>
            </p>
            <p>{site.addressLines.join(', ')}</p>
            <p>{site.hours}</p>
          </div>
          <p className="mb-2 mt-8 text-xs font-bold uppercase tracking-wider text-base-content/50">
            Contact us on social media
          </p>
          <SocialIcons />
        </div>

        <form
          className="card border border-base-300 bg-base-200 p-6 shadow-xl md:p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-6 text-xl font-bold text-base-content">WhatsApp</h2>
          <label className="form-control mb-4 w-full">
            <span className="label">
              <span className="label-text font-semibold text-base-content">Name</span>
            </span>
            <input
              type="text"
              className="input input-bordered w-full border-base-300 bg-base-300/40 text-base-content"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </label>
          <label className="form-control mb-4 w-full">
            <span className="label">
              <span className="label-text font-semibold text-base-content">Phone</span>
            </span>
            <input
              type="tel"
              className="input input-bordered w-full border-base-300 bg-base-300/40 text-base-content"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
          </label>
          <label className="form-control mb-4 w-full">
            <span className="label">
              <span className="label-text font-semibold text-base-content">Interest</span>
            </span>
            <select
              className="select select-bordered w-full border-base-300 bg-base-300/40 text-base-content"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              {interests.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control mb-6 w-full">
            <span className="label">
              <span className="label-text font-semibold text-base-content">Message</span>
            </span>
            <textarea
              className="textarea textarea-bordered min-h-28 w-full border-base-300 bg-base-300/40 text-base-content"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </label>
          <button
            type="submit"
            className="btn w-full border-0 bg-[#128c7e] text-white hover:bg-[#0f7569]"
          >
            WhatsApp
          </button>
        </form>
      </div>
    </>
  )
}
