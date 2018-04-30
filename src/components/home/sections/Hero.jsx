import React from 'react';
import '../../../styles/home/sections/Hero.scss';
import BackgroundImage from '../../../assets/img/home/background-pattern.png'
import DataFlow from '../../../assets/img/home/data-flow.png'
const Hero = (props) => (
    <div className="component-hero"
         style={{
             backgroundImage:`url(${BackgroundImage})`,
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center"
         }}>

        <div className="tagline">
            <div className="tagline-inner">
                <span className="tagline-text">A fully-hosted, durable, distributed pub/sub network.</span>
                <ul>
                    <li>Multi-region scalability</li>
                    <li>Guaranteed message delivery</li>
                    <li>Native MQTT and WebSocket support</li>
                    <li>Both fan-out and queue-based messaging</li>
                </ul>
                
                <div>
                    <a className="btn" href="#launch-form">Launching in June!</a>
                </div>
            </div>
        </div>
        <div className="data-animation">
             <img className="data-img" src={DataFlow}/>
        </div>
    </div>
);

export default Hero;
