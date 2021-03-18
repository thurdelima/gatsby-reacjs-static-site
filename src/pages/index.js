import * as React from "react"
import { Link, StaticQuery,  graphql } from "gatsby"

import Img from 'gatsby-image';
import Helmet from 'react-helmet'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import
 {
   faGithub,
   faTwitter,
   faMedium,
   faLinkedin
  } 
from '@fortawesome/free-brands-svg-icons'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
    
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"  crossorigin="anonymous"/>
    </Helmet>
    
    <figure className="photo image is-128x128">
      {/* <img className="is-rounded" src={photo} alt="Arthur Lima" /> */}
      <StaticQuery query={graphql`
        query {
          file(relativePath: { eq: "thur.jpeg" }) {
            childImageSharp {
             
              fixed(width: 128, height: 128, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          fixed={data.file.childImageSharp.fixed}
          imgStyle={{borderRadius: '100%'}}
          alt="Arthur Lima"
        />
      )}
      
      
      />
    </figure> 
      

      <h1 className="title has-text-centered">Arthur Lima</h1>
      <h2 className="subtitle has-text-centered">Web/Mobile developer</h2>
      <div className="has-text-centered">
        <a href="https://github.com/thurdelima" aria-label="github">
            <span className="icon is-large">
              {/* <i className="fab fa-2x fa-github" /> */}
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
          <a href="https://github.com/thurdelima" aria-label="github">
            <span className="icon is-large">
              {/* <i className="fab fa-2x fa-twitter" /> */}
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
          <a href="https://github.com/thurdelima" aria-label="github">
            <span className="icon is-large">
              {/* <i className="fab fa-2x fa-medium" /> */}
              <FontAwesomeIcon icon={faMedium} />
            </span>
          </a>
          <a href="https://github.com/thurdelima" aria-label="github">
            <span className="icon is-large">
              {/* <i className="fab fa-2x fa-linkedin" /> */}
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </a>
     </div>
      
      <section className="section-content is-size-4-desktop is-size-5-touch">
        <h4 className="title">Hello there, I am Arthur <span>👋</span></h4>
        <p>
          It has survived not only five centuries
          , but also the leap into electronic 
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
        </p>
        <br/>
        <p>
          Check out mostly {''}
          <Link to="/projects">projects</Link>
        </p>
      </section>
  </Layout>
)

export default IndexPage
