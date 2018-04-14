import React from 'react';
import Link from 'gatsby-link';

import '../../styles/home/HomePage.scss';

const HomePage = () => (
    <div className="home-page container-fluid">
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
            <div className="col-md-12">
              <h3>Look familiar?</h3>
              <br />
              <span> If you know Socket.io you know recv.io </span>
            </div>
        </div>
        <div className="extras-header row">
            <div className="col-md-12"><h4>with some extras ...</h4></div>
        </div>
        <div className="extras-wrapper">
          <div className="extras row">
              <div className="extras-left col-md-6">
                  <div>
                      <h3> Globaly Scalable </h3>
                      <span> 1000's of Devices </span>
                  </div>
              </div>
              <div className="extras-right col-md-6">
                  <div>
                      <h3> Native MQTT </h3>
                      <span> For IOT Devices </span>
                  </div>
              </div>
          </div>

          <div className="extras row">
              <div className="extras-left col-md-6">
                  <div>
                      <h3> Guarenteed Delivery </h3>
                      <span> To Any Device, Any Location, Regardless of Connection Stability </span>
                  </div>
              </div>
              <div className="extras-right col-md-6">
                  <div>
                      <h3> Retrieve Missed Messages </h3>
                      <span> For Up To 24 Hours of Being Disconnected </span>
                  </div>
              </div>
          </div>

          <div className="extras row">
              <div className="extras-left col-md-6">
                  <div>
                      <h3> Casual Ordering </h3>
                      <span> Means Messages Always Arrive in the Correct Order </span>
                  </div>
              </div>
              <div className="extras-right col-md-6">
                  <div>
                      <h3> Durable Queue </h3>
                      <span> All Messages for Asynchronous Server Side Processing</span>
                  </div>
              </div>
          </div>
        </div>
        <div className="link-to-features row">
            <div className="col-md-12">
                <h4>See our full feature set <Link to="#"> here </Link> </h4>
            </div>
        </div>

        <div className="sign-in-header row">
            <div className="col-md-12">
                <h4>Ready to recv <span className="question-mark">?</span> Sign up for free with </h4>
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
