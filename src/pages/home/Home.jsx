import React from 'react';
import Banner from './Banner';
import Grow from './Grow';
import Explore from './Explore';
import Poster from './Poster';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Grow></Grow>
      <Explore></Explore>
      <Poster></Poster>
    </div>
  );
};

export default Home;