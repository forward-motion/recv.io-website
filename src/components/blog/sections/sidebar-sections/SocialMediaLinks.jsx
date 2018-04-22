import React from 'react';
import Link from 'gatsby-link';
import '../../../../styles/blog/sections/sidebar-sections/SocialMediaLinks.scss';

function renderSocialMediaLinks() {
  return (
    <div className="social-media-icons">
      <a href="#"><div className="facebook">x</div></a>
      <a href="#"><div className="twitter">x</div></a>
      <a href="#"><div className="rss">x</div></a>
    </div>
  );
}
const SocialMediaLinks = (props) => {
  return(
    <div className="component-social-media-links">
      <h3 className="social-media-links-title"> Social Media </h3>
        {renderSocialMediaLinks()}
      <div className="seperator-articles"></div>
    </div>
  );

};
export default SocialMediaLinks;
