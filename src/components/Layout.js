import React from 'react'
import Helmet from 'react-helmet'
import favicon32 from '../images/favicon/favicon-32x32.png'
import favicon16 from '../images/favicon/favicon-16x16.png'
import faviconICO from '../images/favicon/favicon.ico'
import MailingListForm from './MailingListForm'
import Navbar from './Navbar'
import PageHeader from './PageHeader'
import GlobalFooter from './GlobalFooter'
import './Layout.css'

export default ({
  children,
  title,
  titleColor,
  background,
  hideNavbar = false,
  hideFooter = false,
  hidePageHeader = false,
  className = ''
}) => (
  <React.Fragment>
    <Helmet titleTemplate="%s | ChicagoJS" defaultTitle="ChicagoJS">
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
      <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
      <link rel="shortcut icon" type="image/x-icon" href={faviconICO} />
      <meta name="description" content="Uniting Chicago's JavaScript Community" />
      <title>{title}</title>
    </Helmet>
    {!hideNavbar && <Navbar />}
    {!hidePageHeader && <PageHeader title={title} titleColor={titleColor} background={background} />}
    <div style={{ marginBottom: !hidePageHeader ? '5rem' : '0rem', paddingBottom: 0 }}>{children}</div>
    {!hideFooter && <GlobalFooter />}
  </React.Fragment>
)
