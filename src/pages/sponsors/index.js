import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { isValidUrl, getCloudinaryImage } from '../../utils'
import './sponsors.css'

const getImageUrl = companyName => {
  return isValidUrl(companyName) ? companyName : getCloudinaryImage(`2018Sponsors/${companyName}`)
}

const SponsorRow = ({ node: { title, items: sponsors } }) => {
  let className = title === 'gold' ? 'col-6 col-md-4' : 'col-4'
  return (
    <div className="container">
      <div className="headingContainer">
        <h2 className="sponsorsLevel">{title}</h2>
      </div>
      <div>
        <div className="row rowStyling">
          {sponsors.map(sponsor => (
            <div className={`col-md-6 col-lg-3 sponsorCard ${title === 'gold' ? 'col-lg-4' : 'col-lg-2'}`}>
              <div className="card border-0 transform-on-hover cardImgContainer">
                <a className="lightbox" href={sponsor.url} target="_blank">
                  <img src={getImageUrl(sponsor.image)} alt={`${sponsor.name}`} className="card-img-top mobileLogo" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SponsorsPage = ({ data }) => {
  let sponsors = data.allSponsorsDataJson.edges
  return (
    <Layout
      title="Sponsors"
      titleColor={'#ffffff'}
      background={
        'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0471f46a1cda51342fdecf9a8c42349f&auto=format&fit=crop&w=1852&q=80'
      }>
      <div className="gallery-block">
        {sponsors.map(level => (
          <SponsorRow {...level} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SponsorsPageQuery {
    allSponsorsDataJson {
      edges {
        node {
          title
          items {
            name
            image
            url
          }
        }
      }
    }
  }
`

export default SponsorsPage
