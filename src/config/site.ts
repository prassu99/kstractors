/** Replace with your real business details */
export const site = {
  name: 'KS Tractors',
  tagline: 'Authorized sales, service & genuine parts',
  phoneDisplay: '(555) 123-4567',
  phoneTel: '+15551234567',
  /** E.164 without + — used for wa.me */
  whatsappE164: '15551234567',
  email: 'sales@kstractors.example',
  addressLines: ['123 Farm Road', 'Agricultural Valley, ST 12345'],
  hours: 'Mon–Sat 8:00–18:00 · Sun closed',
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    x: 'https://x.com/',
    youtube: 'https://www.youtube.com/',
  },
} as const

export function whatsappUrl(text: string): string {
  const encoded = encodeURIComponent(text.trim())
  return `https://wa.me/${site.whatsappE164}?text=${encoded}`
}
