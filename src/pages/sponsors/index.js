import React from 'react'
import './sponsors.css'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'

const SponsorsPage = ({ data }) => {
  const getImageUrl = companyName => {
    const URLRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
    return URLRegex.test(companyName)
      ? companyName
      : 'https://res.cloudinary.com/chicagojs/image/upload/2018Sponsors/' + companyName
  }

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
    <Layout title="Sponsors">
      <PageHeader title={'Sponsors'} titleColor={'#ffffff'} />
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
			</Layout> */}
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
