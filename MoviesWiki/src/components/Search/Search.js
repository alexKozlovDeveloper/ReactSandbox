import React, { Component } from "react";
import { connect } from 'react-redux'

import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import CustomOptionList from "../Common/CustomOptionList";
import { updateSearchText, updateSearchBy, loading, updateMovies } from "../../actions/index";

import styles from "../../styles/Search.css"

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
            var url = "https://reactjs-cdp.herokuapp.com/movies?search=" + searchText + "&searchBy=" + searchBy + "&sortBy=id&sortOrder=asc";

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