/** Replace with your real business details */
export const site = {
  name: 'Mahindra Tractors - KS Tractors and Implements',
  /** Facebook page title @see https://www.facebook.com/profile.php?id=61575473500655 */
  facebookPageTitle: 'Mahindra Tractors - KS Tractors and Implements | Jangaon',
  tagline: 'Jangaon\'s Trusted Tractor Dealership',
  /** Same number as WhatsApp Business */
  phoneDisplay: '+91 89777 20181',
  phoneTel: '+918977720181',
  /** Digits only, country code, no + — used for wa.me */
  whatsappE164: '918977720181',
  /** Prefilled text when opening WhatsApp from site buttons (edit once, used everywhere). */
  whatsappPrefillDefault:
    'Hi, I’m messaging from your website — I’d like to speak with KS Tractors Jangaon about Mahindra tractors / service / parts.',
  email: 'sales@kstractors.example',
  addressLines: [
    '3-77/1, Suryapet Rd, near Bharat Petrol Pump',
    'Jangaon, Telangana 506167, India',
  ],
  hours: 'Mon–Sat 8:00–18:00 · Sun closed',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61575473500655',
    instagram: 'https://www.instagram.com/kstractors_mahindra/'
  },
} as const

/** Opens a chat with the business WhatsApp number. Omit or pass empty string for a blank compose box. */
export function whatsappUrl(prefill?: string): string {
  const base = `https://wa.me/${site.whatsappE164}`
  const t = prefill?.trim()
  if (!t) return base
  return `${base}?text=${encodeURIComponent(t)}`
}
