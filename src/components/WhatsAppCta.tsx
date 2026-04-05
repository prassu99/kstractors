import { site, whatsappUrl } from '../config/site'
import { WhatsAppIcon } from './WhatsAppIcon'

type Variant = 'nav' | 'strip' | 'footer' | 'hero' | 'card' | 'menu'

type Props = {
  variant?: Variant
  className?: string
  label?: string
  /** Overrides default site prefill when opening WhatsApp */
  prefill?: string
}

const variantClass: Record<Variant, string> = {
  nav: 'btn btn-sm gap-1.5 border-0 bg-[#128c7e] px-3 font-semibold normal-case text-white hover:bg-[#0f7569]',
  strip:
    'btn gap-2 border-0 bg-[#128c7e] font-semibold normal-case text-white shadow-md hover:bg-[#0f7569] shrink-0',
  footer: 'btn gap-2 border-0 bg-[#128c7e] font-semibold normal-case text-white hover:bg-[#0f7569]',
  hero: 'btn gap-2 border-0 bg-[#128c7e] font-semibold normal-case text-white hover:bg-[#0f7569]',
  card: 'btn btn-lg w-full flex-nowrap gap-2 border-0 bg-[#128c7e] font-semibold text-white hover:bg-[#0f7569]',
  menu:
    'flex w-full items-center gap-2 rounded-lg border-0 bg-[#128c7e] px-3 py-2.5 text-sm font-semibold text-white no-underline hover:bg-[#0f7569]',
}

const iconSize: Record<Variant, string> = {
  nav: 'h-4 w-4',
  strip: 'h-5 w-5',
  footer: 'h-5 w-5',
  hero: 'h-5 w-5',
  card: 'h-6 w-6',
  menu: 'h-4 w-4',
}

export function WhatsAppCta({
  variant = 'strip',
  className = '',
  label = 'WhatsApp',
  prefill,
}: Props) {
  const message = prefill ?? site.whatsappPrefillDefault
  const base = variantClass[variant]

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`.trim()}
    >
      <WhatsAppIcon className={`${iconSize[variant]} shrink-0`} />
      {label}
    </a>
  )
}
