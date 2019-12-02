import React, { Component } from "react";
import { connect } from 'react-redux'

import ResultsCount from "./Common/ResultsCount";
import ItemsContainer from "./Container/ItemsContainer";
import CustomOptionList from "./Common/CustomOptionList";
import Spinner from "./Common/Spinner";

import styles from "../styles/ResultsBody.css"

const updateMovies = (movies) => ({
    type: 'UPDATE_MOVIES',
    movies: movies
});

class ResultsBody extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch("https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average")
          .then(res => res.json())
          .then(
            (result) => {
               this.props.updateMoviesFunc(result);
            },
            (error) => {
                debugger;
                // TODO: Process error
            }
          )
      }

    render() {
        var content = "";

        if(this.props.isLoaded === true){
            content = (<> 
                         <div className={styles.infocontainer}>
                            <div className={styles.resultscountcontainer}>
                                <ResultsCount count={this.props.movies.length} title={this.props.config.resultsCountConfig.title}/>
                            </div>
                            <div className={styles.customoptionlistcontainer}>
                                <CustomOptionList config={this.props.config.resultSortConfig} />
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
         }
    }
}

function mapStateToProps(state){    
    const { movies, isLoaded, error } = state.moviesReducer;

    return { 
        movies: movies,
        isLoaded: isLoaded,
        error: error
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(ResultsBody);