import React from 'react'
import Helmet from 'react-helmet'
import MailingListForm from './MailingListForm'
import Navbar from './Navbar'
import GlobalFooter from './GlobalFooter'
import './Layout.css'

export default ({ children, title, hideNavbar = false, hideFooter = false, className = '' }) => (
  <React.Fragment>
    <Helmet titleTemplate="%s | ChicagoJS" defaultTitle="ChicagoJS">
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />
      <title>{title}</title>
    </Helmet>
    {!hideNavbar && <Navbar />}
    <div>{children}</div>
    {!hideFooter && <GlobalFooter />}
    <MailingListForm />
  </React.Fragment>
)
