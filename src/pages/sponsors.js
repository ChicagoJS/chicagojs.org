import React from 'react'
import { Helmet } from "react-helmet"
import styles from "../styles/sponsors.module.css"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'


const testData = [
	{
		title: "platinum sponsors",
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
			{ 
				name: 'four',
				image: 'https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5ff5b74973558418041d226029f60&auto=format&fit=crop&w=500&q=60'
			},
		]
	  },
	  {
		title: "gold sponsors",
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
		title: "sliver sponsors",
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
		title: "bronze sponsors",
		items: [
			{ 
				name: 'one',
				image: 'https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d5ff5b74973558418041d226029f60&auto=format&fit=crop&w=500&q=60'
			}
		]
	  },
]
export default class sponsors extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      sponsorsData: null
    }
  }

  componentDidMount() {
    this.setState({sponsorsData: testData});
  }

  grabPlatinumSponsors = () => {
	let platinumSponsorsArray = testData.filter(data => data.title === 'platinum sponsors');
	if( platinumSponsorsArray[0].items.length !== 0 ) {
		return platinumSponsorsArray[0].items.map((i,index) => (
			<div className={`col-md-6 col-lg-4 ${styles.sponsorCard}`}>
				<div className="card border-0 transform-on-hover">
					<a className="lightbox" href="https://www.amazon.com/" target="_blank">
						<img src={i.image} alt="Card Image" className="card-img-top" />
					</a>
					<div className={`${styles.cardBody} ${styles.platinum}`}>
						<h6 className={styles.sponsorName}>{`${i.name}`}</h6>
					</div>
				</div>
			</div>
		));
		}
	}

  grabGoldSponsors = () => {
   let goldSponsorsArray = testData.filter(data => data.title === 'gold sponsors');
   if( goldSponsorsArray[0].items.length !== 0 ) {
	return goldSponsorsArray[0].items.map((i,index) => (
		<div className={`col-md-6 col-lg-4 ${styles.sponsorCard}`}>
			<div className="card border-0 transform-on-hover">
				<a className="lightbox" href="https://www.amazon.com/" target="_blank">
					<img src={i.image} alt="Card Image" className="card-img-top" />
				</a>
				<div className={`${styles.cardBody} ${styles.gold}`}>
					<h6 className={styles.sponsorName}>{`${i.name}`}</h6>
				</div>
			</div>
		</div>
	));
   }
  }

  grabSliverSponsors = () => {
	let sliverSponsorsArray = testData.filter(data => data.title === 'sliver sponsors');
	if( sliverSponsorsArray[0].items.length !== 0 ) {
		return sliverSponsorsArray[0].items.map((i,index) => (
			<div className={`col-md-6 col-lg-4 ${styles.sponsorCard}`}>
				<div className="card border-0 transform-on-hover">
					<a className="lightbox" href="https://www.amazon.com/" target="_blank">
						<img src={i.image} alt="Card Image" className="card-img-top" />
					</a>
					<div className={`${styles.cardBody} ${styles.sliver}`}>
						<h6 className={styles.sponsorName}>{`${i.name}`}</h6>
					</div>
				</div>
			</div>
		));
	}
   }
   grabBronzeSponsors = () => {
	let bronzeSponsorsArray = testData.filter(data => data.title === 'bronze sponsors');
	if( bronzeSponsorsArray[0].items.length !== 0 ) {
		return bronzeSponsorsArray[0].items.map((i,index) => (
			<div className={`col-md-6 col-lg-4 ${styles.sponsorCard}`}>
				<div className="card border-0 transform-on-hover">
					<a className="lightbox" href="https://www.amazon.com/" target="_blank">
						<img src={i.image} alt="Card Image" className="card-img-top" />
					</a>
					<div className={`${styles.cardBody} ${styles.bronze}`}>
						<h6 className={styles.sponsorName}>{`${i.name}`}</h6>
					</div>
				</div>
			</div>
		));
	}
   }

  render() {
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
				{this.grabPlatinumSponsors()}
			</div>
          </div>  
          <div className="container">
            <div className={styles.headingContainer}>
                <h2 className={styles.sponsorsLevel}>Gold</h2>
            </div>
            <div className={"row"} >
                {this.grabGoldSponsors()}
            </div>
          </div> 
          <div className="container">
            <div className={styles.headingContainer}>
                <h2 className={styles.sponsorsLevel}>Sliver</h2>
            </div>
            <div className="row" >
				{this.grabSliverSponsors()}
            </div>
          </div> 
          <div className="container">
            <div className={styles.headingContainer}>
                <h2 className={styles.sponsorsLevel}>Bronze</h2>
            </div>
            <div className="row">
				{this.grabBronzeSponsors()}
            </div>
          </div>  
        </div>
      </div>
    )
  }
}
