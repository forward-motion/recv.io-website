import React from 'react';
import Link from 'gatsby-link';

import Header from './sections/Header';
import PubSub from './sections/PubSub';
import LookFamiliar from './sections/LookFamiliar';
import WithSomeExtras from './sections/WithSomeExtras';
import FullFeatureSet from './sections/FullFeatureSet';
import Footer from './sections/Footer';

import '../../styles/home/HomePage.scss';

const HomePage = () => (
  <div className="component-home-page">
      <Header />
      <PubSub />
      <LookFamiliar />
      <WithSomeExtras />
      <FullFeatureSet />
      <Footer user={props.user} />
  </div>
  );

export default HomePage;
