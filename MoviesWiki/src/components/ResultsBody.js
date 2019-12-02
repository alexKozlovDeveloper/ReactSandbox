import React, { Component } from "react";
import { connect } from 'react-redux'

import ResultsCount from "./Common/ResultsCount";
import ItemsContainer from "./Container/ItemsContainer";
import CustomOptionList from "./Common/CustomOptionList";
import Spinner from "./Common/Spinner";
import { updateSearchBy, updateMovies, sortMovies, updateSortBy } from "../actions/index";

import styles from "../styles/ResultsBody.css"

class ResultsBody extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch("https://reactjs-cdp.herokuapp.com/movies?sortBy=id")
          .then(res => res.json())
          .then(
            (result) => {
                this.props.updateMoviesFunc(result);
                this.props.updateSelectedItemFunc(result.data[0]);
            },
            (error) => {
                // TODO: Process error
            }
        )
    }

    render() {
        var content;

        if(this.props.isLoaded === true){
            content = (<> 
                    <div className={styles.infocontainer}>
                        <div className={styles.resultscountcontainer}>
                            <ResultsCount count={this.props.movies.length} title={this.props.config.resultsCountConfig.title}/>
                        </div>
                        <div className={styles.customoptionlistcontainer}>
                            <CustomOptionList config={this.props.config.resultSortConfig} updateFunc={this.props.updateSearchByFunc}/>
                        </div>
                    </div>
                    <div>
                        <ItemsContainer items={this.props.movies} itemsPerRow={this.props.config.itemsPerRow}/>
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
             dispatch(updateMovies(movies))
             dispatch(sortMovies())
         },
         updateSearchByFunc: (sortBy) => {
            dispatch(updateSortBy(sortBy))
            dispatch(sortMovies())
        },
        updateSelectedItemFunc: (item) => {
            dispatch(updateSearchBy(item))
        }
    }
}

function mapStateToProps(state){    
    const { movies, isLoaded, error, sortBy } = state.moviesReducer;

    return { 
        movies: movies,
        isLoaded: isLoaded,
        error: error,
        sortBy: sortBy
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(ResultsBody);