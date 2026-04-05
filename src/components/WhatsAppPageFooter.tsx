import { WhatsAppCta } from './WhatsAppCta'

/** In-page CTA strip — use at the bottom of content pages */
export function WhatsAppPageFooter() {
  return (
    <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-[#128c7e]/25 bg-[#128c7e]/5 px-4 py-6 text-center sm:px-6">
      <p className="max-w-md text-sm leading-relaxed text-base-content/80">
        Questions about stock, prices, or booking a visit? Message our Jangaon team on WhatsApp.
      </p>
      <WhatsAppCta variant="hero" label="Chat on WhatsApp" />
    </div>
  )
}
