import React, {Component} from 'react';
import Extra from './Extra';
import '../../../styles/home/sections/WithSomeExtras.scss';

let extrasData = [
  {
    icon:'',
    title:'Globaly Scalable',
    subtitle:'1000\'s of Devices'
  },
  {
    icon:'',
    title:'Native MQTT',
    subtitle:'For IOT Devices'
  },{
    icon:'',
    title:'Guarenteed Delivery',
    subtitle:'To Any Device, Any Location, Regardless of Connection Stability'
  },{
    icon:'',
    title:'Retrieve Missed Messages',
    subtitle:'For Up To 24 Hours of Being Disconnected'
  },{
    icon:'',
    title:'Casual Ordering',
    subtitle:'Means Messages Always Arrive in the Correct Order'
  },{
    icon:'',
    title:'Durable Queue',
    subtitle:'All Messages for Asynchronous Server Side Processing'
  }]

class WithSomeExtras extends Component {

  renderExtras() {
    return extrasData.map((extra, index)=>{
      return (
        <Extra
          key={extra.title + '-' + index}
          icon={extra.icon}
          title={extra.title} 
          subtitle={extra.subtitle} />
      );
    });
  }

  render() {
    return (
      <div className="component-with-some-extras">
        <div className="extras-header row">
            <div className="col-md-12"><h4>with some extras ...</h4></div>
        </div>

        <div className="extras row">
          {this.renderExtras()}
        </div>

    </div>
    );
  }
}
export default WithSomeExtras;
