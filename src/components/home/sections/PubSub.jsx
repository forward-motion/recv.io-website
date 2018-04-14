import React from 'react';
import Link from 'gatsby-link';

import '../../../styles/home/sections/PubSub.scss';
import BackgroundImage from '../../../img/images/home/pub-sub-bg.png';
import CodeSnip1 from '../../../img/images/home/codesnip-1.png';
import CodeSnip2 from '../../../img/images/home/codesnip-2.png';

function renderCodeSnip(title, image, link) {
  return (
    <div className="code-snip code-snip-1 col-md-6">
      <div className="title-wrapper">
        <Link to={link}>
          <div className="title">{title}</div>
        </Link>
        <div className="title-underline"></div>
      </div>
      <div className="image"
        style={{
        backgroundImage:`url(${image})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"98%",
      }}></div>
    </div>
  );
}
const PubSub = () => (
  <div className="component-pub-sub"
    style={{
      backgroundImage:`url(${BackgroundImage})`,
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center"
    }}>
    <div className="codesnip-wrapper row">
      {renderCodeSnip('subscribe',CodeSnip1, '#' )}
      {renderCodeSnip('publish',CodeSnip2, '#' )}
    </div>

  </div>
);

export default PubSub;
