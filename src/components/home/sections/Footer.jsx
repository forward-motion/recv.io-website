import React from 'react';
import Link from 'gatsby-link';
import '../../../styles/home/sections/Footer.scss';
import FooterBG from '../../../assets/img/home/footer-bg.png';

let date = new Date().getFullYear();


const Footer = () => (
    <div className="component-footer"
         style={{
             backgroundImage:`url(${FooterBG})`,
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
         }}>
        <div className="copy-right">
            <span> © {date} - recv.io</span>
        </div>
    </div>
);

export default Footer;