import React, { Component } from "react";
import { connect } from 'react-redux'

import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import CustomOptionList from "../Common/CustomOptionList";

import styles from "../../styles/Search.css"

const updateSearchText = (searchText) => ({
    type: 'UPDATE_SEARCH_TEXT',
    searchText: searchText
});

const updateSearchBy = (searchBy) => ({
    type: 'UPDATE_SEARCH_BY',
    searchBy: searchBy
});

const loading = () => ({
    type: 'LOADING'
});

const updateMovies = (movies) => ({
    type: 'UPDATE_MOVIES',
    movies: movies
});

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    searchMovies() {
        debugger;
        this.props.updateMoviesBySeachFunc(this.props.searchText, this.props.searchBy);
    }

    render() {
        //debugger;
        return (            
            <div className={styles.search}> 
                <div>                
                    <SearchField placeHolder={this.props.config.placeHolder} updateFunc={this.props.updateSearchTextFunc}/>
                    <SearchButton buttonText={this.props.config.buttonText} updateFunc={() => this.searchMovies()}/>
                </div>
                <CustomOptionList config={this.props.config.searchFilter} updateFunc={this.props.updateSearchByFunc}/>
            </div>           
        );  
    }  
}

function mapDispatchToProps(dispatch) {
    return {
         updateSearchTextFunc: (searchText) => {
             //debugger;
             dispatch(updateSearchText(searchText))
         },
         updateSearchByFunc: (searchBy) => {
            dispatch(updateSearchBy(searchBy))
         },
         updateMoviesBySeachFunc: (searchText, searchBy) => {

            dispatch(loading())
            debugger;
            var url = "https://reactjs-cdp.herokuapp.com/movies?search=" + searchText + "&searchBy=" + searchBy + "&sortBy=release_date&sortOrder=asc";

            fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
                //debugger;
                dispatch(updateMovies(result));
            },
            (error) => {
                debugger;
                // TODO: Process error
            }
          )


            
         }
    }
}

function mapStateToProps(state){    
    const { movies, isLoaded, error, searchText, searchBy } = state.moviesReducer;

    return { 
        movies: movies,
        isLoaded: isLoaded,
        error: error,
        searchText: searchText,
        searchBy: searchBy,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);