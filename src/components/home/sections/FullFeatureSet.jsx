import React from 'react';
import Link from 'gatsby-link';
import '../../../styles/home/sections/FullFeatureSet.scss';

const FullFeatureSet= (props) => (
  <div className="component-full-feature-set row">
    <div className="col-md-12">
        <span><span className="feature-text">see our full feature set</span> <span className="here"><Link to="#">here</Link></span><span className="feature-text">.</span> </span>
    </div>
  </div>
);
export default FullFeatureSet;
