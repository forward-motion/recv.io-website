import React, {Component} from 'react';
import Link from 'gatsby-link';
import Slider from 'react-rangeslider';
import CompareTable from './CompareTable';


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
        <h1>Compare Page</h1>
        <div className="row">
          <div className="col-md-12">
            <h3>Our calculator can help you decide which realtime technology to choose
            even if it isn't ours</h3>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-md-12">
              <h2>Usage</h2>
              <h3>Max concurrent connections per month:</h3>
              <Slider
                value={this.state.concurrent}
                orientation="horizontal"
                labels={{0: 'Low', 50: 'Medium', 100: 'High'}}
                onChange={this.handleConcurrentOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3>{this.state.concurrent}</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-md-12">
              <h3>Max messages per month:</h3>
              <Slider
                value={this.state.maxMsg}
                orientation="horizontal"
                labels={{0: 'Low', 50: 'Medium', 100: 'High'}}
                onChange={this.handleMaxMsgOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3>{this.state.maxMsg}</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-md-12">
              <h3>Average message size:</h3>
              <Slider
                value={this.state.avgMsg}
                orientation="horizontal"
                labels={{0: 'Low', 50: 'Medium', 100: 'High'}}
                onChange={this.handleAvgMsgOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3>{this.state.avgMsg}</h3>
            </div>
          </div>
        </div>

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

        <div className="row">
          <div className="col-md-12">
            <h2>Results:</h2>
            <CompareTable data={data}/>
          </div>
        </div>
      </div>
    );
  }
}



export default ComparePage;
