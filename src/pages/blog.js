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


const Blog = ({data}) => (
    <Layout>
        <SEO title="Blog" />
    
      <section className="section is-size-4-desktop is-size-5-touch">
        <h1 className="title has-text-centered">Blog</h1>
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
                <Card
                    title="Gatsby Course"
                    subtitle="@johnsmith"
                    tags={['Gatsby','React']}
                    image={<Img  fixed={data.project1.childImageSharp.fixed} />}
                />
                
            </div>
        </div>
   
        
      </section>
     
      
    </Layout>
)

Blog.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Blog;