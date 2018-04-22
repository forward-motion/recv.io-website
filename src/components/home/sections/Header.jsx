import React from 'react';
import '../../../styles/home/sections/Header.scss';
import BackgroundImage from '../../../assets/img/home/header-bg.png'
import DataFlow from '../../../assets/img/home/data-flow.png'
const Header = (props) => (
    <div className="component-header"
         style={{
             backgroundImage:`url(${BackgroundImage})`,
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center"
         }}>

        <div className="tagline">
            <div className="tagline-inner">
                <span className="tagline-text">A distributed, durable pub/sub network.</span>
                <ul>
                    <li>Multi-datacenter scalability</li>
                    <li>Guaranteed message delivery</li>
                    <li>Native MQTT and WebSocket support</li>
                    <li>Both fan-out and queue-based messaging</li>
                </ul>
            </div>
        </div>
        <div className="data-animation"
             style={{
                 backgroundImage:`url(${DataFlow})`,
                 backgroundRepeat:"no-repeat",
                 backgroundPosition:"center",
                 backgroundSize:"80%"
             }}>
        </div>
    </div>
);

export default Header;
