import React from 'react';
import '../../../styles/home/sections/PubSub.scss';

const PubSub = () => (
  // <div className="component-sign-up">
  <div className="component-pub-sub">
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
  </div>
);

export default PubSub;
