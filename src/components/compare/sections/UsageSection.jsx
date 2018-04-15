import React from 'react';
import Usage from './Usage';

import '../../../styles/compare/sections/UsageSection.scss';


const UsageSection = (props) => (
  <div className="component-usage-section">
    <Usage
      value={props.concurrent}
      onChange={props.concurrentOnChange}
    />
    <Usage
      value={props.maxMsg}
      onChange={props.maxMsgOnChange}
    />
    <Usage
      value={props.avgMsg}
      onChange={props.handleAvgMsgOnChange}
    />
  </div>
);

export default UsageSection;
