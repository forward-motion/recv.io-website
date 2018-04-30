import React from 'react';
import Link from 'gatsby-link';

import Hero from './sections/Hero';
import PubSub from './sections/PubSub';
import LookFamiliar from './sections/LookFamiliar';
import WildcardsQueues from './sections/WildcardsQueues';
import WithSomeExtras from './sections/WithSomeExtras';
import FullFeatureSet from './sections/FullFeatureSet';
import Footer from './sections/Footer';

import '../../styles/home/HomePage.scss';

const HomePage = (props) => (
  <div className="component-home-page">
      <Hero />
      <PubSub />
      <LookFamiliar />
      <WithSomeExtras />
      <FullFeatureSet />
      <div className="row">
          <Footer user={props.user} />
      </div>
  </div>
  );

export default HomePage;
