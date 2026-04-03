import { NavLink, Outlet } from 'react-router-dom'
import { site } from '../config/site'
import { SocialIcons } from './SocialIcons'
import { WhatsAppFloat } from './WhatsAppFloat'

const navClass = ({ isActive }: { isActive: boolean }) =>
  `btn btn-sm font-semibold normal-case ${isActive ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content/80'}`

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-base-100">
      <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 shadow-sm backdrop-blur-md">
        <div className="navbar mx-auto min-h-[4.25rem] max-w-7xl px-4 lg:px-6">
          <div className="navbar-start flex-1 gap-2">
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-square btn-ghost border border-base-300"
                aria-label="Open menu"
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
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[60] mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
              >
                <li>
                  <NavLink to="/" end>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/models">Models</NavLink>
                </li>
                <li>
                  <NavLink to="/service-parts">Service &amp; parts</NavLink>
                </li>
                <li>
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <NavLink
              to="/"
              className="flex items-center gap-3 text-left no-underline hover:opacity-90"
              end
            >
              <span
                className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-primary to-success shadow-inner"
                aria-hidden
              />
              <span>
                <span className="block text-lg font-bold leading-tight tracking-tight text-base-content">
                  {site.name}
                </span>
                <span className="block text-xs font-medium text-base-content/60">
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
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 lg:px-6 lg:py-10">
        <Outlet />
      </main>

      <footer className="border-t border-neutral/20 bg-neutral text-neutral-content">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between lg:px-6">
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold text-neutral-content">{site.name}</p>
            <p className="text-neutral-content/70">{site.hours}</p>
            <p className="text-neutral-content/70">
              <a href={`tel:${site.phoneTel}`} className="link link-hover text-inherit">
                {site.phoneDisplay}
              </a>
              <span className="text-neutral-content/40"> · </span>
              <a href={`mailto:${site.email}`} className="link link-hover text-inherit">
                {site.email}
              </a>
            </p>
            <p className="text-neutral-content/70">
              {site.addressLines.join(' · ')}
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-content/50">
              Follow us
            </p>
            <SocialIcons variant="footer" />
          </div>
        </div>
        <div className="border-t border-neutral-content/10 py-4 text-center text-xs text-neutral-content/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  )
}
