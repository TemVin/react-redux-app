import React, { PureComponent, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import styles from './SearchInput.less';

class SearchInput extends PureComponent {
  render() {
    const { onChange, defaultValue, placeholder } = this.props;

    return (
      <Fragment>
        <Form>
          <Form.Group>
            <Form.Label>
              Search countries
            </Form.Label>
            <Form.Control
              className="input"
              defaultValue={defaultValue}
              placeholder={placeholder}
              onChange={onChange}
            />
          </Form.Group>
        </Form>
      </Fragment>
    );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default CSSModules(SearchInput, styles);
