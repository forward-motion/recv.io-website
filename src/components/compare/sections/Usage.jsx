import React from 'react';
import '../../../styles/compare/sections/Usage.scss';
import '../../../styles/compare/sections/SliderStyle.scss';
import Slider from 'react-rangeslider';

const Usage = (props) => (
  <div className="component-usage col-md-4">
    <div className="row">
      <div className="col-md-12">
        <h3>{props.value}</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <Slider
          value={props.value}
          orientation="horizontal"
          labels={{0: 'Low', 50: 'Medium', 100: 'High'}}
          onChange={props.onChange}
        />
      </div>
    </div>

  </div>
);

export default Usage;
