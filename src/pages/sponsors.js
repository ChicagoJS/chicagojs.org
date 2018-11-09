import React from 'react'
import { Helmet } from "react-helmet"
import styles from "../styles/sponsors.module.css"
import PropTypes from 'prop-types' // do we even need this because we don't have any props on this page?
import { graphql } from 'gatsby'


const testData = [
	{
		title: "platinum",
		items: [
			{ 
				name: 'one',
				image: 'accenture'
			},
			{ 
				name: 'two',
				image: 'carsdotcom'
			},
			{ 
				name: 'three',
				image: 'https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5ff5b74973558418041d226029f60&auto=format&fit=crop&w=500&q=60'
			},
			{ 
				name: 'four',
				image: 'https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5ff5b74973558418041d226029f60&auto=format&fit=crop&w=500&q=60'
			},
		]
	  },
	  {
		title: "gold",
		items: [
			{ 
				name: 'one',
				image: 'https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5ff5b74973558418041d226029f60&auto=format&fit=crop&w=500&q=60'
			},
			{ 
				name: 'two',
				image: 'https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5ff5b74973558418041d226029f60&auto=format&fit=crop&w=500&q=60'
			},
			{ 
				name: 'three',
				image: 'https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5ff5b74973558418041d226029f60&auto=format&fit=crop&w=500&q=60'
			},
		]
	  },
	  {
		title: "sliver",
		items: [
			{ 
				name: 'one',
				image: 'https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5ff5b74973558418041d226029f60&auto=format&fit=crop&w=500&q=60'
			},
			{ 
				name: 'two',
				image: 'https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5ff5b74973558418041d226029f60&auto=format&fit=crop&w=500&q=60'
			}
		]
	  },
	  {
		title: "bronze",
		items: [
			{ 
				name: 'one',
				image: 'https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5ff5b74973558418041d226029f60&auto=format&fit=crop&w=500&q=60'
			}
		]
	  },
]
const SponsorsPage = ( {data} ) => {
	
	function getImageUrl(companyName) {
		const URLRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/ ;
		return URLRegex.test(companyName) ? companyName : 'https://res.cloudinary.com/chicagojs/image/upload/2018Sponsors/' + companyName;
	}

	 function grabTieredSponsors(tier) {
		const sponsorsArray = testData.find(data => data.title === tier);
		if(sponsorsArray.items.length > 0) {
			return sponsorsArray.items.map((i,index) => (
				<div className={`col-md-6 col-lg-4 ${styles.sponsorCard}`}>
					<div className="card border-0 transform-on-hover">
						<a className="lightbox" href="https://www.amazon.com/" target="_blank"> {/*swap amazon url for company url at one point*/}
							<img src={getImageUrl(i.image)} alt="Card Image" className="card-img-top" />
						</a>
						<div className={`${styles.cardBody} ${styles[tier]}`}>
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
										A Small Intro, maybe for thanking the sponsors... This text should be centered... Let's see if it worked!
									</p>
							</div>
					</div>
			</div>
			<div className={`gallery-block `}>
				<div className="container">
					<div className={styles.headingContainer}>
							<h2 className={styles.sponsorsLevel}>Platinum</h2>
					</div>
					<div className={"row"} >
							{grabTieredSponsors('platinum')}
					</div>
				</div>
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
							<h2 className={styles.sponsorsLevel}>Sliver</h2>
					</div>
					<div className="row" >
							{grabTieredSponsors('sliver')}
					</div>
				</div> 
				<div className="container">
					<div className={styles.headingContainer}>
							<h2 className={styles.sponsorsLevel}>Bronze</h2>
					</div>
					<div className="row">
							{grabTieredSponsors('bronze')}
					</div>
				</div>  
			</div>
		</div>
	)
}

export default SponsorsPage;