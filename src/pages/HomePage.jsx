import React, { Fragment } from 'react';

import CountriesContainer from './CountriesContainer/CountriesContainer';
import SearchContainer from './SearchContainer/SearchContainer';

const HomePage = () => (
  <Fragment>
    <SearchContainer />
    <CountriesContainer />
  </Fragment>
);

export default HomePage;
