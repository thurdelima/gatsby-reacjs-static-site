import React from 'react';
import PropTypes from 'prop-types';
import {graphql, Link } from 'gatsby';
import Img from 'gatsby-image';


import Layout from '../components/layout';
import SEO from "../components/seo"
import Card from "../components/card/card";

export const queryImage = graphql`
query {
  project1: file(relativePath: { eq: "thur.jpeg" }) {
    childImageSharp {
     
      fixed(width: 128, height: 128, quality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;


const Projects = ({data}) => (
    <Layout>
        <SEO title="Projects" />
    
      <section className="section is-size-4-desktop is-size-5-touch">
        <h1 className="title has-text-centered">Projects</h1>
        <hr />
        
        <p className="has-text-centered">
            Some of my projects, see more on my
            {'.'}
            <a href="https://github.com/thurdelima">
                Github
            </a>
        </p>

        <div className="columns is-centered">
            <div className="column is-half">
                <Card
                    title="Gatsby Course"
                    subtitle="@johnsmith"
                    tags={['Gatsby','React']}
                    image={<Img  fixed={data.project1.childImageSharp.fixed} />}
                />
                
            </div>
        </div>
   
        
       
        <p>
          Check out my {''}
          <Link to="/blog">blog</Link>
        </p>
      </section>
     
      
    </Layout>
)

Projects.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Projects;