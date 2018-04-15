import React from 'react';
import Link from 'gatsby-link';
import '../../../../styles/blog/sections/sidebar-sections/SocialMediaLinks.scss';


const SocialMediaLinks = (props) => {

  return(
    <div className="component-social-media-links">
      <h3> Social Media </h3>
      <div className="row">
        <div className="social-icon col-md-4">
          <a href="#"> fb </a>
        </div>
        <div className="social-icon col-md-4">
          <a href="#">tw</a>
        </div>
        <div className="social-icon col-md-4">
          <a href="#">other</a>
        </div>
      </div>
      <div className="seperator-articles"></div>
    </div>
  );

};
export default SocialMediaLinks;
