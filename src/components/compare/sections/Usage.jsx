import React from 'react';
import '../../../styles/compare/sections/Usage.scss';
import Slider from 'react-rangeslider';

const Usage = (props) => (
  <div className="component-usage">
    <div className="row">
      <div className="col-md-12">
        <h2>Usage</h2>
        <h3>Max concurrent connections per month:</h3>
        <Slider
          value={props.value}
          orientation="horizontal"
          labels={{0: 'Low', 50: 'Medium', 100: 'High'}}
          onChange={props.onChange}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3>{props.value}</h3>
      </div>
    </div>
  </div>
);

export default Usage;
