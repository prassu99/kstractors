import { site, whatsappUrl } from '../config/site'
import { WhatsAppIcon } from './WhatsAppIcon'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(site.whatsappPrefillDefault)}
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#128c7e] text-white shadow-lg shadow-[#128c7e]/40 transition hover:scale-105 hover:bg-[#0f7569] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
