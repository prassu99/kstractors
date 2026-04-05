import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { mahindraIndia } from '../config/mahindra'
import { site } from '../config/site'
import { BreadcrumbJsonLd } from './BreadcrumbJsonLd'
import { JsonLd } from './JsonLd'
import { SocialIcons } from './SocialIcons'
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
        <div className="navbar mx-auto min-h-[4.25rem] max-w-7xl px-4 lg:px-6">
          <div className="navbar-start flex-1 gap-2">
            <div
              className="relative lg:hidden"
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
              className="flex min-w-0 items-center gap-3 text-left no-underline hover:opacity-95"
              end
            >
              <img
                src={mahindraIndia.logoWebp}
                alt=""
                width={40}
                height={40}
                className="h-10 w-auto shrink-0 object-contain brightness-110"
              />
              <span>
                <span className="block text-base font-bold leading-tight tracking-tight text-white sm:text-lg">
                  {site.name}
                </span>
                <span className="block text-xs font-medium text-neutral-content/75">
                    {site.tagline}
                </span>
              </span>
            </NavLink>
          </div>
          <nav
            className="navbar-end hidden flex-none gap-1 lg:flex"
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
