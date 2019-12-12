import React, { Component } from "react";
import { connect } from 'react-redux'

import DetailsView from "../DetailsView";
import ItemsContainer from "../Container/ItemsContainer";

import Header from "../Header";
import Footer from "../Footer";

import styles from "../../styles/MovieView.css"

import { updateMovies } from "../../actions/index";

class MovieView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        let genres = this.props.selectedItem.genres;

        if (genres.lenght < 1) {
            return;
        }

        let genre = genres[0];

        let url = "https://reactjs-cdp.herokuapp.com/movies?search=" + genre + "&searchBy=genres&sortBy=vote_average&sortOrder=asc";

        if (this.props.isLoaded == false) {
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        debugger;
                        this.props.updateMoviesFunc(result);
                    },
                    (error) => {
                        debugger;
                        // TODO: Process error
                    }
                )
        }
    }

    render() {

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
