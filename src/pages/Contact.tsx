import { useState, type FormEvent } from 'react'
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
      `Lead from ${site.name} website`,
      `Name: ${name || '(not provided)'}`,
      `Phone: ${phone || '(not provided)'}`,
      `Interest: ${interest}`,
      message.trim() ? `Message: ${message.trim()}` : '',
    ].filter(Boolean)
    const url = whatsappUrl(lines.join('\n'))
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-base-content md:text-4xl">
          We reply fast—especially on WhatsApp
        </h1>
        <p className="mb-6 text-lg text-base-content/70">
          Use the form below to open a pre-filled WhatsApp chat with our team. You can also call,
          email, or visit during business hours.
        </p>
        <div className="space-y-2 text-base-content/80">
          <p>
            <strong className="text-base-content">Phone:</strong>{' '}
            <a href={`tel:${site.phoneTel}`} className="link link-primary font-medium">
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            <strong className="text-base-content">Email:</strong>{' '}
            <a href={`mailto:${site.email}`} className="link link-primary font-medium">
              {site.email}
            </a>
          </p>
          <p>
            <strong className="text-base-content">Address:</strong> {site.addressLines.join(', ')}
          </p>
          <p>
            <strong className="text-base-content">Hours:</strong> {site.hours}
          </p>
        </div>
        <p className="mb-2 mt-8 text-xs font-bold uppercase tracking-wider text-base-content/50">
          Social
        </p>
        <SocialIcons />
      </div>

      <form
        className="card border border-base-300 bg-base-100 p-6 shadow-xl md:p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-1 text-xl font-bold text-base-content">Send a WhatsApp lead</h2>
        <p className="mb-6 text-sm text-base-content/60">
          Submitting opens WhatsApp with your details—no server required.
        </p>
        <label className="form-control mb-4 w-full">
          <span className="label">
            <span className="label-text font-semibold text-base-content">Name</span>
          </span>
          <input
            type="text"
            className="input input-bordered w-full bg-base-100"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder="Your name"
          />
        </label>
        <label className="form-control mb-4 w-full">
          <span className="label">
            <span className="label-text font-semibold text-base-content">Phone</span>
          </span>
          <input
            type="tel"
            className="input input-bordered w-full bg-base-100"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            placeholder="Best number to reach you"
          />
        </label>
        <label className="form-control mb-4 w-full">
          <span className="label">
            <span className="label-text font-semibold text-base-content">I am interested in</span>
          </span>
          <select
            className="select select-bordered w-full bg-base-100"
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
            <span className="label-text font-semibold text-base-content">Message (optional)</span>
          </span>
          <textarea
            className="textarea textarea-bordered min-h-28 w-full bg-base-100"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Model, budget, timeline, or questions"
          />
        </label>
        <button
          type="submit"
          className="btn w-full border-0 bg-[#128c7e] text-white hover:bg-[#0f7569]"
        >
          Continue in WhatsApp
        </button>
      </form>
    </div>
  )
}
