import React from 'react';
import PropTypes from 'prop-types';


const Card = ({title, subtitle, link, tags, image}) => (
    
        <div className="card">
              
              <div className="card-content">
                  <div className="media">
                      <div className="media-left">
                        {image}
                      </div>

                      <div className="media-content">
                          <p className="title is-size-5-desktop is-size-6-touch">
                              {title}
                          </p>
                          <p className="subtitle is-size-5-desktop is-size-6-touch">
                              {subtitle}
                            
                          </p>
                       
                       <div className="tags">
                           {tags.map((tag) => {
                               return (
                                <span className="tag" key={tag}>{tag}</span>
                               )
                               
                           })}

                           
                          
                          
                       </div>
                      </div> 
              
                  </div>

                 
              </div>
          </div>
   
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.node
}

Card.defaultProps = {
    link: null,
    tags: [],
    image: null,
};

export default Card;