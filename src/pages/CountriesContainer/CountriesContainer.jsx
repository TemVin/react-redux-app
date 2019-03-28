import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NotFound from '_components/NotFound';
import Country from '_components/Country';

class CountriesContainer extends PureComponent {
  createBookBlock = (countries) => {
    if (countries.length > 0) {
      return (
        countries.map(item => (
          <Country
            key={item.name}
            country={item}
          />
        )));
    }
    return <NotFound />;
  };

  render() {
    const { countries, searchCountries } = this.props;
    const CountriesBlocks = this.createBookBlock(countries);

    return (
      <Fragment>
        { (searchCountries.length > 1) && CountriesBlocks }
      </Fragment>
    );
  }
}

CountriesContainer.propTypes = {
  countries: PropTypes.array,
  searchCountries: PropTypes.string,
};


const mapStateToProps = ({ itemsFetchResults }) => ({
  searchCountries: itemsFetchResults.filter,
  countries: itemsFetchResults.countries,
  loading: itemsFetchResults.loading,
});

export default connect(mapStateToProps)(CountriesContainer);
