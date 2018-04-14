import React from 'react';
import '../../../styles/home/sections/Footer.scss';


const Footer = () => (
  <div className="component-footer">
    <div className="sign-in-header row">
        <div className="col-md-12">
            <h4>Ready to recv<span className="question-mark">?</span> Sign up for free with </h4>
        </div>
    </div>

    <div className="sign-in-option-parent">
        <div className="sign-in-option-wrapper">
            <div className="sign-in-option">
              <span className="sign-in-option-icon">X</span>
              GitHub
            </div>
        </div>

        <div className="sign-in-option-wrapper ">
            <div className="sign-in-option">
              <span className="sign-in-option-icon">X</span>
              BitBucket
            </div>
        </div>

        <div className="sign-in-option-wrapper">
            <div className="sign-in-option">
              <span className="sign-in-option-icon">X</span>
              Gmail
            </div>
        </div>
    </div>
  </div>
);

export default Footer;
