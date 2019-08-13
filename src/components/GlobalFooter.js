import * as React from 'react'
import './GlobalFooter.css'

import svgMail from '../images/mail.svg'
import svgGithub from '../images/github.svg'
import svgTwitter from '../images/twitter.svg'
import svgSlack from '../images/slack.svg'
import svgLinkedIn from '../images/linkedin.svg'
import svgFacebook from '../images/facebook.svg'

import EmailForm from './EmailForm.js'

const FOOTER_LINKS = [
  {
    title: 'Mail',
    url: 'mailto:info@chicagojs.org',
    image: svgMail
  },
  {
    title: 'Github',
    url: 'https://github.com/chicagojs/chicagojs.org',
    image: svgGithub
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/chicago_js',
    image: svgTwitter
  },
  {
    title: 'Slack',
    url: 'https://chicagojs.slack.com',
    image: svgSlack
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/groups/12147253',
    image: svgLinkedIn
  },
  {
    title: 'Facebook',
    url: 'https://facebook.com/groups/chicagojs',
    image: svgFacebook
  }
]

export default () => (
  <footer className="GlobalFooter">
    <div className="text-center footer-left">
      <span className="list-inline-item mb-2">ChicagoJS {new Date().getFullYear()}</span>
      <ul className="list-unstyled list-inline mp-0">
        {FOOTER_LINKS.map(link => (
          <li className="list-inline-item" key={link.title}>
            <a rel="no-follow" className="m-1" href={link.url}>
              <img width="24" height="24" src={link.image} title={`ChicagoJS on ${link.title}`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="text-center footer-right">
      <EmailForm />
    </div>
  </footer>
)
