import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Country.less';

const Country = ({ country }) => (
  <div className="block-country">
    <div className="item">{country.name}</div>
    <div>{country.capital}</div>
  </div>
);

Country.propTypes = {
  country: PropTypes.object,
};

export default CSSModules(Country, styles);
