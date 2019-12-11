import React, { Component } from "react";
import { connect } from 'react-redux'

import ResultsCount from "./Common/ResultsCount";
import ItemsContainer from "./Container/ItemsContainer";
import CustomOptionList from "./Common/CustomOptionList";
import Spinner from "./Common/Spinner";
import { updateSelectedItem, updateMovies, updateSortBy } from "../actions/index";

import styles from "../styles/ResultsBody.css"

class ResultsBody extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.isLoaded == false) {
            fetch("https://reactjs-cdp.herokuapp.com/movies?sortBy=id")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.props.updateMoviesFunc(result);
                    },
                    (error) => {
                        // TODO: Process error
                    }
                )
        }
    }

    render() {
        var content;

        var selectedIndex = this.props.sortBy === 'release_date' ? "0" : "1";

        var sortBy = this.props.sortBy;

        function compare(a, b) {
            if (a[sortBy] < b[sortBy]) {
                return -1;
            }
            if (a[sortBy] > b[sortBy]) {
                return 1;
            }
            return 0;
        }

        let sortedMovies = this.props.movies.concat([]);
        sortedMovies.sort(compare);

        if (this.props.isLoaded === true) {
            content = (<>
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
            </>);
        } else {
            content = (<Spinner></Spinner>)
        }

        return (
            <div className={styles.body}>
                {content}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateMoviesFunc: (movies) => {
            dispatch(updateMovies(movies.data))
        },
        updateSortByFunc: (sortBy) => {
            dispatch(updateSortBy(sortBy))
        },
        updateSelectedItemFunc: (item) => {
            dispatch(updateSelectedItem(item))
        }
    }
}

function mapStateToProps(state) {
    const { movies, isLoaded, sortBy } = state.moviesReducer;

    return {
        movies: movies,
        isLoaded: isLoaded,
        sortBy: sortBy
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBody);