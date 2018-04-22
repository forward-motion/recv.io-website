import React from 'react';
import Link from 'gatsby-link';

import Header from './sections/Header';
import PubSub from './sections/PubSub';
import LookFamiliar from './sections/LookFamiliar';
import WithSomeExtras from './sections/WithSomeExtras';
import FullFeatureSet from './sections/FullFeatureSet';
import Footer from '../_global/ui/Footer';

import '../../styles/home/HomePage.scss';

const HomePage = (props) => (
  <div className="component-home-page">
      <Header />
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
