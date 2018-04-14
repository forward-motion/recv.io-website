import React from 'react';
import '../../../styles/home/sections/Header.scss';
import BackgroundImage from '../../../img/images/home/header-bg.png'
import DataFlow from '../../../img/images/home/data-flow.png'
const Header = (props) => (
  <div className="component-header"
    style={{
      backgroundImage:`url(${BackgroundImage})`,
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center"
    }}>

        <div className="tagline">
          <div className="tagline-inner">
            <span className="tagline-text">Lorem Ipsum Dolor sit <br />Tagline Goes Here.</span>
            <ul>
                <li>global Pub/Sub Network</li>
                <li>guarenteed Message Delivery</li>
                <li>websockets or Native </li>
                <li>durable Queue of Messages</li>
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
