import React from 'react';
import Link from 'gatsby-link';
import '../../../styles/home/sections/FullFeatureSet.scss';

const FullFeatureSet= (props) => (
  <div className="component-full-feature-set">
        <span className="feature-text">see our full feature set <Link to="#">here</Link>.</span>
  </div>
);
export default FullFeatureSet;
