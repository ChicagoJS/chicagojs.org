import React from 'react'
import { Helmet } from "react-helmet"
import styles from "../styles/sponsors.module.css"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'


const testData = [
  {
    title: "gold sponsors",
    items: [
        { name: 'one' },
        { name: 'two' }
    ]
  },
  {
    title: "sliver sponsors",
    items: [
        { name: 'one' },
        { name: 'two' }
    ]
  }
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

  grabGoldSponsors = () => {
   let goldSponsorsArray = testData.filter(data => data.title === 'gold sponsors');
   console.log(goldSponsorsArray[0].items);
   return goldSponsorsArray[0].items.map((i,index) => {
    <div class="col-md-6 col-lg-4">
        <div class="card border-0 transform-on-hover">
            <a class="lightbox" href="https://www.amazon.com/" target="_blank">
                {/* <img src="images/amazon.jpg" alt="Card Image" class="card-img-top" /> */}
            </a>
            <div class="card-body gold">
                <h6><a href="#">{`${i.name}`}</a></h6>
            </div>
        </div>
    </div>
   });
  }

  grabSliverSponsors = () => {
    let sliverSponsorsArray = testData.filter(data => data.title === 'sliver sponsors');
    console.log(sliverSponsorsArray[0].items);
    return sliverSponsorsArray[0].items.map((i,index) => {
      <div class="col-md-6 col-lg-4">
          <div class="card border-0 transform-on-hover">
              <a class="lightbox" href="https://www.amazon.com/" target="_blank">
                  {/* <img src="images/amazon.jpg" alt="Card Image" class="card-img-top" /> */}
              </a>
              <div class="card-body sliver">
                  <h6><a href="#">{`${i.name}`}</a></h6>
              </div>
          </div>
      </div>
     });
   }

   grabBronzeSponsors = () => {
    let bronzeSponsorsArray = testData.filter(data => data.title === 'bronze sponsors');
    console.log(bronzeSponsorsArray[0].items);
    return goldSponsorsArray[0].items.map((i,index) => {
      <div class="col-md-6 col-lg-4">
          <div class="card border-0 transform-on-hover">
              <a class="lightbox" href="https://www.amazon.com/" target="_blank">
                  {/* <img src="images/amazon.jpg" alt="Card Image" class="card-img-top" /> */}
              </a>
              <div class="card-body bronze">
                  <h6><a href="#">{`${i.name}`}</a></h6>
              </div>
          </div>
      </div>
     });
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
        <div>
          {/* <div className="container">
            <div className={styles.headingContainer}>
                <h2 className={styles.sponsorsLevel}>Platinum</h2>
            </div>
          </div> */}
          <div className="container">
            <div className={styles.headingContainer}>
                <h2 className={styles.sponsorsLevel}>Gold</h2>
            </div>
            <div className={"row"} >

            </div>
          </div> 
          <div className="container">
            <div className={styles.headingContainer}>
                <h2 className={styles.sponsorsLevel}>Sliver</h2>
            </div>
            <div className="row" >
              
            </div>
          </div> 
          <div className="container">
            <div className={styles.headingContainer}>
                <h2 className={styles.sponsorsLevel}>Bronze</h2>
            </div>
            <div className="row">
              
            </div>
          </div>  
        </div>
      </div>
    )
  }
}
