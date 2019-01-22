import * as React from 'react'
import { Link } from 'gatsby'
import { getCloudinaryImage } from '../utils'

const navLinks = [
  {
    href: '/code-of-conduct',
    label: 'Code of Conduct'
  },
  {
    href: '/meetups',
    label: 'Meetups'
  },
  {
    href: '/contact',
    label: 'Contact Us'
  },
  {
    href: '/sponsors',
    label: 'Sponsors'
  },
  {
    href: '/job-listings',
    label: 'Job Listings'
  },
  {
    href: '/speaking',
    label: 'Speak at an Event'
  }
]

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'nav-link active' : 'nav-link'
      }
    }}
  />
)

export default () => (
  <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">
      <img className="mr-2" src={getCloudinaryImage('brand/logo-square')} width="30" height="30" alt="ChicagoJS" />
      ChicagoJS
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        {navLinks.map(link => (
          <li key={link.href} className="nav-item">
            <NavLink to={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)
