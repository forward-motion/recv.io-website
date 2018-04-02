import React from 'react';
import Link from 'gatsby-link';

import '../../styles/home/HomePage.scss';

const HomePage = () => (
    <div className="home-page">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/pricing/">Go to page 2</Link>
    </div>
);

export default HomePage;