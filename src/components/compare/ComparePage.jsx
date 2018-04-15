import React, {Component} from 'react';
import Link from 'gatsby-link';
import Slider from 'react-rangeslider';



import OurCalculator from './sections/OurCalculator';
import Usage from './sections/Usage';
import Features from './sections/Features';
import Results from './sections/Results';

import '../../styles/compare/ComparePage.scss';

class ComparePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concurrent: 0,
      maxMsg: 0,
      avgMsg: 0,
    }
    this.handleConcurrentOnChange = this.handleConcurrentOnChange.bind(this);
    this.handleMaxMsgOnChange = this.handleMaxMsgOnChange.bind(this);
    this.handleAvgMsgOnChange = this.handleAvgMsgOnChange.bind(this);
  }
  handleConcurrentOnChange(value){
    this.setState({
      concurrent: value
    });
  }
  handleMaxMsgOnChange(value){
    this.setState({
      maxMsg: value,
    });
  }
  handleAvgMsgOnChange(value){
    this.setState({
      avgMsg: value,
    });
  }
  render(){
    const data = [{
      name: 'Socket.io',
      price: 26,
      feature_a: 'Feature Stuff',
      feature_b: 'Feature Things',
    },{
      name: 'recv.io',
      price: 100,
      feature_a: 'Feature Stuff',
      feature_b: 'Feature Things',
    }];
    const columns = [{
      Header: '',
      accessor: 'name'
    }, {
      Header: 'Price',
      accessor: 'price',
      // Cell: props => <span>{props.value}</span> // Custom cell components!
    }, {
      Header: 'Feature A',
      accessor: 'feature_a',
    }, {
      Header: 'Feature B',
      accessor: 'feature_b',
    }];

    return(
      <div className="compare-page container">
        <OurCalculator />
        <Usage
          value={this.state.concurrent}
          onChange={this.handleConcurrentOnChange}
        />
        <Usage
          value={this.state.maxMsg}
          onChange={this.handleMaxMsgOnChange}
        />
        <Usage
          value={this.state.avgMsg}
          onChange={this.handleAvgMsgOnChange}
        />

        <Features />

        <Results data={data}/>

        {/* Import footer from home */}

      </div>
    );
  }
}



export default ComparePage;
