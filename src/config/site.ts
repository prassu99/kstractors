/** Replace with your real business details */
export const site = {
  name: 'Mahindra Tractors - KS Tractors and Implements',
  /** Facebook page title @see https://www.facebook.com/profile.php?id=61575473500655 */
  facebookPageTitle: 'Mahindra Tractors - KS Tractors and Implements | Jangaon',
  tagline: 'Jangaon\'s Trusted Tractor Dealership',
  phoneDisplay: '',
  phoneTel: '',
  /** E.164 without + — used for wa.me */
  whatsappE164: '',
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

export function whatsappUrl(text: string): string {
  const encoded = encodeURIComponent(text.trim())
  return `https://wa.me/${site.whatsappE164}?text=${encoded}`
}
