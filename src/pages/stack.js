import React from 'react';
import PropTypes from 'prop-types';
import {graphql, Link } from 'gatsby';
import { Helmet } from "react-helmet"
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


const Stack = () => (
    <Layout>
        <SEO title="Stack" />
        <Helmet>

        <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script>
        </Helmet>
    
      <section className="section is-size-4-desktop is-size-5-touch">
        <h1 className="title has-text-centered">Stack</h1>
        <hr />
        
        <p className="has-text-centered">
            Follow me on
            {' '}
            <a href="https://github.com/thurdelima">
                Github
            </a>
            {' '}
            or
            {' '}
            <a href="https://github.com/thurdelima">
                Github
            </a>
            {' '}
            to read more topics of tech
        </p>

        <div className="columns is-centered">
            <div className="column is-half">
               

            <a frameborder="0" data-theme="light" data-layers="1,2,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/baa5dbdf0329e45ac41cea5fba4645">
                stackshare
               </a>
              
            </div>
        </div>
   
        
      </section>
     
      
    </Layout>
)

Stack.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Stack;