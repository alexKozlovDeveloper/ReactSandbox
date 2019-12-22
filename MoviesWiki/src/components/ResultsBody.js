import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultsCount from './Common/ResultsCount';
import ItemsContainer from './Container/ItemsContainer';
import CustomOptionList from './Common/CustomOptionList';
import Spinner from './Common/Spinner';

import {
  updateSelectedItem, updateMovies, updateSortBy, fetchMovies,
} from '../actions/index';

import styles from '../styles/ResultsBody.css';

class ResultsBody extends Component {
  componentDidMount() {
    this.props.downloadMoviesAsync('https://reactjs-cdp.herokuapp.com/movies?sortBy=id');
  }

  render() {
    if (this.props.isLoaded === false || this.props.movies == null) {
      return (
                <div className={styles.body}>
                    <Spinner></Spinner>
                </div>);
    }

    const selectedIndex = this.props.sortBy === 'release_date' ? '0' : '1';

    const { sortBy } = this.props;

    function compare(a, b) {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    }

    const sortedMovies = this.props.movies.concat([]);
    sortedMovies.sort(compare);

    return (
            <div className={styles.body}>
                <div className={styles.infocontainer}>
                    <div className={styles.resultscountcontainer}>
                        <ResultsCount count={this.props.movies.length} title={this.props.config.resultsCountConfig.title} />
                    </div>
                    <div className={styles.customoptionlistcontainer}>
                        <CustomOptionList config={this.props.config.resultSortConfig} selectedIndex={selectedIndex} updateFunc={this.props.updateSortByFunc} />
                    </div>
                </div>
                <div>
                    <ItemsContainer items={sortedMovies} itemsPerRow={this.props.config.itemsPerRow} />
                </div>
            </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateMoviesFunc: (movies) => {
      dispatch(updateMovies(movies.data));
    },
    downloadMoviesAsync: (url) => {
      dispatch(fetchMovies(url));
    },
    updateSortByFunc: (sortBy) => {
      dispatch(updateSortBy(sortBy));
    },
    updateSelectedItemFunc: (item) => {
      dispatch(updateSelectedItem(item));
    },
  };
}

function mapStateToProps(state) {
  const { movies, isLoaded, sortBy } = state.moviesReducer;

  return {
    movies,
    isLoaded,
    sortBy,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBody);
