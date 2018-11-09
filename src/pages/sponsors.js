import React from 'react'
import { Helmet } from "react-helmet"
import styles from "../styles/sponsors.module.css"
import { graphql } from 'gatsby'

const SponsorsPage = ( {data} ) => {

	const getImageUrl = (companyName) => {
		const URLRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/ ;
		return URLRegex.test(companyName) ? companyName : 'https://res.cloudinary.com/chicagojs/image/upload/2018Sponsors/' + companyName;
	}

	const grabTieredSponsors = (tier) => {
		const sponsorsArray = data.allSponsorsDataJson.edges.find(data => data.node.title === tier);
		if(sponsorsArray.node.items.length > 0) {
			return sponsorsArray.node.items.map((i,index) => (
				<div className={`col-md-6 col-lg-4 ${styles.sponsorCard}`}>
					<div className="card border-0 transform-on-hover">
						<a className="lightbox" href="https://www.amazon.com/" target="_blank"> {/*swap amazon url for company url at one point*/}
							<img style={{height:100 ,width:300 }} src={getImageUrl(i.image)} alt="Card Image" className="card-img-top" />
						</a>
						<div className={`${styles.cardBody}`}>
							<h6 className={styles.sponsorName}>{`${i.name}`}</h6>
						</div>
					</div>
				</div>
			));
		}
	}

	return (
		<div className="page-container">
			<Helmet>
					<title>Sponsors</title>
					<meta name="description" content="Sponsors for ChicagoJS" />
					<meta name="keywords" content="Sponsors, ChicagoJS, Javascript,Js" />
					<meta name="author" content="Sebastian Kurpiel" />
					{/* Bootstrap style sheet */}
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
					<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet"></link>    
			</Helmet>
			<div className={`jumbotron jumbotron-fluid ${styles.jumbotron}`}>
					<div className="container">
							<div className="row justify-content-center">
									<h1 className={styles.heading}>Sponsors</h1>
							</div>
					</div>
			</div>
			<div className="container">
					<div className="row text-center">
							<div className="heading">
									<p className={styles.blurb}>
										All at ChicagoJS would like to thank our sponsors for their generosity! Without you guys none of this would
										be possible.
									</p>
							</div>
					</div>
			</div>
			<div className={`gallery-block `}>
				<div className="container">
					<div className={styles.headingContainer}>
							<h2 className={styles.sponsorsLevel}>Gold</h2>
					</div>
					<div className={"row"} >
							{grabTieredSponsors('gold')}
					</div>
				</div> 
				<div className="container">
					<div className={styles.headingContainer}>
							<h2 className={styles.sponsorsLevel}>Silver</h2>
					</div>
					<div className="row" >
							{grabTieredSponsors('silver')}
					</div>
				</div> 
			</div>
		</div>
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
					}
				}
			}
		}
	}
`

export default SponsorsPage;