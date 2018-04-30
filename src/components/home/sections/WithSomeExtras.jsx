import React, {Component} from 'react';
import Extra from './Extra';
import '../../../styles/home/sections/WithSomeExtras.scss';

const extrasData = [
    {
        icon:'icon-earth',
        title:'Globaly Scalable',
        subtitle:'to connect users down the street or across continents'
    },
    {
        icon:'icon-antenna',
        title:'Native MQTT',
        subtitle:'for IOT devices, with WebSocket support for browsers'
    },
    {
        icon:'icon-cloud-download',
        title:'Guaranteed Delivery',
        subtitle:'by picking up where you left off after a reconnection'
    },
    {
        icon:'icon-cloud-check',
        title:'Redundant Storage',
        subtitle:'saves your messages in at least three separate locations'
    },
    {
        icon:'icon-list-numbered',
        title:'Causal Ordering',
        subtitle:'means messages always arrive in the correct order'
    },
    {
        icon:'icon-stack',
        title:'Durable Queues',
        subtitle:'of all messages for asynchronous server-side processing'
    },
    {
        icon:'icon-lock',
        title:'Topic Permissioning',
        subtitle:'gives you flexible, powerful auth schemes'
    },
    {
        icon:'icon-plus',
        title:'Wildcard Subscriptions',
        subtitle:'retrieves messages for any topics that match'
    }
];

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
      <div className="component-with-some-extras ">
        <div className="extras-header">
            <div><span className="extras-text">with some extras...</span></div>
        </div>

                <div className="extras row">
                    {this.renderExtras()}
                </div>

            </div>
        );
    }
}
export default WithSomeExtras;
