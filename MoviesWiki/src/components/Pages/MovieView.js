import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DetailsView from '../DetailsView';
import ItemsContainer from '../Container/ItemsContainer';

import Footer from '../Footer';
import Spinner from '../Common/Spinner';

import styles from '../../styles/MovieView.css';

import { updateMovies, loading, updateSelectedItem } from '../../actions/index';

class MovieView extends Component {
  constructor(props) {
    super(props);

    this.props.loadingFunc();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    const getMovieUrl = `https://reactjs-cdp.herokuapp.com/movies/${id}`;

    fetch(getMovieUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.props.updateSelectedItemFunc(result);

          const { genres } = this.props.selectedItem;

          if (genres.lenght < 1) {
            return;
          }

          const genre = genres[0];

          const url = `https://reactjs-cdp.herokuapp.com/movies?search=${genre}&searchBy=genres&sortBy=vote_average&sortOrder=asc`;

          fetch(url)
            .then((res) => res.json())
            .then(
              (data) => {
                this.props.updateMoviesFunc(data);
              },
            );
        },
      );
  }

  render() {
    if (this.props.isLoaded === false || this.props.movies == null) {
      return (
                <div className={styles.body}>
                    <Spinner></Spinner>
                </div>);
    }

    const { genres } = this.props.selectedItem;

    if (genres.lenght < 1) {
      return (<div></div>);
    }

    const genre = genres[0];

    return (
            <div className={styles.MovieView}>
                <DetailsView />
                <div className={styles.body}>
                    <div className={styles.infocontainer}>
                        <div className={styles.genretitle}>
                            Films by {genre} genre
                    </div>
                    </div>
                    <div>
                        <ItemsContainer items={this.props.movies} />
                    </div>
                </div>
                <Footer />
            </div>);
  }
}


function mapDispatchToProps(dispatch) {
  return {
    updateMoviesFunc: (movies) => {
      dispatch(updateMovies(movies.data));
    },
    loadingFunc: () => {
      dispatch(loading());
    },
    updateSelectedItemFunc: (item) => {
      dispatch(updateSelectedItem(item));
    },
  };
}

function mapStateToProps(state) {
  const {
    movies, isLoaded, sortBy, selectedItem,
  } = state.moviesReducer;

  return {
    selectedItem,
    movies,
    isLoaded,
    sortBy,
  };
}

MovieView.propTypes = {
  selectedItem: PropTypes.object,
  movies: PropTypes.array,
  isLoaded: PropTypes.bool,
  sortBy: PropTypes.string,
  updateMoviesFunc: PropTypes.func,
  loadingFunc: PropTypes.func,
  updateSelectedItemFunc: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieView);
