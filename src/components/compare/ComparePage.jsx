import React, {Component} from 'react';
import Link from 'gatsby-link';
import Slider from 'react-rangeslider';



import OurCalculator from './sections/OurCalculator';
import Usage from './sections/Usage';
import Features from './sections/Features';
import Results from './sections/Results';
import Footer from '../home/sections/Footer';

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
      <div className="compare-page">
        <div className="container">
          <OurCalculator />

          <div className="usage-section-wrapper">
            <div className="usage-header">
              <div className="usage-icon">X</div>
              <div className="usage-title">Usage</div>
            </div>
            <div className="usage-section row">
              <Usage
                value={this.state.concurrent}
                onChange={this.handleConcurrentOnChange}
                title="Max concurrent connections per month:"
                divider={true}
                lowValue={"500"}
                highValue={"500,000+"}
                min={500}
                max={50000}
              />

              <Usage
                value={this.state.maxMsg}
                onChange={this.handleMaxMsgOnChange}
                title="Max messages per month:"
                divider={true}
                lowValue={"100K"}
                highValue={"100M+"}
                min={100}
                max={1000000}
              />
              <Usage
                value={this.state.avgMsg}
                onChange={this.handleAvgMsgOnChange}
                title="Average message size:"
                divider={false}
                lowValue={"1K"}
                highValue={"1MB+"}
                min={1}
                max={1000}
              />
            </div>
          </div>
          <div className="spacer-middle">
            <div className="spacer-inner"></div>
          </div>
          <Features />

          <Results data={data}/>

          <div className="background">
            <div className="top-dark-blue"></div>
            <div className="middle-white"></div>
            <div className="btm-light-blue"></div>
          </div>

          <div className="row">
            <Footer user={this.props.user} />
          </div>
        </div>
      </div>
    );
  }
}



export default ComparePage;
