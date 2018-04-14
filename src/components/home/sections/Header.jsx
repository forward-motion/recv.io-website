import React from 'react';
import '../../../styles/home/sections/Header.scss';
const Header = (props) => (
  <div className="component-header">
    <div className="info-data row">
        <div className="tagline col-md-6">
            <span className="tagline-text">Lorem Ipsum Dolor sit <br />Some Tagline.</span>
            <ul>
                <li>global Pub/Sub Network</li>
                <li>guarenteed Message Delivery</li>
                <li>websockets or Native </li>
                <li>durable Queue of Messages</li>
            </ul>
        </div>
        <div className="data-animation col-md-6">
            <h1>Animation of Data</h1>
        </div>
    </div>
  </div>
);

export default Header;
