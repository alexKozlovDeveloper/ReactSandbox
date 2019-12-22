import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router';

import SearchField from './SearchField';
import SearchButton from './SearchButton';
import CustomOptionList from '../Common/CustomOptionList';
import {
  updateSearchText, updateSearchBy, loading, updateMovies,
} from '../../actions/index';

import styles from '../../styles/Search.css';

class Search extends Component {
  searchMovies() {
    this.props.updateMoviesBySeachFunc(this.props.searchText, this.props.searchBy);

    this.props.history.push(`/search/${this.props.searchText.replace(' ', '%20')}`);
  }

  submitSearch(e) {
    if (e.which === 13) {
      this.searchMovies();
    }
  }

  render() {
    const selectedIndex = this.props.searchBy === 'title' ? '0' : '1';

    return (
            <div className={styles.search}>
                <div>
                    <SearchField searchText={this.props.searchText} placeHolder={this.props.config.placeHolder} updateFunc={this.props.updateSearchTextFunc} submitFunc={(e) => this.submitSearch(e)} />
                    <SearchButton buttonText={this.props.config.buttonText} updateFunc={() => this.searchMovies()} />
                </div>
                <CustomOptionList config={this.props.config.searchFilter} selectedIndex={selectedIndex} updateFunc={this.props.updateSearchByFunc} />
            </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateSearchTextFunc: (searchText) => {
      dispatch(updateSearchText(searchText));
    },
    updateSearchByFunc: (searchBy) => {
      dispatch(updateSearchBy(searchBy));
    },
    updateMoviesBySeachFunc: (searchText, searchBy) => {
      dispatch(loading());

      const url = `https://reactjs-cdp.herokuapp.com/movies?search=${searchText}&searchBy=${searchBy}&sortBy=id&sortOrder=asc`;

      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            dispatch(updateMovies(result.data));
          },
        );
    },
  };
}

function mapStateToProps(state) {
  const {
    movies, isLoaded, error, searchText, searchBy,
  } = state.moviesReducer;

  return {
    movies,
    isLoaded,
    error,
    searchText,
    searchBy,
  };
}

Search.propTypes = {
  movies: PropTypes.array,
  isLoaded: PropTypes.bool,
  error: PropTypes.object,
  searchText: PropTypes.string,
  searchBy: PropTypes.string,
  updateSearchTextFunc: PropTypes.func,
  updateSearchByFunc: PropTypes.func,
  updateMoviesBySeachFunc: PropTypes.func,
  history: PropTypes.object,
  config: PropTypes.shape({
    buttonText: PropTypes.string,
    placeHolder: PropTypes.string,
    searchFilter: PropTypes.object,
  }),
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
