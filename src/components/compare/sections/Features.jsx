import React from 'react';
import '../../../styles/compare/sections/Features.scss';

const Features = (props) => (
  <div className="component-features">
    <div className="row">
      <div className="col-md-12">
        <h2>Features:</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <input type="checkbox" /> Choice 1
      </div>
      <div className="col-md-6">
        <input type="checkbox" /> Choice 2
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <input type="checkbox" /> Choice 3
      </div>
      <div className="col-md-6">
        <input type="checkbox" /> Choice 4
      </div>
    </div>
  </div>
);

export default Features;
