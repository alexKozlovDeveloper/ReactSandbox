import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ResultsBody from "./ResultsBody";
import ItemDetails from "./ItemDetails";

import ErrorBoundary from "./Error/ErrorBoundary";

import styles from "../styles/App.css"

class App extends Component {
	constructor(props) {
        super(props);
        
        this.state = { 
            moviesList: [ {
                title: "Interstellar",
                releaseDate: "2014",
                image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
                genre: "action",
                rating: 7.2,
                duration: 145,
                description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
            }, {
                title: "Interstellar 2",
                releaseDate: "2015",
                image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
                genre: "action2",
                rating: 7.2,
                duration: 145,
                description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
            }, {
                title: "Interstellar 3",
                releaseDate: "2016",
                image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
                genre: "action 3",
                rating: 7.2,
                duration: 145,
                description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
            }, {
                title: "Interstellar 4",
                releaseDate: "2017",
                image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
                genre: "action 4",
                rating: 7.2,
                duration: 145,
                description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
            }, {
                title: "Interstellar 5",
                releaseDate: "2018",
                image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
                genre: "action 5",
                rating: 7.2,
                duration: 145,
                description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
            }, {
                title: "Interstellar 5",
                releaseDate: "2018",
                image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
                genre: "action 5",
                rating: 7.2,
                duration: 145,
                description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
            }, {
                title: "Interstellar 5",
                releaseDate: "2018",
                image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
                genre: "action 5",
                rating: 7.2,
                duration: 145,
                description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
            }],
            headerConfig: {
                title: "Find Your Movies",
                searchConfig: {
                    placeHolder: "Quentin Tarantino",
                    buttonText: "Search",
                    searchFilter: {
                        title: "Search by",
                        selectedIndex: "0",
                        options: ["Title", "Genre"]
                    }
                }
            },
            footerConfig: {
                title: "Copyright © 2019 AkTest"
            },
            resultsBodyConfig: {
                itemsPerRow: 4,
                resultSortConfig: {
                    title: "Sort by",
                    selectedIndex: "1",
                    options: ["Release date", "Rating"]
                },
                resultsCountConfig: {
                    title: "movies found"
                }
            }
        };
	}
 
    render() {
        return  <div className={styles.font}>
                    <ErrorBoundary>
                        <Header config={this.state.headerConfig} />
                        <ItemDetails item={this.state.moviesList[0]}/>
                        <ResultsBody items={this.state.moviesList} config={this.state.resultsBodyConfig}/>
                        <Footer config={this.state.footerConfig}/>
                    </ErrorBoundary>
                </div>;
    }
}

export default App;