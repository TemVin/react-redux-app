import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { itemsFetchResults } from '_actions/countries';
import SearchInput from '_components/SearchInput/SearchInput';
import Image from '_components/Image/Image';


import spinner from '../../img/loading.gif';

class SearchContainer extends PureComponent {
  handleChangeFilter = (e) => {
    const valueInput = e.target.value;
    const { onChangeFilter } = this.props;
    onChangeFilter(valueInput);
  }

  render() {
    const {
      filter,
      loading,
    } = this.props;

    return (
      <Fragment>
        <SearchInput
          defaultValue={filter}
          placeholder="search..."
          onChange={this.handleChangeFilter}
        />
        { loading && <Image className="spinner" url={spinner} alt="spinner" /> }
      </Fragment>
    );
  }
}

SearchContainer.propTypes = {
  filter: PropTypes.string,
  loading: PropTypes.bool,
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: state.itemsFetchResults.filter,
  loading: state.itemsFetchResults.loading,
});

const mapDispatchProps = dispatch => ({
  onChangeFilter: (value) => {
    dispatch(itemsFetchResults(value));
  },
});

export default connect(mapStateToProps, mapDispatchProps)(SearchContainer);
