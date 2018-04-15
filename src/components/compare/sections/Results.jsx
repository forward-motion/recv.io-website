import React from 'react';
import CompareTable from './CompareTable';
import '../../../styles/compare/sections/Results.scss';

const Results = (props) => (
  <div className="component-results">
    <div className="row">
      <div className="col-md-12">
        <h2>Results:</h2>
        <CompareTable data={props.data}/>
      </div>
    </div>
  </div>
);

export default Results;
