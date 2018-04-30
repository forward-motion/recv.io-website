import React from 'react';
import '../../../styles/home/sections/Hero.scss';
import BackgroundImage from '../../../assets/img/home/background-pattern.png'
import DataFlow from '../../../assets/img/home/data-flow.png'

import Animation from './Animation';

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
                
                <div className="buttons">
                    <a className="btn learn-more" id="learn-more" href="#learn-more">Learn More</a><a className="btn launch" href="#launch-form">Sign Up</a>
                </div>
            </div>
        </div>
        <div className="data-animation">
             <Animation />
        </div>
    </div>
);

export default Hero;
