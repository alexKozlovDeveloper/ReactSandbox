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
                debugger;

               //this.props.updateMoviesFunc(result);

            //   this.setState({
            //     isLoaded: true,
            //     items: result.items
            //   });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
                debugger;
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

//const ResultsBody = ({movies, config}) => {
    render() {



        debugger;

        var container = "";

        if(this.props.isLoaded === true){
            container = (<ItemsContainer items={this.props.movies} itemsPerRow={this.props.config.itemsPerRow}/>)
        } else {
            container = (<Spinner></Spinner>)
        }

        return (
            <div className={styles.body}>
                <div className={styles.infocontainer}>
                    <div className={styles.resultscountcontainer}>
                        <ResultsCount count={this.props.movies.length} title={this.props.config.resultsCountConfig.title}/>
                    </div>
                    <div className={styles.customoptionlistcontainer}>
                        <CustomOptionList config={this.props.config.resultSortConfig} />
                    </div>
                </div>
                <div>
                    {container}
                </div>
            </div>
        ); 
    }   
}

function mapDispatchToProps(dispatch) {
    return {
         updateMoviesFunc: (movies) => {
             console.log("Updating");
             dispatch(updateMovies(movies))
         }
    }
}

function mapStateToProps(state){
    //debugger;

    
    const { movies, isLoaded, error } = state.moviesReducer;
    //console.log("lol2" + title);
    return { 
        movies: movies,
        isLoaded: isLoaded,
        error: error
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(ResultsBody);