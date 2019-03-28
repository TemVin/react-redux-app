import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Image.less';

const Image = ({ url, alt }) => (
  <img src={url} alt={alt} />
);

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default CSSModules(Image, styles);
