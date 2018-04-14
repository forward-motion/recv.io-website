import React, {Component} from 'react';
import Extra from './Extra';

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

class ExtrasParent extends Component {

  renderExtras() {
    return extrasData.map((extra)=>{
      return (
        <Extra icon={extra.icon} title={extra.title} subtitle={extra.subtitle} />
      );
    });
  }

  render() {
    return (
      <div>
        <div className="extras row">
          {this.renderExtras()}
        </div>

    </div>
    );
  }
}
export default ExtrasParent;
