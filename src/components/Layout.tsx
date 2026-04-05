import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { mahindraIndia } from '../config/mahindra'
import { site } from '../config/site'
import { BreadcrumbJsonLd } from './BreadcrumbJsonLd'
import { JsonLd } from './JsonLd'
import { SocialIcons } from './SocialIcons'
import { WhatsAppCta } from './WhatsAppCta'
import { WhatsAppFloat } from './WhatsAppFloat'

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'btn btn-sm btn-primary font-semibold normal-case text-primary-content'
    : 'btn btn-sm border-0 bg-transparent font-semibold normal-case text-neutral-content/90 hover:bg-white/10 hover:text-white'

const mobileItemClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-lg px-3 py-2 text-sm font-medium no-underline ${
    isActive ? 'bg-primary text-primary-content' : 'text-neutral-content hover:bg-white/10'
  }`

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-base-100">
      <JsonLd />
      <BreadcrumbJsonLd />
      <a
        href={mahindraIndia.website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-wrap items-center justify-center gap-2 border-b border-white/10 bg-black px-3 py-2.5 text-center text-xs text-neutral-content no-underline transition hover:bg-neutral-950 sm:text-sm"
      >
        <img
          src={mahindraIndia.logoWebp}
          alt=""
          width={80}
          height={24}
          className="h-5 w-auto opacity-100 brightness-110"
        />
        <span>
          India&apos;s No.1 tractor brand — explore models, prices &amp; tech on{' '}
          <strong className="font-semibold text-primary">MahindraTractor.com</strong>
        </span>
      </a>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 shadow-lg shadow-black/40 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-0 px-4 py-2 lg:gap-2 lg:px-6 lg:py-2.5">
          <div className="flex min-h-[3.25rem] items-center gap-2 lg:min-h-0">
            <div
              className="relative shrink-0 lg:hidden"
              onMouseEnter={() => setMobileMenuOpen(true)}
              onMouseLeave={() => setMobileMenuOpen(false)}
            >
              <button
                type="button"
                className="btn btn-square btn-ghost border border-white/20 text-neutral-content hover:bg-white/10"
                aria-label="Menu"
                aria-expanded={mobileMenuOpen}
                aria-haspopup="true"
                aria-controls="mobile-nav-menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <ul
                id="mobile-nav-menu"
                role="menu"
                className={`menu menu-sm absolute left-0 top-full z-[60] w-52 rounded-box border border-white/15 bg-[#141414] p-2 pt-3 shadow-2xl ${mobileMenuOpen ? 'block' : 'hidden'}`}
              >
                <li role="none">
                  <NavLink to="/" end role="menuitem" className={mobileItemClass}>
                    Home
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/about" role="menuitem" className={mobileItemClass}>
                    About
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/models" role="menuitem" className={mobileItemClass}>
                    Models
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/service-parts" role="menuitem" className={mobileItemClass}>
                    Service &amp; parts
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/gallery" role="menuitem" className={mobileItemClass}>
                    Gallery
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/contact" role="menuitem" className={mobileItemClass}>
                    Contact
                  </NavLink>
                </li>
                <li role="none">
                  <WhatsAppCta variant="menu" label="WhatsApp" className="mt-1" />
                </li>
                <li role="none">
                  <a
                    href={mahindraIndia.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary no-underline hover:bg-white/10"
                  >
                    Mahindra India ↗
                  </a>
                </li>
              </ul>
            </div>
            <NavLink
              to="/"
              className="flex min-w-0 flex-1 items-center gap-2 text-left no-underline hover:opacity-95 sm:gap-3 lg:w-full lg:min-w-0"
              end
            >
              <img
                src={mahindraIndia.logoWebp}
                alt=""
                width={40}
                height={40}
                className="h-9 w-auto shrink-0 object-contain brightness-110 sm:h-10"
              />
              <span className="min-w-0 flex-1 lg:min-w-0">
                <span className="block max-lg:truncate text-sm font-bold leading-tight tracking-tight text-white sm:text-base lg:whitespace-nowrap lg:text-lg">
                  {site.name}
                </span>
                <span className="line-clamp-1 break-words text-xs font-medium text-neutral-content/75">
                  {site.tagline}
                </span>
              </span>
            </NavLink>
          </div>
          <nav
            className="hidden w-full shrink-0 flex-wrap items-center justify-end gap-1 border-t border-white/10 pt-2 lg:flex"
            aria-label="Main"
          >
            <NavLink to="/" className={navClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/models" className={navClass}>
              Models
            </NavLink>
            <NavLink to="/service-parts" className={navClass}>
              Service &amp; parts
            </NavLink>
            <NavLink to="/gallery" className={navClass}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
            <WhatsAppCta variant="nav" label="WhatsApp" />
            <a
              href={mahindraIndia.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm font-semibold normal-case btn-outline border-primary text-primary hover:border-primary hover:bg-primary hover:text-primary-content"
            >
              Mahindra India ↗
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 lg:px-6 lg:py-10">
        <Outlet />
      </main>

      <section
        className="border-t border-[#128c7e]/30 bg-gradient-to-r from-[#128c7e]/12 via-[#128c7e]/6 to-[#128c7e]/12"
        aria-label="WhatsApp"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <p className="text-center text-sm leading-snug text-base-content/90 sm:text-left">
            <span className="font-semibold text-base-content">Models, prices, service, or parts?</span>{' '}
            <span className="text-base-content/75">Chat with KS Tractors on WhatsApp — we reply during business hours.</span>
          </p>
          <WhatsAppCta variant="strip" label="Chat on WhatsApp" className="w-full sm:w-auto" />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black text-neutral-content">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between lg:px-6">
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold text-white">{site.name}</p>
            <p className="text-neutral-content/75">{site.hours}</p>
            <p className="text-neutral-content/75">
              <a href={`tel:${site.phoneTel}`} className="link link-hover text-inherit">
                {site.phoneDisplay}
              </a>
              <span className="text-neutral-content/40"> · </span>
              <a href={`mailto:${site.email}`} className="link link-hover text-inherit">
                {site.email}
              </a>
            </p>
            <p className="text-neutral-content/75">
              {site.addressLines.join(' · ')}
            </p>
            <p className="pt-3">
              <WhatsAppCta variant="footer" label="WhatsApp us" className="w-full sm:inline-flex sm:w-auto" />
            </p>
            <p className="pt-2 text-neutral-content/60">
              <a
                href={mahindraIndia.website}
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-inherit"
              >
                MahindraTractor.com
              </a>
              <span className="text-neutral-content/40"> · </span>
              <a
                href={mahindraIndia.dealerLocator}
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-inherit"
              >
                Dealer locator
              </a>
              <span className="text-neutral-content/40"> · </span>
              <a
                href={mahindraIndia.enquirePrice}
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-inherit"
              >
                Enquire / prices
              </a>
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-content/50">
              Follow us
            </p>
            <SocialIcons variant="footer" />
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-content/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  )
}
