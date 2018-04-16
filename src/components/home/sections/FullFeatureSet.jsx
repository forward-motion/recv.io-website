import React from 'react';
import Link from 'gatsby-link';
import '../../../styles/home/sections/FullFeatureSet.scss';

const FullFeatureSet= (props) => (
  <div className="component-full-feature-set row">
    <div className="col-md-12">
        <h4>see our full feature set <span><Link to="#">here</Link></span>. </h4>
    </div>
  </div>
);
export default FullFeatureSet;
