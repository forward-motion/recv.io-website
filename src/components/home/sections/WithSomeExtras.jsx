import React, {Component} from 'react';
import Extra from './Extra';
import '../../../styles/home/sections/WithSomeExtras.scss';

let extrasData = [
    {
        icon:'icon-globally',
        title:'Globaly Scalable',
        subtitle:'connecting your users across the street or across continents'
    },
    {
        icon:'',
        title:'Native MQTT',
        subtitle:'for IOT devices, with WebSocket support for browsers'
    },{
        icon:'icon-delivery',
        title:'Guaranteed Delivery',
        subtitle:'by picking up where you left off after a reconnection'
    },{
        icon:'icon-retrievemsg',
        title:'Redundant Storage',
        subtitle:'saves your messages in at least three separate locations'
    },{
        icon:'icon-ordering_b-01',
        title:'Causal Ordering',
        subtitle:'means messages always arrive in the correct order'
    },{
        icon:'icon-queue',
        title:'Durable Queue',
        subtitle:'of all messages for asynchronous server-side processing'
    }];

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
