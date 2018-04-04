import React from 'react';
import Link from 'gatsby-link';

import '../../styles/home/HomePage.scss';

const HomePage = () => (
    <div className="home-page container">
        {/* <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/pricing/">Go to page 2</Link> */}
        <div className="info-data row">
          <div className="tagline col-md-6">
            <h1>Some Tagline</h1>
              <ul>
                <li>Global Network</li>
                <li>Global Network</li>
                <li>Global Network</li>
                <li>Global Network</li>
              </ul>
          </div>
          <div className="data-animation col-md-6">
            <h1>Animation of Data</h1>
          </div>
        </div>
        <div className="code-sample row">
          <div className="subscribe col-md-6">
            <h2>Subscribe</h2>
            <pre>{`
              <div>
                hello world
              <div>
                `}
            </pre>
          </div>
          <div className="publish col-md-6">
            <h2>Publish</h2>
            <pre>{`
              <div>
                hello friend
              <div>
                `}
            </pre>
          </div>
        </div>
        <div className="look-familiar row">
          <div className="col-md-12"><h3>Look familiar? If you know Socket.io you know recv.io </h3></div>
        </div>
        <div className="extras-header row">
          <div className="col-md-12"><h3>With some extras</h3></div>
        </div>

        <div className="extras extras-left row">
          <div className="col-md-6">
            <h3> Globaly Scalable </h3>
            <span> body test about things </span>
          </div>
          <div className="extras extras-right col-md-6">
            <h3> Native MQTT </h3>
            <span> body test about things </span>
          </div>
        </div>

        <div className="row">
          <div className="extras extras-left col-md-6">
            <h3> Guarenteed Delivery </h3>
            <span> body test about things </span>
          </div>
          <div className="extras extras-right col-md-6">
            <h3> Retrieve Missed Messages </h3>
            <span> body test about things </span>
          </div>
        </div>

        <div className="row">
          <div className="extras extras-left col-md-6">
            <h3> Casual Ordering </h3>
            <span> body test about things </span>
          </div>
          <div className="extras extras-right col-md-6">
            <h3> Durable Queue </h3>
            <span> body test about things </span>
          </div>
        </div>

        <div className="link-to-features row">
          <div className="col-md-12">
            <h4>See our full feature set here</h4>
          </div>
        </div>

        <div className="sign-in-header row">
          <div className="col-md-12">
            <h4>Ready to recv? Sign up for free with </h4>
          </div>
        </div>

        <div className="sign-in-option-parent row">
          <div className="sign-in-option-wrapper col-md-4">
            <div className="sign-in-option">GitHub</div>
          </div>
          <div className="sign-in-option-wrapper col-md-4">
            <div className="sign-in-option">BitBucket</div>
          </div>
          <div className="sign-in-option-wrapper col-md-4">
            <div className="sign-in-option">Gmail</div>
          </div>
        </div>

        <footer></footer>
    </div>
);

export default HomePage;
