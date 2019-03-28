import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Image.less';

const Image = ({ className, url, alt }) => (
  <img className={className} src={url} alt={alt} />
);

Image.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default CSSModules(Image, styles);
