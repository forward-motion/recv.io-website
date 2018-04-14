import React from 'react';

const Extra = (props) => (
  <div className="extras-parent col-md-6">
      <div className="extras-inner">
        <div className="extras-icon">
          <div className="extras-icon-inner">
            {props.icon}
          </div>
        </div>
        <div>
          <h3> {props.title} </h3>
          <span> {props.subtitle} </span>
        </div>
      </div>
  </div>
);

export default Extra;
