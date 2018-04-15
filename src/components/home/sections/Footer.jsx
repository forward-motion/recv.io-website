import React from 'react';
import Link from 'gatsby-link';
import '../../../styles/home/sections/Footer.scss';
import FooterBG from '../../../img/images/home/footer-bg.png';

let date = new Date().getFullYear();

function getSignIn(service, icon, link) {
  return (
    <div className="sign-in-option-wrapper">
      <Link to={link}>
        <div className="sign-in-option">
        <span className="sign-in-option-icon">{icon}</span>
        {service}
        </div>
      </Link>
    </div>
  );
}

const Footer = () => (
  <div className="component-footer"
    style={{
      backgroundImage:`url(${FooterBG})`,
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
    }}>

    <div className="sign-in-header ">
      <h4>Ready to recv<span className="question-mark">?</span> Sign up for <strong>free</strong> with </h4>
    </div>
    <div className="sign-in-option-parent">
      {getSignIn("GitHub", "X", "#")}
      {getSignIn("BitBucket", "X", "#")}
      {getSignIn("Gmail", "X", "#")}
    </div>
    <div className="copy-right">
      <span> © {date} - recv.io All Right Reserved</span>
    </div>
  </div>
);

export default Footer;
