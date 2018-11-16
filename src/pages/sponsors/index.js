import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { isValidUrl, getCloudinaryImage } from '../../utils'
import './sponsors.css'

const getImageUrl = companyName => {
  return isValidUrl(companyName) ? companyName : getCloudinaryImage(`2018Sponsors/${companyName}`)
}

const SponsorsPage = ({ data }) => {
  // const grabTieredSponsors = (tier) => {
  // 	const sponsorsArray = data.allSponsorsDataJson.edges.find(data => data.node.title === tier);
  // 	if(sponsorsArray.node.items.length > 0) {
  // 		return sponsorsArray.node.items.map((i,index) => (
  // 			<div className={`col-md-6 col-lg-3 sponsorCard} ${tier === 'gold' ? 'col-lg-4' : 'col-lg-2'}`}>
  // 				<div className="card border-0 transform-on-hover cardImgContainer">
  // 					<a className="lightbox" href={i.url} target="_blank">
  // 						<img style={`{width: tier === 'gold' ? '100%' : '75%'},${mobileLogo}]`} src={getImageUrl(i.image)} alt={`${i.name}`} className="card-img-top" />
  // 					</a>
  // 				</div>
  // 			</div>
  // 		));
  // 	}
  // }

  return (
    <Layout
      title="Sponsors"
      titleColor={'#ffffff'}
      background={
        'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0471f46a1cda51342fdecf9a8c42349f&auto=format&fit=crop&w=1852&q=80'
      }>
      {/* <div className="gallery-block">
				<div className="container">
					<div className="headingContainer">
							<h2 className="sponsorsLevel">Gold</h2>
					</div>
					<div className="row rowStyling" >
							{grabTieredSponsors('gold')}
					</div>
				</div> 
				<div className="container">
					<div className="headingContainer">
							<h2 className="sponsorsLevel">Silver</h2>
					</div>
					<div className="row rowStyling">
							{grabTieredSponsors('silver')}
					</div>
				</div> 
			</div> */}
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
