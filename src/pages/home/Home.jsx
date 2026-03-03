import React from 'react';
import Banner from './Banner';
import Grow from './Grow';
import Explore from './Explore';
import Poster from './Poster';
import Featured from './Featured';
import Latest from './Latest';
import ScrollToTop from '../../components/ScrollToTop';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Grow></Grow>
      <Explore></Explore>
      <Poster></Poster>
      <Featured></Featured>
      <Latest></Latest>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default Home;