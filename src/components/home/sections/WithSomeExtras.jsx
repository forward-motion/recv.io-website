import React, {Component} from 'react';
import Extra from './Extra';
import '../../../styles/home/sections/WithSomeExtras.scss';

let extrasData = [
  {
    icon:'icon-globally',
    title:'Globaly Scalable',
    subtitle:'1000\'s of Devices'
  },
  {
    icon:'',
    title:'Native MQTT',
    subtitle:'For IOT Devices'
  },{
    icon:'icon-delivery',
    title:'Guarenteed Delivery',
    subtitle:'To Any Device, Any Location, Regardless of Connection Stability'
  },{
    icon:'icon-retrievemsg',
    title:'Retrieve Missed Messages',
    subtitle:'For Up To 24 Hours of Being Disconnected'
  },{
    icon:'icon-ordering_b-01',
    title:'Casual Ordering',
    subtitle:'Means Messages Always Arrive in the Correct Order'
  },{
    icon:'icon-queue',
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
            <div className="col-md-12"><span className="extras-text">with some extras ...</span></div>
        </div>

        <div className="extras row">
          {this.renderExtras()}
        </div>

    </div>
    );
  }
}
export default WithSomeExtras;
