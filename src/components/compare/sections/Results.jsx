import React from 'react';
import CompareTable from './CompareTable';
import '../../../styles/compare/sections/Results.scss';

const Results = (props) => (
  <div className="component-results">
    <div className="row">
      <div className="col-md-12">
        <div className="results-header">
          <div className="results-icon">X</div>
          <div className="results-title">Results</div>
        </div>
        <CompareTable data={props.data}/>
      </div>
    </div>
  </div>
);

export default Results;
