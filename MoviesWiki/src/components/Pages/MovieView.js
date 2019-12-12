import React, { Component } from "react";
import { connect } from 'react-redux'

import DetailsView from "../DetailsView";
import ItemsContainer from "../Container/ItemsContainer";

import Footer from "../Footer";
import Spinner from "../Common/Spinner";

import styles from "../../styles/MovieView.css"

import { updateMovies, loading, updateSelectedItem } from "../../actions/index";

class MovieView extends Component {
    constructor(props) {
        super(props);

        this.props.loadingFunc();
    }

    componentDidMount() {

        var id = this.props.match.params.id;

        let getMovieUrl = "https://reactjs-cdp.herokuapp.com/movies/" + id;

        fetch(getMovieUrl)
            .then(res => res.json())
            .then(
                (result) => {

                    this.props.updateSelectedItemFunc(result);

                    let genres = this.props.selectedItem.genres;

                    if (genres.lenght < 1) {
                        return;
                    }

                    let genre = genres[0]

                    let url = "https://reactjs-cdp.herokuapp.com/movies?search=" + genre + "&searchBy=genres&sortBy=vote_average&sortOrder=asc"

                    fetch(url)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                //debugger;
                                this.props.updateMoviesFunc(result);
                            },
                            (error) => {
                            }
                        )
                },
                (error) => {
                })
    }

    render() {

        if (this.props.isLoaded === false || this.props.movies == null) {
            return (
                <div className={styles.body}>
                    <Spinner></Spinner>
                </div>)
        }

        let genres = this.props.selectedItem.genres;

        if (genres.lenght < 1) {
            return;
        }

        let genre = genres[0];

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
                <Footer config={this.props.footerConfig} />
            </div>)
    }
}


function mapDispatchToProps(dispatch) {
    return {
        updateMoviesFunc: (movies) => {
            dispatch(updateMovies(movies.data))
        },
        loadingFunc: () => {
            dispatch(loading())
        },
        updateSelectedItemFunc: (item) => {
            dispatch(updateSelectedItem(item))
        }
    }
}

function mapStateToProps(state) {
    const { movies, isLoaded, sortBy, selectedItem } = state.moviesReducer;

    return {
        selectedItem: selectedItem,
        movies: movies,
        isLoaded: isLoaded,
        sortBy: sortBy
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieView);
