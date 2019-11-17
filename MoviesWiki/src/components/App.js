import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ResultsBody from "./ResultsBody";

import styles from "../styles/App.css"

import '../styles/Global.css';

class App extends Component {
	constructor(props) {
		super(props);
	}
 
    render() {
        
        var items = [ {
            title: "Interstellar",
            releaseDate: "2014",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action",
        }, {
            title: "Interstellar 2",
            releaseDate: "2015",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action2",
        }, {
            title: "Interstellar 3",
            releaseDate: "2016",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action 3",
        }, {
            title: "Interstellar 4",
            releaseDate: "2017",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action 4",
        }, {
            title: "Interstellar 5",
            releaseDate: "2018",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action 5",
        }, {
            title: "Interstellar 5",
            releaseDate: "2018",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action 5",
        }, {
            title: "Interstellar 5",
            releaseDate: "2018",
            image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
            genre: "action 5",
        }];

        var headerConfig = {
            title:"Find Your Movies",
                searchConfig: {
                placeHolder: "Quentin Tarantino",
                buttonText: "Search",
                searchFilter: {
                    title: "Search by",
                    option1: "Title",
                    option2: "Gengre"
                }
            }
        };

        var footerConfig ={
            title: "Copyright &copy; 2019 AkTest"
        };

        var resultsBodyConfig = {
            itemsPerRow: 4,
            resultSortConfig: {
                title: "Sort by",
                option1: "Release date",
                option2: "Rating"
            },
            resultsCountConfig: {
                title: "movies found"
            }
        }

        return (
            <div>
				<Header config={headerConfig} />
				<ResultsBody items={items} config={resultsBodyConfig}/>
				<Footer config={footerConfig}/>
            </div>
        );
    }
}

export default App;