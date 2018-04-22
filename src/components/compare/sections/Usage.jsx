import React from 'react';
import '../../../styles/compare/sections/Usage.scss';
import '../../../styles/compare/sections/SliderStyle.scss';
import Slider from 'react-rangeslider';
import Numeral from 'numeral';

function getDivider(props){
  if(props.divider === true){
    return(
      <div className="usage-seperator"></div>
    );
  }
}



const Usage = (props) => (
  <div className="component-usage col-md-4">
    <div className="row">
      <div className="col-md-12">
        <span className="slider-title">{props.title}</span>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <span className="slider-value">{Numeral(props.value).format('0,0')}</span>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <Slider
          value={props.value}
          orientation="horizontal"
          //labels={{0: props.lowValue, 100: props.highValue}}
          onChange={props.onChange}
          min={props.min}
          max={props.max}
        />
        <div className="slider-labels">
          <div className="min">{props.lowValue}</div>
          <div className="max">{props.highValue}</div>
        </div>
      </div>
    </div>
    {getDivider(props)}
  </div>
);

export default Usage;
